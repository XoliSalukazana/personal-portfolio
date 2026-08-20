import profile from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">05 / Development</p>
          <h2>Experience &amp; Professional Development</h2>
          <p className="lead experience-statement">
            {profile.professionalDevelopment.statement}
          </p>
        </div>

        <div className="development-grid">
          {profile.professionalDevelopment.entries.map((entry, index) => (
            <article className="development-card" key={`${entry.title}-${index}`}>
              <span className="card-index">0{index + 1}</span>
              <p className="timeline-date">{entry.date}</p>
              <h3>{entry.title}</h3>
              <p className="timeline-org">{entry.organisation}</p>
              <p>{entry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;