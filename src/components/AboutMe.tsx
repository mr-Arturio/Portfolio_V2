import React from "react";
import { ThemeProps, ColorScheme } from "@/types/theme";

const AboutMe = ({ theme }: ThemeProps) => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={
              theme === ColorScheme.Dark
                ? "/assets/IMG_20230114_232740_181.jpg"
                : "/assets/IMG_20230114_232740_181.jpg"
            }
            alt="Profile"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={
                  theme === ColorScheme.Dark
                    ? "/assets/experience_dark.png"
                    : "/assets/experience.png"
                }
                alt="Experience icon"
                className="icon contact-icon"
              />
              <h3>Experience</h3>
              <p>
                3 years <br /> Web Development
              </p>
            </div>
            <div className="details-container">
              <img
                src={
                  theme === ColorScheme.Dark
                    ? "/assets/education_dark.png"
                    : "/assets/education.png"
                }
                alt="Education icon"
                className="icon contact-icon"
              />
              <h3>Education</h3>
              <p>
                Web Dev Diploma <br /> Political Science Masters Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              My diverse background and dedication to personal and professional
              growth have equipped me with the adaptability and determination
              needed to excel in various roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
