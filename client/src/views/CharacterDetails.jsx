import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import {
  Proficiency,
  calculateModifier,
  calculateSkillProficiency,
} from '../services/';

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
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]); // Ejecutar efecto cada vez que cambie el ID del personaje

  if (!character) {
    return <div>Cargando...</div>;
  }

  const handleSkillChange = (event) => {
    // Manejador de cambio para actualizar el estado del personaje con las habilidades seleccionadas
    const { name, checked } = event.target;
    disabled;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: checked,
      disabled,
    }));
  };

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <div
      id="character_details"
      className="h-full w-full flex flex-row flex-wrap items-start justify-center  pt-20 pb-32 mb-[-8rem] text-neutral-200 bg-neutral-900"
    >
      <div>
        <div className="max-w-[2900px] mx-auto gap-4 items-start">
          <div className="flex flex-row justify-between items-start gap-4  border-b border-neutral-800 px-4 py-2  ">
            <div className="flex flex-row gap-2">
              <img
                className="w-20 h-20 object-cover object-center rounded-md"
                src={character.avatar_url}
                alt={`${character.char_name} avatar`}
              />

              <div id="class" className="flex flex-col">
                <h1 className="mb-1 text-xl capitalize tracking-normal leading-4">
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
          </div>

          <div className=" p-2">
            <div id="combat_stats">
              <ul className="mx-2 grid grid-cols-2 gap-4 text-center tracking-tight">
                <li>
                  <h5>Hit Points</h5>
                  <p>
                    {character.current_hp}/{character.max_hp}
                  </p>
                </li>

                <li>
                  <h5>Temporary Hit Points</h5>
                  <p>{character.temp_hp}</p>
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

          <div className=" p-2">
            <div id="combat_stats">
              <ul className="mx-2 grid grid-cols-3 gap-4 text-center tracking-tight">
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
                  <p>
                    {character.speed}
                    <span className="text-neutral-400 text-base">ft.</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3 my-2 mx-4 text-base font-light font-condensed tracking-wide shadow-lg shadow-neutral-950 rounded-xl border-t-2 border-neutral-800 ">
            <div
              id="attack_stats"
              className="w-full flex flex-row justify-between py-2  border-b border-neutral-800"
            >
              <p className="text-xs text-neutral-400 uppercase font-medium tracking-wide ">
                Name
              </p>
              <p className="text-xs text-neutral-400 uppercase font-medium tracking-wide">
                Atk Bonus
              </p>
              <div>
                <p className="text-xs text-neutral-400 uppercase font-medium tracking-wide">
                  Damage
                  <span className="text-xs text-neutral-400 uppercase font-medium tracking-wide ">
                    /Type
                  </span>
                </p>
              </div>
            </div>
            <div
              id="attack_stats"
              className="w-full flex flex-row justify-between py-2 border-b border-neutral-800"
            >
              <p className="font-normal">{character.weapon_1}</p>
              <p>+{character.atk_bonus_1}</p>
              <div>
                <p>
                  {character.damage_1}{' '}
                  <span className="text-neutral-400 text-base font-light">
                    /{character.damage_type_1}
                  </span>
                </p>
              </div>
            </div>
            <div
              id="attack_stats"
              className="w-full flex flex-row justify-between py-2 border-b border-neutral-800"
            >
              <p className="font-normal">{character.weapon_2}</p>
              <p>+{character.atk_bonus_2}</p>
              <div>
                <p>
                  {character.damage_2}{' '}
                  <span className="text-neutral-400 text-base font-light">
                    /{character.damage_type_2}
                  </span>
                </p>
              </div>
            </div>
            <div
              id="attack_stats"
              className="w-full flex flex-row justify-between py-2 border-b border-neutral-800"
            >
              <p className="font-normal">{character.weapon_3}</p>
              <p>+{character.atk_bonus_3}</p>
              <div>
                <p>
                  {character.damage_3}{' '}
                  <span className="text-neutral-400 text-base font-light">
                    /{character.damage_type_3}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div id="attributes" className=" p-2">
            <ul className="mx-2 grid grid-rows-2 grid-cols-3 gap-4 text-center tracking-tight">
              <li>
                <h5>Strenght</h5>
                <p>{calculateModifier(character.strength)}</p>
                <h6>{character.strength}</h6>
              </li>

              <li>
                <h5>Dexterity</h5>
                <p>{calculateModifier(character.dexterity)}</p>
                <h6>{character.dexterity}</h6>
              </li>

              <li>
                <h5>Constitution</h5>
                <p>{calculateModifier(character.constitution)}</p>
                <h6>{character.constitution}</h6>
              </li>

              <li>
                <h5>Intelligence</h5>
                <p>{calculateModifier(character.intelligence)}</p>
                <h6>{character.intelligence}</h6>
              </li>

              <li>
                <h5>Wisdom</h5>
                <p>{calculateModifier(character.wisdom)}</p>
                <h6>{character.wisdom}</h6>
              </li>

              <li>
                <h5>Charisma</h5>
                <p>{calculateModifier(character.charisma)}</p>
                <h6>{character.charisma}</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div id="skills" className="w-80  p-2">
            <ul className="mx-2 mt-0  p-3 shadow-lg shadow-neutral-950 rounded-xl border-t-2 border-neutral-800">
              <li>
                <input
                  type="radio"
                  name="acrobatics"
                  id="acrobatics"
                  checked={character.acrobatics}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Dex</span>
                <p>Acrobatics</p>
                <span>
                  {character.acrobatics
                    ? calculateSkillProficiency(
                        character.dexterity,
                        character.level
                      )
                    : calculateModifier(character.dexterity)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="animal_handling"
                  id="animal_handling"
                  checked={character.animal_handling}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Wis</span>
                <p>Animal Handling</p>
                <span>
                  {character.animal_handling
                    ? calculateSkillProficiency(
                        character.wisdom,
                        character.level
                      )
                    : calculateModifier(character.wisdom)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="arcana"
                  id="arcana"
                  checked={character.arcana}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Int</span>
                <p>Arcana</p>
                <span>
                  {character.arcana
                    ? calculateSkillProficiency(
                        character.intelligence,
                        character.level
                      )
                    : calculateModifier(character.intelligence)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="athletics"
                  id="athletics"
                  checked={character.athletics}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Str</span>
                <p>Athletics</p>
                <span>
                  {character.athletics
                    ? calculateSkillProficiency(
                        character.strength,
                        character.level
                      )
                    : calculateModifier(character.strength)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="deception"
                  id="deception"
                  checked={character.deception}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Cha</span>
                <p>Deception</p>
                <span>
                  {character.deception
                    ? calculateSkillProficiency(
                        character.charisma,
                        character.level
                      )
                    : calculateModifier(character.charisma)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="history"
                  id="history"
                  checked={character.history}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Int</span>
                <p>History</p>
                <span>
                  {character.history
                    ? calculateSkillProficiency(
                        character.intelligence,
                        character.level
                      )
                    : calculateModifier(character.intelligence)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="insight"
                  id="insight"
                  checked={character.insight}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Wis</span>
                <p>Insight</p>
                <span>
                  {character.insight
                    ? calculateSkillProficiency(
                        character.wisdom,
                        character.level
                      )
                    : calculateModifier(character.wisdom)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="intimidation"
                  id="intimidation"
                  checked={character.intimidation}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Cha</span>
                <p>Intimidation</p>
                <span>
                  {character.intimidation
                    ? calculateSkillProficiency(
                        character.charisma,
                        character.level
                      )
                    : calculateModifier(character.charisma)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="investigation"
                  id="investigation"
                  checked={character.investigation}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Int</span>
                <p>Investigation</p>
                <span>
                  {character.investigation
                    ? calculateSkillProficiency(
                        character.intelligence,
                        character.level
                      )
                    : calculateModifier(character.intelligence)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="medicine"
                  id="medicine"
                  checked={character.medicine}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Wis</span>
                <p>Medicine</p>
                <span>
                  {character.medicine
                    ? calculateSkillProficiency(
                        character.wisdom,
                        character.level
                      )
                    : calculateModifier(character.wisdom)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="nature"
                  id="nature"
                  checked={character.nature}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Int</span>
                <p>Nature</p>
                <span>
                  {character.nature
                    ? calculateSkillProficiency(
                        character.intelligence,
                        character.level
                      )
                    : calculateModifier(character.intelligence)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="perception"
                  id="perception"
                  checked={character.perception}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Wis</span>
                <p>Perception</p>
                <span>
                  {character.perception
                    ? calculateSkillProficiency(
                        character.wisdom,
                        character.level
                      )
                    : calculateModifier(character.wisdom)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="performance"
                  id="performance"
                  checked={character.performance}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Cha</span>
                <p>Performance</p>
                <span>
                  {character.performance
                    ? calculateSkillProficiency(
                        character.charisma,
                        character.level
                      )
                    : calculateModifier(character.charisma)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="persuasion"
                  id="persuasion"
                  checked={character.persuasion}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Cha</span>
                <p>Persuasion</p>
                <span>
                  {character.persuasion
                    ? calculateSkillProficiency(
                        character.charisma,
                        character.level
                      )
                    : calculateModifier(character.charisma)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="religion"
                  id="religion"
                  checked={character.religion}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Int</span>
                <p>Religion</p>
                <span>
                  {character.religion
                    ? calculateSkillProficiency(
                        character.intelligence,
                        character.level
                      )
                    : calculateModifier(character.intelligence)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="sleight_of_hand"
                  id="sleight_of_hand"
                  checked={character.sleight_of_hand}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Dex</span>
                <p>Sleight of Hand</p>
                <span>
                  {character.sleight_of_hand
                    ? calculateSkillProficiency(
                        character.dexterity,
                        character.level
                      )
                    : calculateModifier(character.dexterity)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="stealth"
                  id="stealth"
                  checked={character.stealth}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Dex</span>
                <p>Stealth</p>
                <span>
                  {character.stealth
                    ? calculateSkillProficiency(
                        character.dexterity,
                        character.level
                      )
                    : calculateModifier(character.dexterity)}
                </span>
              </li>
              <li>
                <input
                  type="radio"
                  name="survival"
                  id="survival"
                  checked={character.survival}
                  disabled
                  onChange={handleSkillChange}
                />
                <span className="stat_mod">Wis</span>
                <p>Survival</p>
                <span>
                  {character.survival
                    ? calculateSkillProficiency(
                        character.wisdom,
                        character.level
                      )
                    : calculateModifier(character.wisdom)}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="p-2">
            <div
              id="personality"
              className="mx-2 mt-0 p-3 shadow-lg shadow-neutral-950 rounded-xl border-t-2 border-neutral-800"
            >
              <h3 className="text-lg mb-2">Description</h3>
              <ul>
                <li>
                  <h5>Aligment</h5>
                  <p>{character.aligment}</p>
                </li>

                <li>
                  <h5>Personality</h5>
                  <p>{character.personality_traits}</p>
                </li>

                <li>
                  <h5>Ideals</h5>
                  <p>{character.ideals}</p>
                </li>

                <li>
                  <h5>Bonds</h5>
                  <p>{character.bonds}</p>
                </li>
                <li>
                  <h5>Flaws</h5>
                  <p>{character.flaws}</p>
                </li>
                <li>
                  <h5>Quote</h5>
                  <p>{character.quote}</p>
                </li>
                <li>
                  <h5>Features and Traits</h5>
                  <p>{character.features_adn_traits}</p>
                </li>
                <li>
                  <h5>Languajes </h5>
                  <p>{character.languajes}</p>
                </li>
                <li>
                  <h5>Other Proficiencies</h5>
                  <p>{character.other_proficiencies}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link to={`/character/${character.character_id}/edit`}>
          {' '}
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetails;
