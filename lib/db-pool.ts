import { Pool } from 'pg';

/**
 * Represents the connection object
 */
export const pool = new Pool({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
	ssl: true,
});

export const closePool = async (): Promise<void> => {
	await pool.end();
};
