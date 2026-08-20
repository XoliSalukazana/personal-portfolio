import profile from "../data/profile";

function SkillGroup({ title, items }) {
  return (
    <article className="skill-panel">
      <div className="panel-heading">
        <span className="panel-number">{title === "Technical Skills" ? "A" : "B"}</span>
        <h3>{title}</h3>
      </div>
      <div className="skill-tags">
        {items.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">02 / Capabilities</p>
          <h2>Technical &amp; Soft Skills</h2>
          <p>
            Keep this section honest and editable. No artificial proficiency
            percentages are used.
          </p>
        </div>

        <div className="skills-grid">
          <SkillGroup title="Technical Skills" items={profile.skills.technical} />
          <SkillGroup title="Soft Skills" items={profile.skills.soft} />
        </div>
      </div>
    </section>
  );
}

export default Skills;