import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              altText={project.altText}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
