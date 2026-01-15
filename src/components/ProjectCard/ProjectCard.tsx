import type { Project } from "../../types/project";
import "./ProjectCard.scss";

type Props = {
  project: Project;
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="card">
      <section className="curved">
        <header>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="f-r-sp">
            <span className="date">{formatDate(project.date)}</span>
            <span className={`status ${project.status.replace(" ", "-")}`}>
              {project.status}
            </span>
          </div>
        </header>
      </section>
      <section>
        <h3>Technologies utilisées :</h3>
        <ul className="skills-list">
          {project.technologies.map((tech, index) => (
            <li className="skill-item" key={index}>
              {tech}
            </li>
          ))}
        </ul>
        <div className="links">
          {project.link && (
            <div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
          )}
          {project.github && (
            <div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le code source
              </a>
            </div>
          )}
        </div>
        <hr />
        <p className="role">{project.role}</p>
      </section>
    </article>
  );
};

export default ProjectCard;
