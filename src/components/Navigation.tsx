import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggleProps, ColorScheme } from "../types/theme";

const Navigation = ({ toggleTheme, theme }: ThemeToggleProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav id="desktop-nav">
      {/* Desktop Navigation */}
      <div className="logo">Artur T</div>
      <div>
        <ul className="nav-links">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <img
              className="icon color-icon"
              src={
                theme === ColorScheme.Dark
                  ? "/assets/theme_dark.png"
                  : "/assets/theme_light.png"
              }
              alt="Toggle Theme"
              onClick={toggleTheme}
            />
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div id="hamburger-nav">
        <div className="logo">Artur T</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link href="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" onClick={toggleMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <img
                className="icon color-icon"
                src={
                  theme === ColorScheme.Dark
                    ? "/assets/theme_dark.png"
                    : "/assets/theme_light.png"
                }
                alt="Toggle Theme"
                onClick={toggleTheme}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
