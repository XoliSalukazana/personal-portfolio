import profile from "../data/profile";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 {profile.name}</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;