import React from "react";
import { ThemeProps, ColorScheme } from "@/types/theme";

const Contact = ({ theme }: ThemeProps) => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={
              theme === ColorScheme.Dark
                ? "/assets/email_dark.png"
                : "/assets/email.png"
            }
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:mr.arturio@gmail.com">mr.arturio@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={
              theme === ColorScheme.Dark
                ? "/assets/linkedin_dark.png"
                : "/assets/linkedin.png"
            }
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/artur-tereshchenko-968934199/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
