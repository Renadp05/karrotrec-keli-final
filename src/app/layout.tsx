import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const SITE_URL = "https://www.karrotreckeli.com";
const PHONE_NUMBER = "+355685792000";
const GOOGLE_ADS_ID = "AW-18194371982";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Karrotrec Keli 24/7 | Shërbim Karrotreci në Shqipëri",
    template: "%s | Karrotrec Keli 24/7",
  },

  description:
    "Karrotrec Keli 24/7 ofron shërbim profesional karrotreci dhe asistencë rrugore në të gjithë Shqipërinë. Transport automjetesh, ndihmë emergjente dhe asistencë pas aksidenteve. Telefononi +355 68 579 2000.",

  keywords: [
    "karrotrec",
    "karrotrec 24/7",
    "karrotrec Tiranë",
    "karrotrec Shqipëri",
    "transport automjetesh",
    "asistencë rrugore",
    "ndihmë aksidente",
    "karrotrec emergjencë",
    "tow truck Albania",
    "roadside assistance Albania",
  ],

  authors: [{ name: "Karrotrec Keli 24/7" }],
  creator: "Karrotrec Keli",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "sq_AL",
    url: SITE_URL,
    siteName: "Karrotrec Keli 24/7",
    title: "Karrotrec Keli 24/7 | Shërbim Karrotreci në Shqipëri",
    description:
      "Karrotrec profesional 24/7 në të gjithë Shqipërinë. Ndihmë e shpejtë dhe transport i sigurt i automjeteve.",
    images: [
      {
        url: "/images/hero-karrotrec.jpg",
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
    images: ["/images/hero-karrotrec.jpg"],
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
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Karrotrec Keli 24/7",
    description:
      "Shërbim profesional karrotreci dhe asistencë rrugore 24/7 në Shqipëri.",
    telephone: PHONE_NUMBER,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-karrotrec.jpg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AL",
      addressLocality: "Tiranë",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Albania",
    },
  };

  return (
    <html lang="sq">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body className="bg-black text-white antialiased">
        {/* Google Ads base tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

        <Header />

        <main>{children}</main>

        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}