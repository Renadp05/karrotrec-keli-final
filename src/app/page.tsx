import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Karrotrec Keli 24/7 | Shërbim Karrotreci në Shqipëri",
  description:
    "Karrotrec Keli 24/7 – Shërbim profesional karrotreci dhe asistence rrugore. Ndihmë e shpejtë brenda 15–30 minutave. Transport automjetesh në të gjithë Shqipërinë.",
};

export default function HomePage() {
  return <HeroSection />;
}