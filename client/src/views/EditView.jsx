import React from 'react';
import { useParams } from 'react-router-dom';
import { EditCharacterBase, EditAttack } from '../components/EditComponents';

const EditView = () => {
  const { id } = useParams(); // Obtener el ID del personaje de la URL

  return (
    <div>
      <h1>Edit Character</h1>
      <EditCharacterBase id={id} /> {/* Pasar el ID como prop */}
      <EditAttack id={id} /> {/* Pasar el ID como prop */}
    </div>
  );
};

export default EditView;
