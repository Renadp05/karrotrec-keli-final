import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    emoji: "🚛",
    title: "Karrotrec Makinash 24/7",
    description:
      "Shërbim karrotreci i disponueshëm çdo orë. Ndihmojmë automjete të çdo tipi dhe modeli.",
    badge: "Emergjencë",
    badgeColor: "red",
  },
  {
    emoji: "🚗",
    title: "Transport Automjetesh",
    description:
      "Transport i sigurtë i automjetit tuaj brenda dhe ndërmjet qyteteve të Shqipërisë.",
    badge: "Popullar",
    badgeColor: "yellow",
  },
  {
    emoji: "🛣️",
    title: "Ndihmë në Autostradë",
    description:
      "Mbetëm bllokuar në autostradë? Jemi rrugës shumë shpejt. Kemi eksperiencë me të gjitha situatat.",
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "💥",
    title: "Transport Makinash të Dëmtuara",
    description:
      "Makina juaj ka pësuar dëmtim aksidenti? E transportojmë me kujdes deri në destinacion.",
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "🚨",
    title: "Asistencë për Aksidente",
    description:
      "Reagim i shpejtë pas aksidenteve. Ndihmojmë me evakuimin e mjetit dhe sigurinë e vendit.",
    badge: "Emergjencë",
    badgeColor: "red",
  },
  {
    emoji: "🔧",
    title: "Transport për Servis",
    description:
      "Duhet ta çosh makinën në servis? E marrim nga shtëpia dhe e çojmë deri tek mekanikut.",
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "🔋",
    title: "Makina që Nuk Ndizen",
    description:
      "Bateria e vdekur, avari mekanike, çelës i harruar brenda? Ju ndihmojmë menjëherë.",
    badge: null,
    badgeColor: null,
  },
  {
    emoji: "🌙",
    title: "Shërbim Emergjent Natën",
    description:
      "Nata nuk është pengesë. Jemi aktiv edhe natën vonë dhe gjatë festave zyrtare.",
    badge: "24/7",
    badgeColor: "yellow",
  },
];

const badgeStyles = {
  red: "bg-red-600/20 text-red-400 border border-red-600/30",
  yellow: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
};

export default function ServicesSection() {
  return (
    <section id="sherbimet" className="section-padding bg-gray-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Shërbimet Tona
          </div>
          <h2 className="section-title">
            Çfarë{" "}
            <span className="text-red-500">Ofrojmë</span>
          </h2>
          <p className="section-subtitle">
            Shërbime të plota karrotreci dhe asistence rrugore. Jemi të pajisur
            për çdo situatë emergjente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/5 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon + Badge Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                  {service.emoji}
                </div>
                {service.badge && (
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      badgeStyles[service.badgeColor as keyof typeof badgeStyles]
                    }`}
                  >
                    {service.badge}
                  </span>
                )}
              </div>

              <h3 className="text-white font-bold text-base mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/sherbimet"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Shiko të Gjitha Shërbimet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}