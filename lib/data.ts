'use server';

import type { Fact } from '@/types/factType';
import { format } from 'date-fns';
import { unstable_noStore as noStore } from 'next/cache';
import { pool } from './db-pool';
import { startOfWeek, endOfWeek } from 'date-fns';

export const getRandomPhrase = async (): Promise<string> => {
	noStore();

	const phrases = [
		'Great, you did it! Come back tomorrow for the next one.',
		'Well done, mission accomplished! Check back tomorrow for the next one.',
		'Fantastic job! Be sure to return tomorrow for more.',
		"Congratulations, you nailed it! Don't forget to return tomorrow for another challenge.",
		"You've done it splendidly! Visit us again tomorrow for the next one.",
		'Bravo, task completed! Join us again tomorrow for the next challenge.',
	];
	const randomIndex = Math.floor(Math.random() * phrases.length);
	return phrases[randomIndex];
};

export const getTodayFact = async (userId: number): Promise<Fact | null> => {
	// Add noStore() here to prevent the response from being cached.
	// This is equivalent to in fetch(..., {cache: 'no-store'}).
	noStore();

	const db = await pool.connect();
	try {
		const result = await db.query('SELECT * FROM facts WHERE created_at::date = $1 AND userId = $2', [
			new Date().toISOString().split('T')[0],
			userId,
		]);
		return result.rows[0] as any | Fact | undefined;
	} finally {
		db.release();
	}
};

export const getFactById = async (factId: string): Promise<Fact | null> => {
	noStore();

	const db = await pool.connect();

	try {
		const res = await db.query('SELECT * FROM facts WHERE id = $1', [factId]);
		return res.rows[0] as any | Fact | undefined;
	} finally {
		db.release();
	}
};

export const getFactsCount = async (userId: number): Promise<number> => {
	noStore();

	const db = await pool.connect();

	try {
		const res = await db.query('SELECT COUNT(*) FROM facts WHERE userId = $1', [userId]);

		return res.rows[0].count as any | number | undefined;
	} finally {
		db.release();
	}
};

export const getWeekFacts = async (userId: number, startOfWeekDate: Date, endOfWeekDate: Date): Promise<Fact[]> => {
	noStore();
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const db = await pool.connect();

	try {
		const res = await db.query('SELECT * FROM facts WHERE created_at::date BETWEEN $1 AND $2 AND userId = $3', [
			startOfWeekDate.toISOString().split('T')[0],
			endOfWeekDate.toISOString().split('T')[0],
			userId,
		]);
		return res.rows as any | Fact[] | undefined;
	} finally {
		db.release();
	}
};
