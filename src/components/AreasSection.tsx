import { MapPin } from "lucide-react";

const areas = [
  { name: "Tiranë", description: "Qyteti kryesor", priority: true },
  { name: "Durrës", description: "Bregdeti + Port", priority: true },
  { name: "Shkodër", description: "Veriperëndim", priority: false },
  { name: "Vlorë", description: "Jugu Bregdetar", priority: true },
  { name: "Fier", description: "Zona Qendrore", priority: false },
  { name: "Korçë", description: "Jug-Lindja", priority: false },
  { name: "Elbasan", description: "Qendra", priority: false },
  { name: "Gjirokastër", description: "Jugor", priority: false },
  { name: "Sarandë", description: "Riviera", priority: false },
  { name: "Lushnjë", description: "Myzeqe", priority: false },
  { name: "Berat", description: "Qyteti i Trileve", priority: false },
  { name: "Pogradec", description: "Liqeni i Ohrit", priority: false },
];

const highways = [
  "Autostrada Tiranë–Durrës (A1)",
  "Autostrada Tiranë–Elbasan",
  "Rruga Kombëtare SH1",
  "Rruga Kombëtare SH4",
  "Rruga Kombëtare SH7",
];

export default function AreasSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 stripe-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            Zonat e Shërbimit
          </div>
          <h2 className="section-title">
            Kudo në{" "}
            <span className="text-yellow-500">Shqipëri</span>
          </h2>
          <p className="section-subtitle">
            Jemi të pranishëm në të gjithë territorin shqiptar. Nga veriu në
            jug, nga bregdeti deri në brendësi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map placeholder */}
          <div className="relative">
            {/* ============================================================
                NDRYSHO KËTU: Shto hartën tuaj reale ose Google Maps embed
                Shembull Google Maps embed:
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!..."
                  width="100%"
                  height="400"
                  className="rounded-2xl border border-gray-700"
                  allowFullScreen
                  loading="lazy"
                />
                ============================================================ */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden h-96 flex items-center justify-center relative">
              <div className="text-center px-8">
                <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <p className="text-white font-bold text-xl mb-2">
                  Google Maps Embed
                </p>
                <p className="text-gray-400 text-sm">
                  Vendos këtu Google Maps iframe me vendndodhjen tënde
                </p>
                <p className="text-gray-600 text-xs mt-2">
                  Shiko udhëzimet në README.md
                </p>
              </div>

              {/* Decorative pins */}
              {[
                { top: "20%", left: "45%", label: "TIR" },
                { top: "25%", left: "30%", label: "SHK" },
                { top: "55%", left: "20%", label: "VLO" },
                { top: "35%", left: "55%", label: "ELB" },
              ].map((pin) => (
                <div
                  key={pin.label}
                  className="absolute"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <div className="relative">
                    <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-yellow-400 font-bold whitespace-nowrap">
                      {pin.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time card */}
            <div className="absolute -bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-xl p-4 shadow-xl">
              <div className="text-yellow-500 font-black text-2xl">15 min</div>
              <div className="text-gray-400 text-xs">Koha mesatare</div>
              <div className="text-gray-500 text-xs">mbërritjes brenda qytetit</div>
            </div>
          </div>

          {/* Cities List */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">
              Qytetet Kryesore
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                    area.priority
                      ? "bg-red-600/10 border-red-600/30 hover:border-red-600/50"
                      : "bg-gray-900 border-gray-800 hover:border-gray-600"
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 flex-shrink-0 ${
                      area.priority ? "text-red-500" : "text-gray-500"
                    }`}
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {area.name}
                    </div>
                    <div className="text-gray-500 text-xs">{area.description}</div>
                  </div>
                  {area.priority && (
                    <span className="ml-auto text-xs text-red-400 bg-red-600/20 px-2 py-0.5 rounded-full">
                      Aktiv
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Highways */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h4 className="text-yellow-500 font-bold mb-4 flex items-center gap-2">
                <span>🛣️</span> Autostrada dhe Rrugë Kombëtare
              </h4>
              <ul className="space-y-2">
                {highways.map((hw) => (
                  <li key={hw} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0" />
                    {hw}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}