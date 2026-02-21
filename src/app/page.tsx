import Hero from "@/components/landing/Hero";
import Story from "@/components/landing/Story";
import Features from "@/components/landing/Features";
import Membership from "@/components/landing/Membership";
import CTA from "@/components/landing/CTA";
import Header from "@/components/landing/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <div id="story"><Story /></div>
      <div id="features"><Features /></div>
      <div id="membership"><Membership /></div>
      <CTA />
    </main>
  );
}
