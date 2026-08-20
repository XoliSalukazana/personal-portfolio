import { useState } from "react";
import profile from "../data/profile";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["experience", "Experience"],
  ["contact", "Contact"]
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span>{profile.name}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="main-menu" className={`nav-menu ${isOpen ? "is-open" : ""}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cv" href={profile.cv} download>
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;