import { SiteHeader, SiteFooter } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import {
  HowItWorks,
  Features,
  Languages,
  Stats,
  Testimonials,
  SecurityStrip,
  Pricing,
  Faq,
  WaitlistCta,
} from "@/components/landing/sections";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-screen">
        <Hero />
        <HowItWorks />
        <Features />
        <Languages />
        <Stats />
        <Testimonials />
        <SecurityStrip />
        <Pricing />
        <Faq />
        <WaitlistCta />
      </main>
      <SiteFooter />
    </>
  );
}