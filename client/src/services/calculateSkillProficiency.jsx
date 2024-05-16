import { Proficiency, calculateModifier } from './';

const calculateSkillProficiency = (score, level) => {
  const modifier = calculateModifier(score);
  const proficiencyBonus = Proficiency(level);

  const skillProficiency = modifier + proficiencyBonus;
  return skillProficiency;
};

export default calculateSkillProficiency;
