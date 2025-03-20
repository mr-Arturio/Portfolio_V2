import React from "react";
import { ThemeProps, ColorScheme } from "@/types/theme";


const Projects = ({ theme }: ThemeProps) => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Example Project Card */}
          <div className="details-container color-container project-container">
            <div className="article-container">
              <img
                src="/assets/IPF.jpg"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              The Incredible Playgroup Finder
            </h2>
            <p className="project-description">
              A bilingual, non-profit web app that helps Ottawa parents find local playgroup events.
            </p>
            <br />
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://github.com/mr-Arturio/Incredible_Playgroup_Finder", "_blank")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://www.incredibleplaygroupfinder.ca/en", "_blank")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container project-container">
            <div className="article-container">
              <img
                src="/assets/IPF.jpg"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              The Incredible Playgroup Finder
            </h2>
            <p className="project-description">
              A bilingual, non-profit web app that helps Ottawa parents find local playgroup events.
            </p>
            <br />
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://github.com/mr-Arturio/Incredible_Playgroup_Finder", "_blank")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://www.incredibleplaygroupfinder.ca/en", "_blank")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container project-container">
            <div className="article-container">
              <img
                src="/assets/IPF.jpg"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              The Incredible Playgroup Finder
            </h2>
            <p className="project-description">
              A bilingual, non-profit web app that helps Ottawa parents find local playgroup events.
            </p>
            <br />
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://github.com/mr-Arturio/Incredible_Playgroup_Finder", "_blank")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://www.incredibleplaygroupfinder.ca/en", "_blank")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container project-container">
            <div className="article-container">
              <img
                src="/assets/IPF.jpg"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              The Incredible Playgroup Finder
            </h2>
            <p className="project-description">
              A bilingual, non-profit web app that helps Ottawa parents find local playgroup events.
            </p>
            <br />
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://github.com/mr-Arturio/Incredible_Playgroup_Finder", "_blank")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://www.incredibleplaygroupfinder.ca/en", "_blank")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container project-container">
            <div className="article-container">
              <img
                src="/assets/IPF.jpg"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              The Incredible Playgroup Finder
            </h2>
            <p className="project-description">
              A bilingual, non-profit web app that helps Ottawa parents find local playgroup events.
            </p>
            <br />
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://github.com/mr-Arturio/Incredible_Playgroup_Finder", "_blank")
                }
              >
                Github
              </button>
              <button
                className="btn btn-color-2"
                onClick={() =>
                  window.open("https://www.incredibleplaygroupfinder.ca/en", "_blank")
                }
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
