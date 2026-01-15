import { useState } from "react";
import type { Skill, SkillCategory } from "../../types/skill";
import skillData from "../../assets/data/skill.json";
import "./skill.scss";

const categories: { key: SkillCategory; label: string }[] = [
  { key: "framework", label: "Frameworks" },
  { key: "language", label: "Langages" },
  { key: "softSkill", label: "Soft Skills" },
  { key: "ciCd", label: "CI/CD" },
];

const skills = skillData as Skill[];

export default function Competences() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("framework");

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="competences-section">
      <nav className="competences-nav">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            className={key === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(key)}
            type="button"
          >
            {label}
          </button>
        ))}
      </nav>

      <ul className="skills-list">
        {filteredSkills.map((skill) => (
          <li key={skill.id} className="skill-item">
            {skill.icon && <img src={skill.icon} alt={skill.name} />}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
