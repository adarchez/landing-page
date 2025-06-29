"use client";
import { ThemeProvider } from "next-themes";
import Hero from "@/components/Hero";
import FloatingContactButton from "@/components/FloatingContactButton";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Testimonials from "@/components/Testimonials";
import StackCarousel from "@/components/StackCarousel";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Plans from "@/components/Plans";
import Examples from "@/components/Examples";
import Contact from "@/components/Contact";
import CustomHeader from "@/components/CustomHeader";

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <CustomHeader />
      <ThemeToggle />
      <Hero />
      <main className="min-h-screen bg-neutral-200 dark:bg-neutral-950 px-6 py-12">
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
