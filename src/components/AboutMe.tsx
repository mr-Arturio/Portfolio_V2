import Image from "next/image";
import { ThemeProps, ColorScheme } from "@/types/theme";

const AboutMe = ({ theme }: ThemeProps) => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <Image
            src={
              theme === ColorScheme.Dark
                ? "/assets/Myphoto.jpg"
                : "/assets/Myphoto.jpg"
            }
            width={300}
            height={300}
            alt="Profile"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <Image
                src={
                  theme === ColorScheme.Dark
                    ? "/assets/experience_dark.png"
                    : "/assets/experience.png"
                }
                width={32}
                height={32}
                alt="Experience icon"
                className="icon contact-icon"
              />
              <h3>Experience</h3>
              <p>
                3 years <br /> Web Development
              </p>
            </div>
            <div className="details-container">
              <Image
                src={
                  theme === ColorScheme.Dark
                    ? "/assets/education_dark.png"
                    : "/assets/education.png"
                }
                width={32}
                height={32}
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
