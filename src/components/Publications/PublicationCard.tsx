import { PublicationCardProps } from "@/types/publications";

export default function PublicationCard({
  title,
  description,
  mediumLink,
}: PublicationCardProps) {
  return (
    <div className="publication-entry">
      <h2 className="publication-title">{title}</h2>
      <p className="publication-description">{description}</p>
      <a
        href={mediumLink}
        target="_blank"
        rel="noopener noreferrer"
        className="publication-link"
      >
        Read on Medium →
      </a>
    </div>
  );
}
