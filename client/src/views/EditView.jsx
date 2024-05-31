import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  EditCharacterBase,
  EditCombat,
  EditAttack,
  EditSkills,
  EditAttributes,
  EditPersonality,
} from '../components/EditComponents';
import { FaArrowLeft } from 'react-icons/fa';

const EditView = () => {
  const { id } = useParams();
  const characterRef = useRef();
  const combatRef = useRef();
  const attributesRef = useRef();
  const attackRef = useRef();
  const skillsRef = useRef();
  const personalityRef = useRef();

  const handleSave = () => {
    if (characterRef.current) {
      characterRef.current.handleSave();
    }
    if (combatRef.current) {
      combatRef.current.handleSave();
    }
    if (attributesRef.current) {
      attributesRef.current.handleSave();
    }
    if (attackRef.current) {
      attackRef.current.handleSave();
    }
    if (skillsRef.current) {
      skillsRef.current.handleSave();
    }
    if (personalityRef.current) {
      personalityRef.current.handleSave();
    }
  };

  return (
    <div className="mt-24 text-xl max-w-[1200px] mx-auto">
      <div className="mb-20">
        <h1 className="text-3xl text-center">Editar Personaje</h1>
        <p className="text-center font-light">
          Aqui podrás editar tu hoja de personaje.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-start gap-4 *:w-80">
        <div className="flex flex-col gap-4">
          <EditCharacterBase ref={characterRef} id={id} />
          <EditCombat ref={combatRef} id={id} />
        </div>
        <div className="flex flex-col gap-4">
          <EditAttributes ref={attributesRef} id={id} />
          <EditSkills ref={skillsRef} id={id} />
        </div>
        <EditAttack ref={attackRef} id={id} />
        <EditPersonality ref={personalityRef} id={id} />
      </div>
      <div className="text-center">
        <button className="w-full h-10 p-2 mt-4" onClick={handleSave}>
          Guardar Cambios
        </button>
      </div>
      <button
        onClick={() => window.history.back()}
        className="fixed bottom-4 right-4 rounded-full p-4"
      >
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default EditView;
