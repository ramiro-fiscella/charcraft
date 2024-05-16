const Proficiency = (level) => {
  const getProficiencyBonus = (level) => {
    switch (level) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 2;
      case 5:
      case 6:
      case 7:
      case 8:
        return 3;
      case 9:
      case 10:
      case 11:
      case 12:
        return 4;
      case 13:
      case 14:
      case 15:
      case 16:
        return 5;
      case 17:
      case 18:
      case 19:
      case 20:
        return 6;
      default:
        return 2; // En caso de que el nivel sea inválido
    }
  };

  const proficiencyBonus = getProficiencyBonus(level);

  return proficiencyBonus;
};

export default Proficiency;
