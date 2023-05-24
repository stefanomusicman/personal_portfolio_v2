import HeroSection from "@/components/HeroSection";
import NavBar from "../components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center md:w-10/12 lg:w-3/4">
      <NavBar />
      <HeroSection />
      <Projects />
    </main>
  )
}
