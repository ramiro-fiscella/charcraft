import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { calculateModifier, calculateSkillProficiency } from '../services/';
import { FaArrowLeft } from 'react-icons/fa';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [owner, setOwner] = useState(null); // Estado para almacenar los datos del propietario
  const navigate = useNavigate();
  const { user } = useAuth0();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`/characters/${id}`);
        // console.log(response.data);
        setCharacter(response.data);

        // Obtiene el usuario que creó el personaje
        const userResponse = await axios.get(`/users/${response.data.user_id}`);
        setOwner(userResponse.data);
        console.log(userResponse.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleDeleteCharacter = async () => {
    const confirmDelete = window.confirm(
      '¿Estás seguro de que quieres borrar este personaje?'
    );

    if (confirmDelete) {
      try {
        await axios.delete(`/characters/${id}`);
        navigate('/characters');
      } catch (error) {
        console.error('Error deleting character:', error);
      }
    }
  };

  const handleSkillChange = (event) => {
    const { name, checked } = event.target;
    disabled;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: checked,
      disabled,
    }));
  };

  if (!character || !owner) {
    return <div>Cargando...</div>;
  }

  // Verifica si el usuario actual es el propietario del personaje
  const isOwner = user && owner.auth0_id === user.sub;

  console.log('user:', user, 'Characters user:', character.user_id);

  return (
    <div
      id="character_details"
      className="min-h-full w-full flex flex-row flex-wrap items-start justify-center  pt-28 pb-32 mb-[-8rem] text-neutral-200 bg-neutral-900/40"
    >
      <div className="min-w-[320px]">
        <div className="max-w-[2900px] mx-auto gap-4 items-start">
          <div className="relative flex flex-row justify-between items-start gap-4  border-b border-neutral-800 px-4 py-2  ">
            <div className=" flex flex-row gap-2">
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
                  NIVEL {character.level}
                </p>
                <p className="font-condensed text-xs font-light tracking-wide text-neutral-400">
                  de {character.username}
                </p>
              </div>
              {isOwner && (
                <div>
                  <Link
                    className="absolute right-4 bottom-2"
                    to={`/character/${id}/edit`}
                  >
                    <button className="w-16 p-2 text-xs">Editar</button>
                  </Link>
                  <button
                    onMouseDown={handleDeleteCharacter}
                    className="w-16 absolute right-4 top-2 p-2 text-xs bg-red-800 hover:bg-red-700"
                  >
                    Borrar
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className=" p-2">
            <div id="combat_stats">
              <ul className="mx-2 grid grid-cols-2 gap-4 text-center tracking-tight">
                <li>
                  <h5>HP Total</h5>
                  <p>
                    {character.current_hp}/{character.max_hp}
                  </p>
                </li>

                <li>
                  <h5>HP Temporal</h5>
                  <p>{character.temp_hp}</p>
                </li>
              </ul>
            </div>
          </div>

          <div className=" p-2">
            <div className="mx-2 grid grid-cols-2 gap-2 text-left text-xs *:font-normal *:font-condensed *:tracking-wider *:border *:border-neutral-800 *:shadow-lg *:shadow-neutral-950 *:py-1 *:px-2 *:rounded">
              <p>Hit Dice: {character.hit_dice}</p>
              <p>Hit Dice Totales: {character.total_hit_dice}</p>
            </div>
          </div>

          <div className=" p-2">
            <div id="combat_stats">
              <ul className="mx-2 grid grid-cols-3 gap-4 text-center tracking-tight">
                <li>
                  <h5>Armadura</h5>
                  <p>{character.armor_class}</p>
                </li>
                <li>
                  <h5>Iniciativa</h5>
                  <p>{character.initiative}</p>
                </li>
                <li>
                  <h5>Velocidad</h5>
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
                Nombre
              </p>
              <p className="text-xs text-neutral-400 uppercase font-medium tracking-wide">
                Bono de Ataque
              </p>
              <div>
                <p className="text-xs text-neutral-400 uppercase font-medium tracking-wide">
                  Daño
                  <span className="text-xs text-neutral-400 uppercase font-medium tracking-wide ">
                    /Tipo
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
                <h5>Fuerza</h5>
                <p>{calculateModifier(character.strength)}</p>
                <h6>{character.strength}</h6>
              </li>

              <li>
                <h5>Destreza</h5>
                <p>{calculateModifier(character.dexterity)}</p>
                <h6>{character.dexterity}</h6>
              </li>

              <li>
                <h5>Constitución</h5>
                <p>{calculateModifier(character.constitution)}</p>
                <h6>{character.constitution}</h6>
              </li>

              <li>
                <h5>Inteligencia</h5>
                <p>{calculateModifier(character.intelligence)}</p>
                <h6>{character.intelligence}</h6>
              </li>

              <li>
                <h5>Sabiduría</h5>
                <p>{calculateModifier(character.wisdom)}</p>
                <h6>{character.wisdom}</h6>
              </li>

              <li>
                <h5>Carisma</h5>
                <p>{calculateModifier(character.charisma)}</p>
                <h6>{character.charisma}</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="min-w-[320px]">
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
          <div className="p-2 min-w-[320px]">
            <div
              id="personality"
              className="mx-2 mt-0 p-3 shadow-lg shadow-neutral-950 rounded-xl border-t-2 border-neutral-800"
            >
              <h3 className="text-lg mb-2">Description</h3>
              <ul>
                <li>
                  <h5>Alineamiento</h5>
                  <p>{character.alignment}</p>
                </li>

                <li>
                  <h5>Personalidad</h5>
                  <p>{character.personality_traits}</p>
                </li>

                <li>
                  <h5>Ideales</h5>
                  <p>{character.ideals}</p>
                </li>

                <li>
                  <h5>Vínculo</h5>
                  <p>{character.bonds}</p>
                </li>
                <li>
                  <h5>Defectos</h5>
                  <p>{character.flaws}</p>
                </li>
                <li>
                  <h5>Frase</h5>
                  <p>{character.quote}</p>
                </li>
                <li>
                  <h5>Características y Rasgos</h5>
                  {character.features_and_traits &&
                    character.features_and_traits.map((feature) => (
                      <p key={feature}>• {feature}</p>
                    ))}
                </li>
                <li>
                  <h5>Lenguajes </h5>
                  {character.languages &&
                    character.languages.map((language) => (
                      <p key={language}>• {language}</p>
                    ))}
                </li>
                <li>
                  <h5>Otras competencias</h5>
                  {character.other_proficiencies &&
                    character.other_proficiencies.map((proficiency) => (
                      <p key={proficiency}>• {proficiency}</p>
                    ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button
        onMouseDown={() => window.history.back()}
        className="fixed bottom-4 right-4 rounded-full p-4"
      >
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default CharacterDetails;
