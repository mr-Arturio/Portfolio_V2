import Image from "next/image";
import { PublicationCardProps } from "@/types/publications";

export default function PublicationCard({
  imageSrc,
  altText,
  title,
  mediumLink,
}: PublicationCardProps) {
  return (
    <div className="details-container color-container project-container">
      <div className="article-container">
        <Image
          src={imageSrc}
          alt={altText}
          className="publication-img"
          width={360}
          height={300}
        />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.open(mediumLink, "_blank")}
        >
          Medium
        </button>
      </div>
    </div>
  );
}
