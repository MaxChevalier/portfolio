import experiences from "../assets/data/experience.json";
import type { Experience } from "../types/experience";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import "../components/ExperienceCard/ExperienceCard.scss";

const ExperiencePage = () => {
  const data = experiences as Experience[];

  return (
    <section className="page">
      <h1>Expérience</h1>

      <div className="list">
        {data.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
