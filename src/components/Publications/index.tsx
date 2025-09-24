import PublicationCard from "./PublicationCard";
import { publicationsData } from "@/data/publicationsData";
import type { PublicationCardProps } from "@/types/publications";

export default function Publications() {
  return (
    <section id="publications">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Publications</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {publicationsData.map((pub: PublicationCardProps, index: number) => (
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
