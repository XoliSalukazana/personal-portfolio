import profile from "../data/profile";

function About() {
  return (
    <section id="about" className="section">
      <div className="container split-layout">
        <div>
          <p className="section-kicker">01 / About</p>
          <h2>About Me</h2>
          <p className="lead">
            A personal introduction that you can shape around your real
            background, interests and ambitions.
          </p>
        </div>

        <div className="about-grid">
          <article className="info-card">
            <span>Background</span>
            <p>{profile.about.background}</p>
          </article>
          <article className="info-card">
            <span>Professional interests</span>
            <p>{profile.about.interests}</p>
          </article>
          <article className="info-card">
            <span>Current learning focus</span>
            <p>{profile.about.learningFocus}</p>
          </article>
          <article className="info-card">
            <span>What motivates me</span>
            <p>{profile.about.motivation}</p>
          </article>
          <article className="info-card info-card-wide">
            <span>Career aspirations</span>
            <p>{profile.about.careerGoals}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;