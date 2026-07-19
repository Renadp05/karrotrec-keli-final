import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

// ============================================================
// NDRYSHO KËTU: SEO meta tags - titulli, përshkrimi, URL-ja
// ============================================================
export const metadata: Metadata = {
  title: {
    default: "Karrotrec Keli 24/7 | Shërbim Karrotreci në Shqipëri",
    template: "%s | Karrotrec Keli 24/7",
  },
  description:
    "Karrotrec Keli 24/7 – Shërbim profesional karrotreci dhe asistence rrugore në të gjithë Shqipërinë. Transport automjetesh, ndihmë emergjente, aksidente. Telefononi +355 68 579 2000.",
  keywords: [
    "karrotrec",
    "karrotrec 24/7",
    "karrotrec Tiranë",
    "karrotrec Shqipëri",
    "transport automjetesh",
    "asistencë rrugore",
    "ndihmë aksidente",
    "karrotrec i lirë",
    "karrotrec emergjencë",
    "tow truck Albania",
  ],
  authors: [{ name: "Karrotrec Keli 24/7" }],
  creator: "Karrotrec Keli",
  openGraph: {
    type: "website",
    locale: "sq_AL",
    url: "https://www.karrotreckeli.al", // NDRYSHO: URL-ja juaj reale
    siteName: "Karrotrec Keli 24/7",
    title: "Karrotrec Keli 24/7 | Shërbim Karrotreci në Shqipëri",
    description:
      "Karrotrec profesional 24/7 në të gjithë Shqipërinë. Ndihmë e shpejtë, transport i sigurtë, çmime të arsyeshme.",
    images: [
      {
        url: "/images/og-image.jpg", // NDRYSHO: Vendos foton e duhur
        width: 1200,
        height: 630,
        alt: "Karrotrec Keli 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karrotrec Keli 24/7 | Shërbim Karrotreci në Shqipëri",
    description:
      "Karrotrec profesional 24/7 në të gjithë Shqipërinë. Telefononi +355 68 579 2000.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // NDRYSHO: Shto Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* ============================================================
            NDRYSHO KËTU: Shto favicon-in tuaj real
            Krijo imazhin: /public/favicon.ico dhe /public/icon.png
            ============================================================ */}
        <link rel="icon" href="/favicon.ico" />
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Karrotrec Keli 24/7",
              description:
                "Shërbim profesional karrotreci dhe asistence rrugore 24/7 në Shqipëri",
              telephone: "+355685792000", // NDRYSHO: Numri juaj
              url: "https://www.karrotreckeli.al", // NDRYSHO: URL-ja juaj
              address: {
                "@type": "PostalAddress",
                addressCountry: "AL",
                addressLocality: "Tiranë", // NDRYSHO: Qyteti juaj
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday",
                  "Friday", "Saturday", "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "Albania",
              },
            }),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}