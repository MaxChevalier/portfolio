export type SkillCategory = "framework" | "language" | "softSkill" | "ciCd";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: string;
};

