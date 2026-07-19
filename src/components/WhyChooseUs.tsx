import { Clock, Shield, Phone, Star, Zap, MapPin, Wrench, Award } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Disponibël 24/7",
    description:
      "Jemi aktiv çdo orë të ditës dhe natës, 365 ditë në vit. Nuk ka moment kur nuk jemi gati të ndihmojmë.",
    color: "red",
  },
  {
    icon: Zap,
    title: "Mbërritje e Shpejtë",
    description:
      "Mbërrijnë tek ju brenda 15–30 minutave. Çdo minutë ka rëndësi kur jeni bllokuar në rrugë.",
    color: "yellow",
  },
  {
    icon: Shield,
    title: "Shërbim i Sigurtë",
    description:
      "Ekip profesionist me përvojë. Makina juaj trajtohet me kujdesin maksimal gjatë gjithë procesit.",
    color: "red",
  },
  {
    icon: Phone,
    title: "Kontakt i Menjëhershëm",
    description:
      "Një telefonatë ose mesazh WhatsApp dhe jemi rrugës. Nuk ju lëmë të prisni pa informacion.",
    color: "yellow",
  },
  {
    icon: MapPin,
    title: "Gjithë Shqipëria",
    description:
      "Shërbejmë në të gjitha qytetet kryesore dhe rrugët e Shqipërisë, duke përfshirë autostradën.",
    color: "red",
  },
  {
    icon: Award,
    title: "Çmime të Arsyeshme",
    description:
      "Transparencë totale në çmim. Pa surpriza. Kosto e drejtë për shërbim cilësor.",
    color: "yellow",
  },
];

const colorMap = {
  red: {
    bg: "bg-red-600/10",
    border: "border-red-600/20",
    icon: "text-red-500",
    iconBg: "bg-red-600/20",
    hover: "hover:border-red-600/50 hover:shadow-red-600/10",
  },
  yellow: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    icon: "text-yellow-500",
    iconBg: "bg-yellow-500/20",
    hover: "hover:border-yellow-500/50 hover:shadow-yellow-500/10",
  },
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Pse Të Na Zgjidhni
          </div>
          <h2 className="section-title">
            Shërbim që Mund ta{" "}
            <span className="gradient-text">Besoni</span>
          </h2>
          <p className="section-subtitle">
            Jemi të angazhuar t&apos;ju ofrojmë ndihmën më të shpejtë dhe profesionale
            kur keni nevojë më shumë.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const colors = colorMap[feature.color as keyof typeof colorMap];
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative bg-gray-900 border ${colors.border} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${colors.hover} hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-red-600/10 via-gray-900 to-yellow-500/10 border border-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Klientë të shërbyer" },
              { number: "3+", label: "Vite eksperiencë" },
              { number: "24/7", label: "Orë disponueshmëri" },
              { number: "100%", label: "Kënaqësi klienti" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}