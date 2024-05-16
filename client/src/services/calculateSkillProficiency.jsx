import { Proficiency } from '../components';
import calculateModifier from './calculateModifier';

const calculateSkillProficiency = (score, level) => {
  const modifier = calculateModifier(score);
  const proficiencyBonus = Proficiency(level);

  const skillProficiency = modifier + proficiencyBonus;
  return skillProficiency;
};

export default calculateSkillProficiency;
