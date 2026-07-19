"use client";

import { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle } from "lucide-react";

// ============================================================
// NDRYSHO KËTU: Numrin e telefonit, WhatsApp dhe adresën
// ============================================================
const PHONE_NUMBER = "+355 68 579 2000";
const PHONE_HREF = "tel:+355685792000";
const WHATSAPP_HREF = "https://wa.me/355685792000";
const GOOGLE_MAPS_EMBED = "https://maps.app.goo.gl/vyirhanWzShpPf3eA"; // NDRYSHO: Shto embed URL të Google Maps

const problemTypes = [
  "Karrotrec i menjëhershëm",
  "Transport automjeti",
  "Ndihmë aksidenti",
  "Makina nuk ndizet",
  "Bllokuar në autostradë",
  "Transport për servis",
  "Çelës i harruar brenda",
  "Tjetër",
];

type FormData = {
  name: string;
  phone: string;
  location: string;
  problem: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    location: "",
    problem: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // ============================================================
    // NDRYSHO KËTU: Shto logjikën reale të dërgimit (email, Formspree, etj.)
    // Shembull me Formspree: https://formspree.io/
    // ============================================================
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors";

  return (
    <section id="kontakt" className="section-padding bg-gray-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Phone className="w-4 h-4" />
            Na Kontaktoni
          </div>
          <h2 className="section-title">
            Jemi Gati të{" "}
            <span className="text-red-500">Ndihmojmë</span>
          </h2>
          <p className="section-subtitle">
            Na kontaktoni menjëherë për çdo emergjencë rrugore. Jemi aty brenda
            minutave.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            {/* Emergency Call Card */}
            <div className="bg-red-600 rounded-2xl p-6 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/30 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-white font-black text-xl mb-2 relative z-10">
                🚨 Emergjencë?
              </h3>
              <p className="text-red-100 text-sm mb-4 relative z-10">
                Mos prisni — telefononi tani dhe jemi rrugës!
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 bg-white text-red-600 font-black py-3 px-5 rounded-xl hover:bg-gray-100 transition-colors text-lg relative z-10 w-fit"
              >
                <Phone className="w-5 h-5" />
                {PHONE_NUMBER}
              </a>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mb-6">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-900 border border-gray-800 hover:border-green-600/50 rounded-xl p-4 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-700/20 rounded-xl flex items-center justify-center group-hover:bg-green-700/30 transition-colors">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold">WhatsApp</div>
                  <div className="text-gray-400 text-sm">Dërgoni mesazh tani</div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-white font-bold">Orari</div>
                  <div className="text-gray-400 text-sm">24 orë / 7 ditë / 365 ditë</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <div className="text-white font-bold">Zona e Shërbimit</div>
                  <div className="text-gray-400 text-sm">
                    Gjithë Shqipëria — Tiranë e bazë
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden h-56">
              {GOOGLE_MAPS_EMBED ? (
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Karrotrec Keli Lokacioni"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <MapPin className="w-10 h-10 text-red-500 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Google Maps</p>
                    <p className="text-gray-500 text-xs">
                      Shto GOOGLE_MAPS_EMBED URL në ContactSection.tsx
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-white font-black text-2xl mb-2">
                    Mesazhi u Dërgua!
                  </h3>
                  <p className="text-gray-400">
                    Do t&apos;ju kontaktojmë sa më shpejt. Për emergjencë, telefononi
                    direkt!
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-3 px-6 rounded-xl mt-6 hover:bg-red-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {PHONE_NUMBER}
                  </a>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        Dërgoni Mesazh
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Plotësoni formularin dhe ju kontaktojmë
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          Emri <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Emri juaj"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          Telefon <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+355 6X XXX XXXX"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Vendndodhja juaj <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        required
                        placeholder="p.sh. Rruga Kombit, Tiranë / Km 12 Autostrada Durrës"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Lloji i Problemit <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="problem"
                        value={form.problem}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Zgjidhni llojin e problemit...
                        </option>
                        {problemTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Mesazh Shtesë
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Përshkruani problemin tuaj..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 disabled:bg-red-800 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-100 shadow-lg shadow-red-600/30 text-lg"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Duke dërguar...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Dërgoni Mesazhin
                        </>
                      )}
                    </button>

                    <p className="text-gray-500 text-xs text-center mt-3">
                      ⚡ Për emergjencë të menjëhershme, telefononi direkt:{" "}
                      <a href={PHONE_HREF} className="text-red-400 font-bold">
                        {PHONE_NUMBER}
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}