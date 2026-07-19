import Image from "next/image";
import { Camera } from "lucide-react";

// ============================================================
// NDRYSHO KËTU: Vendos fotot tuaja reale
// Krijo folder: /public/images/
// Vendos fotot: gallery-1.jpg, gallery-2.jpg, etj.
// Pastaj ndrysho src më poshtë
// ============================================================
const galleryItems = [
  {
    src: null, // NDRYSHO: "/images/gallery-1.jpg"
    alt: "Karrotrec duke ngarkuar mjetin",
    label: "Karrotrec në veprim",
    size: "large",
  },
  {
    src: null, // NDRYSHO: "/images/gallery-2.jpg"
    alt: "Transport makine",
    label: "Transport i sigurtë",
    size: "small",
  },
  {
    src: null, // NDRYSHO: "/images/gallery-3.jpg"
    alt: "Stafi ynë",
    label: "Ekipi profesionist",
    size: "small",
  },
  {
    src: null, // NDRYSHO: "/images/gallery-4.jpg"
    alt: "Ndihmë aksidenti",
    label: "Asistencë aksidenti",
    size: "small",
  },
  {
    src: null, // NDRYSHO: "/images/gallery-5.jpg"
    alt: "Karrotrec natën",
    label: "Shërbim nate",
    size: "small",
  },
];

type GalleryItem = {
  src: string | null;
  alt: string;
  label: string;
  size: string;
};

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-red-600/40 transition-all duration-300">
      {item.src ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        // Placeholder when no image
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center p-4">
          <Camera className="w-10 h-10 text-gray-600 mb-3" />
          <p className="text-gray-500 text-xs text-center">
            📸 Vendos foton tënde
          </p>
          <p className="text-gray-600 text-xs text-center mt-1">{item.label}</p>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-white font-semibold text-sm">{item.label}</span>
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section className="section-padding bg-gray-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Camera className="w-4 h-4" />
            Galeria
          </div>
          <h2 className="section-title">
            Puna Jonë në{" "}
            <span className="text-red-500">Veprim</span>
          </h2>
          <p className="section-subtitle">
            Fotografi nga shërbimet tona reale. Profesionalizëm në çdo
            detaj.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large card */}
          <div className="col-span-2 md:col-span-1 row-span-2 min-h-64 md:min-h-[400px]">
            <div className="h-full">
              <GalleryCard item={galleryItems[0]} />
            </div>
          </div>

          {/* Small cards */}
          {galleryItems.slice(1).map((item) => (
            <div key={item.label} className="min-h-48">
              <GalleryCard item={item} />
            </div>
          ))}
        </div>

        {/* Photo upload hint */}
        <div className="mt-8 p-5 bg-yellow-500/5 border border-yellow-500/20 rounded-xl text-center">
          <p className="text-yellow-400 font-semibold mb-1">
            📸 Si t&apos;i shtosh fotot e tua?
          </p>
          <p className="text-gray-400 text-sm">
            Vendos fotot në dosjen <code className="bg-gray-800 px-2 py-0.5 rounded text-yellow-300">/public/images/</code> dhe ndrysho src-të në{" "}
            <code className="bg-gray-800 px-2 py-0.5 rounded text-yellow-300">GallerySection.tsx</code>
          </p>
        </div>
      </div>
    </section>
  );
}