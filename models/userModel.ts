import { pool } from '@/models/db';

export const User = {
	delete: async (id: number): Promise<void> => {
		const db = await pool.connect();
		try {
			await db.query('DELETE FROM users WHERE id = $1', [id]);
			await db.query('DELETE FROM accounts WHERE id = $1', [id]);
		} finally {
			db.release();
		}
	},
};
