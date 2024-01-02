import { FactType } from "@/types/factType";
import { pool } from "./db";

export const Fact = {
  create: async (user_id: number, content: string): Promise<void> => {
    const db = await pool.connect();
    try {
      await db.query("INSERT INTO facts VALUES($1, $2)", [user_id, content]);
    } finally {
      db.release();
    }
  },

  edit: async (id: number, user_id: number, content: string): Promise<void> => {
    const db = await pool.connect();
    try {
      await db.query(
        "UPDATE facts SET content = $1 WHERE id = $2 AND userid = $3",
        [content, id, user_id]
      );
    } finally {
      db.release();
    }
  },

  delete: async (id: number, user_id: number): Promise<void> => {
    const db = await pool.connect();
    try {
      await db.query("DELETE FROM facts WHERE id = $1 AND userid = $2", [
        id,
        user_id,
      ]);
    } finally {
      db.release();
    }
  },

  getAll: async (user_id: number): Promise<FactType[] | undefined> => {
    const db = await pool.connect();
    try {
      const rows = await db.query("SELECT * FROM facts WHERE `userid` = $1", [
        user_id,
      ]);
      return rows as any | FactType[] | undefined;
    } finally {
      db.release();
    }
  },
};
