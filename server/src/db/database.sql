CREATE DATABASE charcraft_db;

CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(uid) ON DELETE CASCADE,
    char_name VARCHAR(50) NOT NULL,
    race VARCHAR(50) NOT NULL,
    char_class VARCHAR(50) NOT NULL,
    level INT NOT NULL,
    avatar_url VARCHAR(255),
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
    acrobatics BOOLEAN,
    animal_handling BOOLEAN,
    arcana BOOLEAN,
    athletics BOOLEAN,
    deception BOOLEAN,
    history BOOLEAN,
    insight BOOLEAN,
    intimidation BOOLEAN,
    investigation BOOLEAN,
    medicine BOOLEAN,
    nature BOOLEAN,
    perception BOOLEAN,
    performance BOOLEAN,
    persuasion BOOLEAN,
    religion BOOLEAN,
    sleight_of_hand BOOLEAN,
    stealth BOOLEAN,
    survival BOOLEAN
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


CREATE TABLE combat_stats (
    id SERIAL PRIMARY KEY,
    character_id INT UNIQUE REFERENCES characters(id) ON DELETE CASCADE,
    max_hp INT,
    current_hp INT,
    temp_hp INT,
    armor_class INT,
    initiative INT,
    speed INT,
    hit_dice VARCHAR(20),
    total_hit_dice INT,
    death_save_success INT CHECK (death_save_success >= 0 AND death_save_success <= 3),
    death_save_failure INT CHECK (death_save_failure >= 0 AND death_save_failure <= 3)
);

CREATE TABLE attack_stats (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES characters(id) ON DELETE CASCADE,
    weapon_1 VARCHAR(128),
    atk_bonus_1 INT,
    damage_1 VARCHAR(50),
    damage_type_1 VARCHAR(50),
    atk_range_1 VARCHAR(50),
    weapon_2 VARCHAR(128),
    atk_bonus_2 INT,
    damage_2 VARCHAR(50),
    damage_type_2 VARCHAR(50),
    atk_range_2 VARCHAR(50),
    weapon_3 VARCHAR(128),
    atk_bonus_3 INT,
    damage_3 VARCHAR(50),
    damage_type_3 VARCHAR(50),
    atk_range_3 VARCHAR(50)
);

