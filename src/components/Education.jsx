import profile from "../data/profile";

function Education() {
  return (
    <section id="education" className="section section-tinted">
      <div className="container split-layout">
        <div>
          <p className="section-kicker">04 / Education</p>
          <h2>Education</h2>
          <p className="lead">
            Add your real qualifications, courses and areas of study here.
          </p>
        </div>

        <div className="timeline">
          {profile.education.map((item, index) => (
            <article className="timeline-item" key={`${item.qualification}-${index}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-date">{item.dates}</p>
              <h3>{item.qualification}</h3>
              <p className="timeline-org">{item.institution}</p>
              <p>{item.areas}</p>
              <p>{item.description}</p>
            </article>
          ))}

          <article className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <p className="timeline-date">{profile.currentLearning.date}</p>
            <h3>{profile.currentLearning.programme}</h3>
            <p className="timeline-org">{profile.currentLearning.provider}</p>
            <p>{profile.currentLearning.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;