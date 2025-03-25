import React from "react";
import { ColorScheme } from "@/types/theme";
import { StackItem } from "@/types/stack";

interface BackEndStackProps {
  theme: ColorScheme;
}

const backEndItems: StackItem[] = [
  {
    src: "/assets/Stack/postgresql.svg",
    alt: "PostgreSQL",
    label: "PostgreSQL",
  },
  {
    src: "./assets/Stack/mongodb-original.svg",
    srcLight: "./assets/Stack/mongodb-original.svg",
    srcDark: "./assets/Stack/mongodb-original.svg",
    alt: "MongoDB",
    label: "MongoDB",
  },
  {
    src: "./assets/Stack/nodejs-icon.svg",
    srcLight: "./assets/Stack/nodejs-icon.svg",
    srcDark: "./assets/Stack/nodejs-icon.svg",
    alt: "Node JS",
    label: "Node JS",
  },
  {
    src: "./assets/Stack/express.svg",
    srcLight: "./assets/Stack/express.svg",
    srcDark: "./assets/Stack/icons8-express-js.svg",
    alt: "Express JS",
    label: "Express JS",
  },
  {
    src: "./assets/Stack/Product_Logomark_Cloud_Firestore_Full_Color.svg",
    srcLight: "./assets/Stack/Product_Logomark_Cloud_Firestore_Full_Color.svg",
    srcDark: "./assets/Stack/Product_Logomark_Cloud_Firestore_Full_Color.svg",
    alt: "Firebase",
    label: "Firebase",
  },
];

export default function BackEndStack({ theme }: BackEndStackProps) {
  return (
    <div className="details-container">
      <h2 className="experience-sub-title">Back-End</h2>
      <div className="article-container">
        {backEndItems.map((item, index) => {
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
