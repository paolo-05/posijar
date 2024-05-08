-- See https://next-auth.js.org/adapters for infos about the users-accounts tables
CREATE TABLE facts(
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

