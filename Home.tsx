import { Navbar } from "@/components/Navbar";
import HeroEnterprise from "@/components/HeroEnterprise";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroEnterprise />
        <Stats />
        <Services />
        <Solutions />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
