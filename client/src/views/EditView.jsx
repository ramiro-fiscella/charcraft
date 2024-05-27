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
  const { id } = useParams();

  return (
    <div className=" mt-24 text-xl max-w-[1200px] mx-auto">
      <h1 className="text-3xl text-center mb-20">Edit Character</h1>
      <div className="flex flex-row flex-wrap justify-center items-start gap-4 *:w-80">
        <div className="flex flex-col  gap-4">
          <EditCharacterBase id={id} />
          <EditCombat id={id} />
        </div>

        <div className="flex flex-col  gap-4">
          <EditAttributes id={id} />
          <EditSkills id={id} />
        </div>

        <EditAttack id={id} />
        <EditPersonality id={id} />
      </div>
    </div>
  );
};

export default EditView;
