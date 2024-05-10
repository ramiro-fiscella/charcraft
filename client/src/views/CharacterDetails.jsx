import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div
      id="character_details"
      className="h-full w-full flex m-auto pt-20 pb-32 mb-[-8rem] text-neutral-200 bg-neutral-900"
    >
      <div className="max-w-[1200px] gap-4 items-start">
        <div className="flex flex-row justify-between items-start gap-4 bg-neutral-900 border-b border-neutral-800 p-2 ">
          <div className="flex flex-row gap-2">
            <img
              className="w-20 h-20 object-cover object-center rounded-md"
              src={character.avatar_url}
              alt={`${character.char_name} avatar`}
            />

            <div id="class" className="flex flex-col">
              <h1 className="text-xl capitalize tracking-normal leading-4">
                {character.char_name}
              </h1>

              <p className="font-condensed text-xs font-light tracking-wide text-neutral-400">
                {character.race} - {character.char_class}
              </p>
              <p className="font-condensed text-xs font-light tracking-wide ">
                LVL {character.level}
              </p>
            </div>
          </div>

          <div
            id="health"
            className="flex flex-col justify-center items-center font-condensed"
          >
            <p className="text-xs uppercase">Hit Points</p>
            <p className="text-xl">
              {character.current_hp}/{character.max_hp}
            </p>
          </div>
        </div>

        <div className=" p-2">
          <div id="combat_stats">
            <ul className="m-2 grid grid-cols-3 gap-4 text-center tracking-tight">
              <li>
                <h5>Armor Class</h5>
                <p>{character.armor_class}</p>
              </li>
              <li>
                <h5>Initiative</h5>
                <p>{character.initiative}</p>
              </li>
              <li>
                <h5>Speed</h5>
                <p>{character.speed}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className=" p-2">
          <div className="mx-2 grid grid-cols-2 gap-2 text-left text-xs *:font-normal *:font-condensed *:tracking-wider *:border *:border-neutral-800 *:shadow-lg *:shadow-neutral-950 *:py-1 *:px-2 *:rounded">
            <p>Hit Dice: {character.hit_dice}</p>
            <p>Total Hit Dice: {character.total_hit_dice}</p>
          </div>
        </div>

        <div id="attributes" className=" p-2">
          <ul className="m-2 grid grid-rows-2 grid-cols-3 gap-4 text-center tracking-tight">
            <li>
              <h5>Strenght</h5>
              <p>+2</p>
              <h6>{character.strength}</h6>
            </li>

            <li>
              <h5>Dexterity</h5>
              <p>+2</p>
              <h6>{character.dexterity}</h6>
            </li>

            <li>
              <h5>Constitution</h5>
              <p>+2</p>
              <h6>{character.constitution}</h6>
            </li>

            <li>
              <h5>Intelligence</h5>
              <p>+2</p>
              <h6>{character.intelligence}</h6>
            </li>

            <li>
              <h5>Wisdom</h5>
              <p>+2</p>
              <h6>{character.wisdom}</h6>
            </li>

            <li>
              <h5>Charisma</h5>
              <p>+2</p>
              <h6>{character.charisma}</h6>
            </li>
          </ul>
        </div>

        <div id="skills" className="p-2">
          <ul className="m-2 mt-0 p-3 shadow-xl shadow-neutral-950 rounded-xl border-t-2 border-neutral-800">
            <li>
              <p>Acrobatics</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Animal Handling</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Arcana</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Athletics</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Deception</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>History</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Insight</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Intimidation</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Investigation</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Medicine</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Nature</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Perception</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Performance</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Persuasion</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Religion</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Sleight of Hand</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Stealth</p>
              <span>{character.strength}</span>
            </li>
            <li>
              <p>Survival</p>
              <span>{character.strength}</span>
            </li>
          </ul>
        </div>

        <div className="p-2">
          <div
            id="attack_stats"
            className="m-2 mt-0 p-3 shadow-xl shadow-neutral-950 rounded-xl border-t-2 border-neutral-800"
          >
            <h2 className="text-2xl">Attack Stats</h2>
            <p>Weapon: {character.weapon}</p>
            <p>Attack Bonus: {character.atk_bonus}</p>
            <p>Damage: {character.damage}</p>
            <p>Damage Type: {character.damage_type}</p>
            <p>Attack Range: {character.atk_range}</p>
          </div>
        </div>

        <div className="p-2">
          <div
            id="personality"
            className="m-2 mt-0 p-3 shadow-xl shadow-neutral-950 rounded-xl border-t-2 border-neutral-800"
          >
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
    </div>
  );
};

export default CharacterDetails;
