import { Project } from "@/types/project";

interface ProjectCardProps extends Project {}

export default function ProjectCard({
  imageSrc,
  altText,
  title,
  description,
  githubLink,
  liveDemoLink,
}: ProjectCardProps) {
  return (
    <div className="details-container color-container project-container">
      <div className="article-container">
        <img src={imageSrc} alt={altText} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <br />
      <div className="btn-container">
      {githubLink && (
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => window.open(githubLink, "_blank")}
          >
            Github
          </button>
        )}
        {liveDemoLink && (
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => window.open(liveDemoLink, "_blank")}
          >
            Live Demo
          </button>
        )}
      </div>
    </div>
  );
}
