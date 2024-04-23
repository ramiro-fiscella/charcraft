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

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    character_id INT UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
    acrobatics INT,
    animal_handling INT,
    arcana INT,
    athletics INT,
    deception INT,
    history INT,
    insight INT,
    intimidation INT,
    investigation INT,
    medicine INT,
    nature INT,
    perception INT,
    performance INT,
    persuasion INT,
    religion INT,
    sleight_of_hand INT,
    stealth INT,
    survival INT
);

CREATE TABLE personality (
    id SERIAL PRIMARY KEY,
    character_id INT UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
    alignment VARCHAR(50),
    personality_traits VARCHAR(255),
    ideals VARCHAR(255),
    bonds VARCHAR(255),
    flaws VARCHAR(255),
    quote VARCHAR(140),
    features_and_traits TEXT[],
    languages TEXT[],
    other_proficiencies TEXT[]
);
