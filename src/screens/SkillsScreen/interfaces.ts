export interface Skill {
  id: number;
  iconSrc: string;
  title: string;
  level: SkillLevel;
  link: string;
}

export enum SkillLevel {
  Beginner = 'Beginner',
  Competent = 'Competent',
  Advanced = 'Advanced',
}
