import projects from "../assets/data/project.json";
import type { Project } from "../types/project";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../components/ProjectCard/ProjectCard.scss";
import "./pages.scss";

const ProjectPage = () => {
  const data = projects as Project[];

  return (
    <section className="page">
      <div className="page-header">
        <h1 className="page-title">Mes Projets</h1>
        <p className="page-subtitle">
          Découvrez les projets sur lesquels j'ai travaillé, du développement web aux jeux vidéo
        </p>
      </div>

      <div className="list grid">
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
