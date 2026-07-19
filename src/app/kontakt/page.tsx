import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt | Karrotrec Keli 24/7",
  description:
    "Na kontaktoni 24/7 për shërbim karrotreci në Shqipëri. Telefononi +355 68 579 2000 ose dërgoni mesazh WhatsApp. Ndihmë e shpejtë kudo që të jeni.",
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <ContactSection />
    </div>
  );
}