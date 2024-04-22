CREATE DATABASE charcraft_db;

CREATE TABLE characters (
    character_id SERIAL PRIMARY KEY,
    character_name VARCHAR(50) NOT NULL,
    character_race VARCHAR(50) NOT NULL,
    character_class VARCHAR(50) NOT NULL,
    character_level INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

