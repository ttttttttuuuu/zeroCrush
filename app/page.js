"use client";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CarbonCalculator from "@/components/CarbonCalculator";
import VisitorCounter from "@/components/VisitorCounter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CarbonCalculator />
      <VisitorCounter />
    </>
  );
}
