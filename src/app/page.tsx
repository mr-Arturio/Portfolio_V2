"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { Theme } from "../constants/enums";

export default function HomePage() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme === Theme.Dark) {
      setTheme(Theme.Dark);
      document.body.setAttribute("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === Theme.Dark) {
      setTheme(Theme.Light);
      localStorage.setItem("theme", Theme.Light);
      document.body.removeAttribute("theme");
    } else {
      setTheme(Theme.Dark);
      localStorage.setItem("theme", Theme.Dark);
      document.body.setAttribute("theme", "dark");
    }
  };

  return (
    <>
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <main>
      </main>
      <Footer />
    </>
  );
}
