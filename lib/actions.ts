'use server';

import { revalidatePath } from 'next/cache';
import { pool } from './dbConnection';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { signOut } from '@/auth';

const FormSchema = z.object({
  id: z.number(),
  content: z.string().min(1),
  userId: z.number(),
  date: z.string(),
});

const CreateFact = FormSchema.omit({ id: true, date: true });
const UpdateFact = FormSchema.omit({ date: true, id: true });

export async function createFact(formData: FormData) {
  const { content, userId } = CreateFact.parse({
    content: formData.get('content'),
    userId: parseInt(formData.get('userId') as string),
  });

  const db = await pool.connect();

  try {
    await db.query('INSERT INTO facts (content, userId) VALUES ($1, $2)', [
      content,
      userId,
    ]);
  } finally {
    db.release();
  }

  revalidatePath('/fact');
  redirect('/fact');
}

export async function updateFact(factId: number, formData: FormData) {
  const { content, userId } = UpdateFact.parse({
    content: formData.get('content'),
    userId: parseInt(formData.get('userId') as string),
  });

  const db = await pool.connect();
  try {
    await db.query(
      'UPDATE facts SET content = $1 WHERE id = $2 AND userId = $3',
      [content, factId, userId],
    );
  } finally {
    db.release();
  }

  revalidatePath('/fact');
  redirect('/fact');
}

export async function deleteFact(userId: number, factId: number) {
  const db = await pool.connect();

  try {
    await db.query('DELETE FROM facts WHERE id = $1 AND userId = $2', [
      factId,
      userId,
    ]);
  } finally {
    db.release();
  }
  revalidatePath('/my-jar');
  redirect('/my-jar');
}

export async function deleteUser(userId: number) {
  const db = await pool.connect();

  try {
    await db.query('DELETE FROM users WHERE id = $1', [userId]);
    await db.query('DELETE FROM accounts WHERE id = $1', [userId]);
  } finally {
    db.release();
  }
  signOut();
  revalidatePath('/');
  redirect('/');
}
