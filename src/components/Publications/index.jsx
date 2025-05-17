import PublicationCard from "./PublicationCard";
import { publicationsData } from "@/data/publicationsData";

export default function Publications() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Publications</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {publicationsData.map((pub, index) => (
            <PublicationCard
              key={index}
              imageSrc={pub.imageSrc}
              altText={pub.altText}
              title={pub.title}
              description={pub.description}
              mediumLink={pub.mediumLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
