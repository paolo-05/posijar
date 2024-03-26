-- See https://next-auth.js.org/adapters for infos about the users-accounts tables
CREATE TABLE facts(
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


WITH streak_dates AS (
    SELECT
        created_at::DATE AS post_date
    FROM
        facts
    WHERE
        userId = :userId -- Replace :userId with the actual user ID
    GROUP BY
        created_at::DATE
),
all_dates AS (
    SELECT
        generate_series(
            (SELECT MIN(post_date) FROM streak_dates),
            (SELECT MAX(post_date) FROM streak_dates),
            '1 day'::interval
        )::DATE AS date
),
streak_groups AS (
    SELECT
        ad.date,
        CASE
            WHEN sd.post_date IS NOT NULL THEN 1
            ELSE 0
        END AS posted,
        SUM(CASE WHEN sd.post_date IS NOT NULL THEN 1 ELSE 0 END) OVER (ORDER BY ad.date) AS streak
    FROM
        all_dates ad
    LEFT JOIN
        streak_dates sd ON ad.date = sd.post_date
)
SELECT
    MAX(streak) AS current_streak
FROM
    streak_groups
WHERE
    posted = 1;
