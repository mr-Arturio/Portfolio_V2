import React from "react";
import { ThemeProps, ColorScheme } from "@/types/theme";

const MyIntroduction = ({ theme }: ThemeProps) => {
  const handleDownloadCV = () => {
    window.open("/assets/Artur-Tereshchenko-Resume-2025.pdf", "_blank");
  };

  const handleContactScroll = () => {
    window.location.href = "#contact";
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          className="profile_pic"
          src="/assets/IMG_20230114_232740_181.jpg"
          alt="Artur T profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Artur Tereshchenko</h1>
        <p className="section__text__p2">Full Stack Web Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="btn btn-color-2" onClick={handleContactScroll}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={
              theme === ColorScheme.Dark
                ? "./assets/linkedin_dark.png"
                : "./assets/linkedin.png"
            }
            alt="My LinkedIn profile"
            className="icon linkedin-icon"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/artur-tereshchenko-968934199/")
            }
          />
          <img
            src={
              theme === ColorScheme.Dark
                ? "./assets/github_dark.png"
                : "/assets/github.png"
            }
            alt="My Github profile"
            className="icon github-icon"
            onClick={() =>
              (window.location.href = "https://github.com/mr-Arturio")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default MyIntroduction;
