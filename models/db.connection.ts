import { Pool } from 'pg';

/**
 * Represents the connection object
 */
export const pool = new Pool({
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	port: 5432,
	ssl: true,
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
});

export const closePool = async (): Promise<void> => {
	await pool.end();
};
