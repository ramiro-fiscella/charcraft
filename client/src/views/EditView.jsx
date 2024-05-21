import React from 'react';
import { useParams } from 'react-router-dom';
import {
  EditCharacterBase,
  EditCombat,
  EditAttack,
  EditSkills,
  EditAttributes,
  EditPersonality,
} from '../components/EditComponents';

const EditView = () => {
  const { id } = useParams(); // Obtener el ID del personaje de la URL

  return (
    <div>
      <h1>Edit Character</h1>
      <EditCharacterBase id={id} />
      <EditCombat id={id} />
      <EditAttack id={id} />
      <EditSkills id={id} />
      <EditAttributes id={id} />
      <EditPersonality id={id} />
    </div>
  );
};

export default EditView;
