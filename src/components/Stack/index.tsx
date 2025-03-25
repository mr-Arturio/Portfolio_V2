import React from "react";
import { ThemeProps } from "@/types/theme";
import FrontEndStack from "./FrontEndStack";
import BackEndStack from "./BackEndStack";
import PlatformService from "./PlatformService";

const Stack = ({ theme }: ThemeProps) => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Development Stack</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <FrontEndStack theme={theme} />
          <BackEndStack theme={theme} />
          <PlatformService theme={theme} />
        </div>
      </div>
    </section>
  );
};

export default Stack;
