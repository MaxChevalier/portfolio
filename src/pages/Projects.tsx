import projects from "../assets/data/project.json";
import type { Project } from "../types/project";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../components/ProjectCard/ProjectCard.scss";

const ProjectPage = () => {
  const data = projects as Project[];

  return (
    <section className="page">
      <h1>Projets</h1>

      <div className="list">
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
