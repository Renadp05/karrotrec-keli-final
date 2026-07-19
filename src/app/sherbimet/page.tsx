import type { Metadata } from "next";
import ServiceBookingForm from "@/components/ServiceBookingForm";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Shërbimet | Karrotrec Keli 24/7",
  description:
    "Transport automjetesh, transport për servis, makina sporti/luksoze, planifikim ndërqytetës. Dërgoni kërkesën tuaj dhe ju kontaktojmë.",
};

const services = [
  {
    emoji: "🚗",
    title: "Transport Automjeti",
    desc: "Transport i sigurtë i automjetit tuaj nga një pikë në tjetrën brenda ose jashtë qytetit.",
    features: [
      "Transport ndërqytetës në gjithë Shqipërinë",
      "Kujdes maksimal gjatë ngarkimit dhe shkarkimit",
      "Komunikim i vazhdueshëm gjatë rrugës",
    ],
  },
  {
    emoji: "🔧",
    title: "Transport Makine për Servis",
    desc: "E marrim makinën nga shtëpia ose zyra dhe e çojmë drejt e tek servisi i zgjedhur prej jush.",
    features: [
      "Marrje nga çdo vendndodhje në qytet",
      "Transport tek servisi i dëshiruar",
      "Mundësi organizimi i kthimit",
    ],
  },
  {
    emoji: "🏎️",
    title: "Transport Makine Sporti & Luksoze",
    desc: "Trajtim i veçantë për automjete premium — kujdes maksimal.",
    features: [
      "Personel të trajnuar për automjete luksoze",
    ],
  },
  {
    emoji: "🗺️",
    title: "Planifikim Transport Ndërqytetës",
    desc: "Planifikoni paraprakisht transportin e automjetit tuaj — rezervoni datën dhe ne organizojmë gjithçka.",
    features: [
      "Rezervim paraprak me datë të caktuar",
      "Transport në çdo qytet të Shqipërisë",
      "Konfirmim me SMS/WhatsApp",
    ],
  },
];

export default function SherbimetPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Shërbimet Tona
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Transport <span className="text-yellow-400">i Planifikuar</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Për raste jo-urgjente — dërgoni kërkesën tuaj dhe ju kontaktojmë brenda pak orësh.
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Keni emergjencë?{" "}
            <a href="tel:+355685792000" className="text-red-400 font-bold hover:text-red-300 transition-colors">
              Telefononi direkt →
            </a>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {service.emoji}
                  </div>
                  <div>
                    <h2 className="text-white font-black text-lg mb-1">{service.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4 pl-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">
              Dërgoni <span className="text-yellow-400">Kërkesën</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Plotësoni formularin dhe ju kontaktojmë sa më shpejt për detajet dhe çmimin.
            </p>
          </div>
          <ServiceBookingForm />
        </div>
      </section>
    </div>
  );
}