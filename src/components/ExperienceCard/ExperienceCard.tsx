import type { Experience } from "../../types/experience";
import "./ExperienceCard.scss";

type Props = {
  experience: Experience;
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="card">
      <section className="curved">
        <header>
          <h2>{experience.company}</h2>
          <p className="role">
            {experience.role} — {experience.type}
          </p>
          <span className="date">
            {formatDate(experience.startDate)} →{" "}
            {experience.endDate === "maintenant" ? "maintenant" : formatDate(experience.endDate)}
          </span>
        </header>
      </section>
      <section>
        {experience.missions.map((mission, idx) => (
          <div key={idx} className="mission">
            <h3>{mission.name}</h3>
            <p className="missionDate">
              {formatDate(mission.startDate)} → {mission.endDate === "maintenant" ? "maintenant" : formatDate(mission.endDate)}
            </p>
            <p>{mission.description}</p>

            <ul>
              {mission.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
};

export default ExperienceCard;
