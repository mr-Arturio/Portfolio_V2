"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Publications from "@/components/Publications"

import { ColorScheme } from "@/types/theme";

export default function HomePage() {
  const [theme, setTheme] = useState<ColorScheme>(ColorScheme.Light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ColorScheme | null;
    if (savedTheme === ColorScheme.Dark) {
      setTheme(ColorScheme.Dark);
      document.body.setAttribute("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === ColorScheme.Dark) {
      setTheme(ColorScheme.Light);
      localStorage.setItem("theme", ColorScheme.Light);
      document.body.removeAttribute("theme");
    } else {
      setTheme(ColorScheme.Dark);
      localStorage.setItem("theme", ColorScheme.Dark);
      document.body.setAttribute("theme", "dark");
    }
  };

  return (
    <>
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <main>
        <AboutMe theme={theme} />
        <Stack theme={theme} />
        <Projects />
        <Publications />
        <Contact theme={theme} />
      </main>
      <Footer />
    </>
  );
}
