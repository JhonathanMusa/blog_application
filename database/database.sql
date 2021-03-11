CREATE DATABASE blog_mern;

CREATE TABLE users 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT,
    text VARCHAR(200),
    create_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, text) 
VALUES ('jhonathan', 'jhonathan@example.com', 'practice text');