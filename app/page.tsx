'use client';
import HeroSection from "@/components/HeroSection";
import NavBar from "../components/NavBar";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import AboutMe from "@/components/AboutMe";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Home() {

  // basic solution to deal with FOUC
  useEffect(() => {
    gsap.set('body', { opacity: 1 })
    gsap.from('body', { opacity: 0 })
  }, [])

  return (
    <main className="w-full flex flex-col items-center md:w-10/12 lg:w-3/4">
      <NavBar />
      <HeroSection />
      <Projects />
      <Tech />
      <AboutMe />
    </main>
  )
}
