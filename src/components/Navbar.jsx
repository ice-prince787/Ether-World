import { scrollToSection } from "../hooks/useLenis";

export default function Navbar() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  return (
    <header className="nav">
      <a
        className="brand"
        href="#home"
        aria-label="HexHeads Home"
        onClick={(e) => handleClick(e, "#home")}
      >
        <span className="brand-mark">⬡</span>
        <span className="brand-name">INDIE DEV</span>
        <span className="brand-sub">/ DIPANKAR</span>
      </a>
      <div className="nav-center">UNITY 6 & 2022</div>
      <nav className="nav-links">
        <a
          className="nav-link"
          href="#games"
          onClick={(e) => handleClick(e, "#games")}
        >
          PROJECTS
        </a>
        <a
          className="nav-link"
          href="#systems"
          onClick={(e) => handleClick(e, "#systems")}
        >
          SYSTEMS
        </a>
        <a
          className="nav-link"
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
}
