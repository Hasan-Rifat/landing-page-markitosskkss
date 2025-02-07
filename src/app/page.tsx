import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
    </main>
  );
}
