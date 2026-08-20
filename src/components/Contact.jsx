import profile from "../data/profile";

function safeExternalUrl(value) {
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : "#";
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">06 / Contact</p>
          <h2>Let’s connect.</h2>
          <p className="lead">{profile.contact.invitation}</p>
        </div>

        <div className="contact-list">
          <a className="contact-item" href={`mailto:${profile.email}`}>
            <span className="contact-icon" aria-hidden="true">@</span>
            <span>
              <small>Email</small>
              <strong>{profile.email}</strong>
            </span>
          </a>

          <a
            className="contact-item"
            href={safeExternalUrl(profile.github)}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">GH</span>
            <span>
              <small>GitHub</small>
              <strong>{profile.github}</strong>
            </span>
          </a>

          <a
            className="contact-item"
            href={safeExternalUrl(profile.linkedin)}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">in</span>
            <span>
              <small>LinkedIn</small>
              <strong>{profile.linkedin}</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;