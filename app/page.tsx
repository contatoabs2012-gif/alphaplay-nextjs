import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ContentBanner from "@/components/ContentBanner";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import Compatibility from "@/components/Compatibility";
import SupportSection from "@/components/SupportSection";
import TrialCTA from "@/components/TrialCTA";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <ContentBanner />
      <Features />
      <Plans />
      <Compatibility />
      <SupportSection />
      <TrialCTA />
      <AppSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
