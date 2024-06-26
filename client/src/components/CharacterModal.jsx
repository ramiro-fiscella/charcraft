import React from 'react';

const CharacterModal = ({ character, onClose }) => {
  return (
    <div className="fixed overflow-scroll top-2 inset-2 flex items-center justify-center p-2 rounded-xl bg-emerald-950 bg-opacity-80 bg-blend-screen backdrop-blur-md z-50">
      <div className="">
        <div id="character" className="data-container">
          <h1 className="text-3xl">{character.char_name}</h1>
          <img
            className="w-[200px] h-[200px] object-cover object-center rounded-md"
            src={character.avatar_url}
            alt={`${character.char_name} avatar`}
          />

          <div id="class" className="">
            <p>{character.race}</p>
            <p> {character.char_class}</p>
          </div>
          <p>Level: {character.level}</p>
        </div>

        <div id="attributes" className="data-container">
          <h2 className="text-2xl">Attributes</h2>
          <p>STR: {character.strength}</p>
          <p>DEX: {character.dexterity}</p>
          <p>CON: {character.constitution}</p>
          <p>INT: {character.intelligence}</p>
          <p>WIS: {character.wisdom}</p>
          <p>CHA: {character.charisma}</p>
        </div>

        <div id="skills" className="data-container">
          <h2 className="text-2xl">Skills</h2>
          <p>Acrobatics: {character.acrobatics}</p>
          <p>Animal Handling: {character.animal_handling}</p>
          <p>Arcana: {character.arcana}</p>
          <p>Athletics: {character.athletics}</p>
          <p>Deception: {character.deception}</p>
          <p>History: {character.history}</p>
          <p>Insight: {character.insight}</p>
          <p>Intimidation: {character.intimidation}</p>
          <p>Investigation: {character.investigation}</p>
          <p>Medicine: {character.medicine}</p>
          <p>Nature: {character.nature}</p>
          <p>Perception: {character.perception}</p>
          <p>Performance: {character.performance}</p>
          <p>Persuasion: {character.persuasion}</p>
          <p>Religion: {character.religion}</p>
          <p>Sleight of Hand: {character.sleight_of_hand}</p>
          <p>Stealth: {character.stealth}</p>
          <p>Survival: {character.survival}</p>
        </div>

        <div id="personality" className="data-container">
          <h2 className="text-2xl">Personality</h2>
          <p>Aligment: {character.aligment}</p>
          <p>Personality: {character.personality_traits}</p>
          <p>Ideals: {character.ideals}</p>
          <p>Bonds: {character.bonds}</p>
          <p>Flaws: {character.flaws}</p>
          <p>Quote: {character.quote}</p>
          <p>Features_adn_traits: {character.features_adn_traits}</p>
          <p>Languajes: {character.languajes}</p>
          <p>Other_proficiencies: {character.other_proficiencies}</p>
        </div>
      </div>

      <div id="combat_stats" className="data-container">
        <h2 className="text-2xl">Combat Stats</h2>
        <p>Max HP: {character.max_hp}</p>
        <p>Current HP: {character.current_hp}</p>
        <p>Temp HP: {character.temp_hp}</p>
        <p>Armor Class: {character.armor_class}</p>
        <p>Initiative: {character.initiative}</p>
        <p>Speed: {character.speed}</p>
        <p>Hit Dice: {character.hit_dice}</p>
        <p>Total Hit Dice: {character.total_hit_dice}</p>
        <p>Death Save Success: {character.death_save_success}</p>
        <p>Death Save Failure: {character.death_save_failure}</p>
      </div>

      <div id="attack_stats" className="data-container">
        <h2 className="text-2xl">Attack Stats</h2>
        <p>Weapon: {character.weapon}</p>
        <p>Attack Bonus: {character.atk_bonus}</p>
        <p>Damage: {character.damage}</p>
        <p>Damage Type: {character.damage_type}</p>
        <p>Attack Range: {character.atk_range}</p>
      </div>

      <button
        className="absolute top-2 right-2 w-9 h-9 rounded-3xl bg-red-500  flex items-center justify-center text-xl"
        onMouseDown={onClose}
      >
        ✖
      </button>
    </div>
  );
};

export default CharacterModal;
