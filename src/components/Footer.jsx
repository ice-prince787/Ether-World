export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <span className="project-tag">GET IN TOUCH</span>
        <h2 className="footer-heading">LET'S TALK</h2>
        <p className="footer-lead">
          Open for collaborations and game developer jobs including asset making and 3d modeling.
        </p>
        <div className="footer-actions">
          <a href="mailto:dipankarmshambharkar@gmail.com" className="btn-primary">
            dipankarmshambharkar@gmail.com
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Dipankar</span>
          <span>Unity 6 & 2022</span>
        </div>
      </div>
    </footer>
  );
}
