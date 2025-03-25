import React from "react";
import { ColorScheme } from "@/types/theme";
import { StackItem } from "@/types/stack";

interface PlatformStackProps {
  theme: ColorScheme;
}

const platformItems: StackItem[] = [
  {
    src: "/assets/Stack/google-cloud.svg",
    alt: "Google Cloud",
    label: "Google Cloud",
  },
  {
    src: "./assets/Stack/github.png",
    srcLight: "./assets/Stack/github.png",
    srcDark: "./assets/Stack/github_dark.png",
    alt: "Git",
    label: "Git",
  },
  {
    src: "./assets/Stack/openai.svg",
    srcLight: "./assets/Stack/openai.svg",
    srcDark: "./assets/Stack/icons8-chatgpt.svg",
    alt: "OpenAI",
    label: "OpenAI",
  },
  {
    src: "./assets/Stack/vercel.svg",
    srcLight: "./assets/Stack/vercel.svg",
    srcDark: "./assets/Stack/communityIcon_lck50fpdcmv71.jpeg",
    alt: "Vercel",
    label: "Vercel",
  },
  {
    src: "./assets/Stack/stripe.svg",
    srcLight: "./assets/Stack/stripe.svg",
    srcDark: "./assets/Stack/stripe.svg",
    alt: "Stripe",
    label: "Stripe",
  },
  {
    src: "./assets/Stack/auth0.svg",
    srcLight: "./assets/Stack/auth0.svg",
    srcDark: "./assets/Stack/auth0.svg",
    alt: "Auth0",
    label: "Auth0",
  },
  {
    src: "./assets/Stack/wordpress.svg",
    srcLight: "./assets/Stack/wordpress.svg",
    srcDark: "./assets/Stack/wordpress.svg",
    alt: "WordPress",
    label: "WordPress",
  },
];

export default function PlatformStack({ theme }: PlatformStackProps) {
  return (
    <div className="details-container">
      <h2 className="experience-sub-title">Platform Services</h2>
      <div className="article-container">
        {platformItems.map((item, index) => {
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
