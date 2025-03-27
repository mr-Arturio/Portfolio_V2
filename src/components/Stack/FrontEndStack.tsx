import Image from "next/image";
import { ColorScheme } from "@/types/theme";
import { StackItem } from "@/types/stack";

interface FrontEndStackProps {
  theme: ColorScheme;
}

const frontEndItems: StackItem[] = [
  {
    src: "/assets/Stack/html-5.svg",
    alt: "HTML",
    label: "HTML",
  },
  {
    src: "./assets/Stack/css-3.svg",
    alt: "CSS",
    label: "CSS",
  },
  {
    src: "./assets/Stack/tailwindcss-icon.svg",
    alt: "Tailwind",
    label: "Tailwind",
  },
  {
    src: "./assets/Stack/javascript.svg",
    alt: "JavaScript",
    label: "JavaScript",
  },
  {
    src: "./assets/Stack/react.svg",
    alt: "React",
    label: "React",
  },
  {
    src: "./assets/Stack/nextjs.svg",
    srcDark: "./assets/Stack/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
    alt: "Next.js",
    label: "Next.js",
  },
  {
    src: "./assets/Stack/typescript-icon.svg",
    alt: "TypeScript",
    label: "TypeScript",
  },
];

export default function FrontEndStack({ theme }: FrontEndStackProps) {
  return (
    <div className="details-container">
      <h2 className="experience-sub-title">Front-End</h2>
      <div className="article-container">
        {frontEndItems.map((item, index) => {
          const imageSrc =
            theme === ColorScheme.Dark && item.srcDark
              ? item.srcDark
              : item.src;
          return (
            <article key={index}>
              <Image
                src={imageSrc}
                alt={item.alt}
                width={item.label === "Next.js" ? 80 : 35}
                height={50}
                className="icon"
              />
              <div>
                <h4>{item.label}</h4>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
