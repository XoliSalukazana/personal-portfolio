function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={`${project.title} project placeholder`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="project-number">{project.number}</span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-details">
          <div>
            <strong>Objective</strong>
            <p>{project.objective}</p>
          </div>
          <div>
            <strong>My contribution</strong>
            <p>{project.contribution}</p>
          </div>
        </div>

        <div className="project-meta">
          <div>
            <strong>Technologies / Tools</strong>
            <div className="mini-tags">
              {project.technologies.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div>
            <strong>Skills demonstrated</strong>
            <div className="mini-tags">
              {project.skills.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;