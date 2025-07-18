"use client";
import { ThemeProvider } from "next-themes";
import Hero from "@/components/Hero";
import FloatingContactButton from "@/components/FloatingContactButton";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import StackCarousel from "@/components/StackCarousel";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Plans from "@/components/Plans";
import Examples from "@/components/Examples";
import Contact from "@/components/Contact";
import CustomHeader from "@/components/CustomHeader";
import SettingsDropdown from "@/components/SettingsDropdown";

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <CustomHeader />
      <SettingsDropdown />
      <Hero />
      <main className="min-h-screen bg-neutral-200 dark:bg-neutral-950 px-2 py-12">
        <FloatingContactButton />
        <Services />
        <StackCarousel />
        <Projects />
        <Plans />
        <Examples />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
