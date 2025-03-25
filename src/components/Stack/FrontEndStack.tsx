import React from "react";
import { ColorScheme } from "@/types/theme";

interface FrontEndStackProps {
  theme: ColorScheme;
}

interface StackItem {
  src: string;
  srcLight?: string;
  srcDark?: string;
  alt: string;
  label: string;
}

const frontEndItems: StackItem[] = [
  { src: "/assets/Stack/html-5.svg", alt: "HTML", label: "HTML" },
  { src: "./assets/Stack/css-3.svg", srcLight: "./assets/Stack/css-3.svg", srcDark: "./assets/Stack/css-3.svg", alt: "CSS", label: "CSS" },
  { src: "./assets/Stack/tailwindcss-icon.svg", srcLight: "./assets/Stack/tailwindcss-icon.svg", srcDark: "./assets/Stack/tailwindcss-icon.svg", alt: "Tailwind", label: "Tailwind" },
  { src: "./assets/Stack/javascript.svg", srcLight: "./assets/Stack/javascript.svg", srcDark: "./assets/Stack/javascript.svg", alt: "JavaScript", label: "JavaScript" },
  { src: "./assets/Stack/react.svg", srcLight: "./assets/Stack/react.svg", srcDark: "./assets/Stack/react.svg", alt: "React", label: "React" },
  { src: "./assets/Stack/nextjs.svg", srcLight: "./assets/Stack/nextjs.svg", srcDark: "./assets/Stack/next-js-icon-logo-EE302D5DBD-seeklogo.com.png", alt: "Next.js", label: "Next.js" },
  { src: "./assets/Stack/typescript-icon.svg", srcLight: "./assets/Stack/typescript-icon.svg", srcDark: "./assets/Stack/typescript-icon.svg", alt: "TypeScript", label: "TypeScript" },
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
              : theme === ColorScheme.Light && item.srcLight
              ? item.srcLight
              : item.src;
          return (
            <article key={index}>
              <img src={imageSrc} alt={item.alt} className="icon" />
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
