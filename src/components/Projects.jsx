import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">03 / Selected work</p>
            <h2>Projects</h2>
          </div>
          <p>Exactly three editable project entries are displayed.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;