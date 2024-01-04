import { FactType } from "@/types/factType";
import { pool } from "@/models/db";

export const Fact = {
  create: async (userId: number, content: string): Promise<void> => {
    const db = await pool.connect();
    try {
      await db.query("INSERT INTO facts (userId, content) VALUES($1, $2)", [
        userId,
        content,
      ]);
    } finally {
      db.release();
    }
  },

  edit: async (id: number, userId: number, content: string): Promise<void> => {
    const db = await pool.connect();
    try {
      await db.query(
        "UPDATE facts SET content = $1 WHERE id = $2 AND userId = $3",
        [content, id, userId]
      );
    } finally {
      db.release();
    }
  },

  delete: async (id: number, userId: number): Promise<void> => {
    const db = await pool.connect();
    try {
      await db.query("DELETE FROM facts WHERE id = $1 AND userId = $2", [
        id,
        userId,
      ]);
    } finally {
      db.release();
    }
  },

  getToday: async (day: string, userId: number) => {
    const db = await pool.connect();
    try {
      const result = await db.query(
        "SELECT * FROM facts WHERE created_at::date = $1 AND userId = $2",
        [day, userId]
      );
      return result.rows[0] as any | FactType | undefined;
    } finally {
      db.release();
    }
  },

  getAll: async (userId: number): Promise<FactType[] | undefined> => {
    const db = await pool.connect();
    try {
      const rows = await db.query("SELECT * FROM facts WHERE userId = $1", [
        userId,
      ]);
      return rows as any | FactType[] | undefined;
    } finally {
      db.release();
    }
  },
};
