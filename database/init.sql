CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL
);


INSERT INTO books(title, author, category, year)
VALUES
('El Principito','Antoine de Saint-Exupéry','Novela',1943)
ON CONFLICT DO NOTHING;
