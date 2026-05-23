import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallButton from "@/components/layout/MobileCallButton";

import Hero from "@/components/home/Hero";
import CertStrip from "@/components/home/CertStrip";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import Sectors from "@/components/home/Sectors";
import FeaturedWork from "@/components/home/FeaturedWork";
import RecentWork from "@/components/home/RecentWork";
import Stats from "@/components/home/Stats";
import Method from "@/components/home/Method";
import Gallery from "@/components/home/Gallery";
import PullQuote from "@/components/home/PullQuote";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <CertStrip />
        <Intro />
        <Services />
        <Sectors />
        <FeaturedWork />
        <RecentWork />
        <Stats />
        <Method />
        <Gallery />
        <PullQuote />
        <Contact />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
