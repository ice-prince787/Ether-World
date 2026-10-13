import { useState } from "react";

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="h-panel">
      <div className="project-card">
        <div className="project-info">
          <span className="project-tag">{project.tag}</span>
          <h2 className="project-title">
            <a
              href={project.link || "#"}
              target={project.link?.startsWith("http") ? "_blank" : undefined}
              rel={project.link?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="project-title-link"
            >
              {project.title}
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          </h2>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tech">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <div className="project-media">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              className="game-img"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="img-placeholder">
              <span className="placeholder-title">{project.title.toUpperCase()}</span>
              <span className="placeholder-sub">{project.placeholderSub}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
