import profile from "../data/profile";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.hero.eyebrow}</p>
          <h1>
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="hero-text">{profile.hero.introduction}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Projects
            </a>
            <a className="button button-secondary" href={profile.cv} download>
              Download My CV
            </a>
          </div>

          <p className="hero-location">{profile.location}</p>
        </div>

        <div className="hero-visual" aria-label="Professional profile image placeholder">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-photo-frame">
            <img
              src="/images/profile.jpg"
              alt={`${profile.name} profile placeholder`}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span className="photo-fallback">{profile.initials}</span>
          </div>
          <span className="hero-note">Learning • Building • Growing</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;