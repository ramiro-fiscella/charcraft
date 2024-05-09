import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { getCharacterById } from "../services";

const CharacterDetails = () => {
  const { id } = useParams(); // Obtiene el ID del parámetro de la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/characters/${id}`
        ); // Hacer solicitud HTTP al servidor para obtener los detalles del personaje
        console.log(response.data);
        setCharacter(response.data); // Establecer el estado del personaje con los datos recibidos
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [id]); // Ejecutar efecto cada vez que cambie el ID del personaje

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="h-full w-full flex m-auto mt-14 p-5">
      <div className="max-w-[1200px] flex flex-wrap gap-4">
        <div className="w-[1200px] flex flex-row items-start gap-4">
          <img
            className="w-[200px] h-[200px] object-cover object-center rounded-md"
            src={character.avatar_url}
            alt={`${character.char_name} avatar`}
          />

          <div id="class" className="flex flex-col">
            <h1 className="text-3xl mb-2">{character.char_name}</h1>
            <p>
              {character.race} - {character.char_class}
            </p>
            <p>Level {character.level}</p>
          </div>
        </div>

        <div className="w-1/3 flex flex-col gap-4">
          <div className="w-full flex flex-row gap-2 ">
            <div id="attributes" className="w-1/3">
              <ul>
                <li>
                  <h5>Strenght</h5>
                  <p>{character.strength}</p>
                  <h6>+2</h6>
                </li>

                <li>
                  <h5>Dexterity</h5>
                  <p> {character.dexterity}</p>
                  <h6>+2</h6>
                </li>

                <li>
                  <h5>Constitution</h5>
                  <p>{character.constitution}</p>
                  <h6>+2</h6>
                </li>

                <li>
                  <h5>Intelligence</h5>
                  <p>{character.intelligence}</p>
                  <h6>+2</h6>
                </li>

                <li>
                  <h5>Wisdom</h5>
                  <p>{character.wisdom}</p>
                  <h6>+2</h6>
                </li>

                <li>
                  <h5>Charisma</h5>
                  <p>{character.charisma}</p>
                  <h6>+2</h6>
                </li>
              </ul>
            </div>

            <div id="skills" className="w-2/3 border-2 p-4 rounded-lg">
              <ul className="flex flex-col items-start gap-2">
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Acrobatics {character.acrobatics}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Animal Handling {character.animal_handling}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Arcana {character.arcana}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Athletics {character.athletics}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Deception {character.deception}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>History {character.history}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Insight {character.insight}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Intimidation {character.intimidation}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Investigation {character.investigation}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Medicine {character.medicine}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Nature {character.nature}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Perception {character.perception}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Performance {character.performance}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Persuasion {character.persuasion}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Religion {character.religion}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Sleight of Hand {character.sleight_of_hand}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Stealth {character.stealth}</p>
                </li>
                <li>
                  <input type="radio" />
                  <span>+2</span>
                  <p>Survival {character.survival}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w- 1/3 flex flex-col gap-4">
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
        </div>

        <div id="personality" className="h-1/3 border ">
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
    </div>
  );
};

export default CharacterDetails;
