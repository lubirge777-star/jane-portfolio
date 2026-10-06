import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { Cursor, Preloader, ScrollProgress } from "./components/Experience";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  const [ready, setReady] = useState(false);
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [dark]);

  useReveal();

  return (
    <div className={`min-h-screen overflow-x-clip bg-page text-ink ${ready ? "" : "is-loading"}`}>
      <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-coal">
        Skip to content
      </a>
      <Preloader onDone={() => setReady(true)} />
      <Cursor />
      <ScrollProgress />
      <Navbar dark={dark} onToggle={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <About />
        <Journey />
        <Testimonials />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}
