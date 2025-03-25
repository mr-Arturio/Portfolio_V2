import { PublicationCardProps } from "@/types/publications"

export default function PublicationCard({
  imageSrc,
  altText,
  title,
  mediumLink,
}: PublicationCardProps) {
  return (
    <div className="details-container color-container project-container">
      <div className="article-container">
        <img src={imageSrc} alt={altText} className="publication-img" />
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
