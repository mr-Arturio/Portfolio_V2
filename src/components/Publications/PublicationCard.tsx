import { PublicationCardProps } from "@/types/publications";
// import Image from "next/image";

export default function PublicationCard({
  // imageSrc,
  // altText,
  title,
  description,
  mediumLink,
}: PublicationCardProps) {
  return (
    <div className="publication-entry">
      {/* <Image
        src={imageSrc}
        alt={altText}
        width={360}
        height={240}
        className="publication-image"
      /> */}
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
