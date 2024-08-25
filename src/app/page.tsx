"use client";

import "aos/dist/aos.css";

import {
  AboutMe,
  Banner,
  Contact,
  Experience,
  Projects,
  Skills,
} from "@/components";

import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="min-h-screen">
      <Banner />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
