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

CREATE TABLE attributes (
    character_id INT PRIMARY KEY,
    strength INT,
    dexterity INT,
    constitution INT,
    intelligence INT,
    wisdom INT,
    charisma INT,
    FOREIGN KEY (character_id) REFERENCES characters(character_id)
);
