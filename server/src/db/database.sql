CREATE DATABASE charcraft_db;

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    char_name VARCHAR(50) NOT NULL,
    race VARCHAR(50) NOT NULL,
    char_class VARCHAR(50) NOT NULL,
    level INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (id)
);

CREATE TABLE attributes (
    id SERIAL PRIMARY KEY,
    character_id INT UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
    strength INT,
    dexterity INT,
    constitution INT,
    intelligence INT,
    wisdom INT,
    charisma INT
);
