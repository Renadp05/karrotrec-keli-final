"use client";

import Image from "next/image";
import { Phone, MessageCircle, ChevronDown, Shield, Clock, MapPin } from "lucide-react";

const PHONE_NUMBER = "+355 68 579 2000";
const PHONE_HREF = "tel:+355685792000";
const WHATSAPP_HREF = "https://wa.me/355685792000";

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("sherbimet")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-karrotrec.jpg"
          alt="Karrotrec 24/7"
          fill
          priority
          className="object-cover object-[82%_center]"
        />

        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,38,38,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.45) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28 md:py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-red-600/25 border border-red-500/50 text-red-200 px-4 py-2 rounded-full text-sm font-semibold mb-7 backdrop-blur-md">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Aktiv 24/7 — Gjithë Shqipëria
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">
            Karrotrec{" "}
            <span className="text-red-500 drop-shadow-[0_0_18px_rgba(239,68,68,0.55)]">
              24/7
            </span>
            <br />
            në të gjithë
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Shqipërinë
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl mt-8 mb-10 leading-relaxed max-w-xl">
            Ndihmë e shpejtë në rrugë, transport makinash dhe asistencë emergjente.
            Mbërrijmë tek ju brenda{" "}
            <span className="text-yellow-400 font-bold">15–30 minuta</span>, ditë e natë.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black text-lg py-5 px-9 rounded-2xl transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(239,68,68,0.45)]"
            >
              <Phone className="w-6 h-6" />
              <span>
                Telefono Tani
                <span className="block text-sm font-medium text-red-100">
                  {PHONE_NUMBER}
                </span>
              </span>
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black text-lg py-5 px-9 rounded-2xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.35)]"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            {[
              { icon: Clock, title: "Mbërritje", subtitle: "15–30 min" },
              { icon: Shield, title: "Shërbim", subtitle: "i sigurt" },
              { icon: MapPin, title: "Gjithë", subtitle: "Shqipëria" },
            ].map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="flex items-center gap-3 bg-black/45 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 min-w-[150px]"
              >
                <Icon className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="text-white font-bold">{title}</div>
                  <div className="text-gray-300 text-sm">{subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Shko poshtë"
      >
        <ChevronDown className="w-9 h-9" />
      </button>
    </section>
  );
}