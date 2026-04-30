import experiences from "../assets/data/experience.json";
import type { Experience } from "../types/experience";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import "../components/ExperienceCard/ExperienceCard.scss";
import "./pages.scss";

const ExperiencePage = () => {
  const data = experiences as Experience[];

  return (
    <section className="page">
      <div className="page-header">
        <h1 className="page-title">Mon Expérience</h1>
        <p className="page-subtitle">
          Un aperçu de mes expériences professionnelles
        </p>
      </div>

      <div className="list">
        {data.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
