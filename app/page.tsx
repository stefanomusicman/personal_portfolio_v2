import HeroSection from "@/components/HeroSection";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center h-screen md:w-85/100 lg:w-3/4">
      <NavBar />
      <HeroSection />
    </main>
  )
}
