"use client";
import { Box } from "@mui/material";
import Hero from "@/components/Hero";
import CarbonCalculator from "@/components/CarbonCalculator";
import UpcomingFeatures from "@/components/UpcomingFeatures";
import Features from "@/components/Features";

export default function Home() {
  return (
    <Box>
      <Hero />
      <CarbonCalculator />
      {/* 暂时注释掉 Features，直到组件准备好 */}
      <Features />
      <UpcomingFeatures />
    </Box>
  );
}
