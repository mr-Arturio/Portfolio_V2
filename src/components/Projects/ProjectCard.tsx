import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({
  imageSrc,
  altText,
  title,
  description,
  githubLink,
  liveDemoLink,
}: Project) {
  return (
    <div className="details-container color-container project-container">
      <div className="article-container">
        <Image
          src={imageSrc}
          alt={altText}
          width={360}
          height={300}
          className="project-img"
        />
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
