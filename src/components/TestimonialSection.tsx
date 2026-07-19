"use client";

import { useState } from "react";
import { Star, Send, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
};

const serviceOptions = [
  "Karrotrec emergjent",
  "Transport automjeti",
  "Transport për servis",
  "Transport makine sporti / luksoze",
  "Planifikim ndërqytetës",
  "Tjetër",
];

const inputClass =
  "w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm";

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
          aria-label={`${i} yje`}
        >
          <Star
            className={`w-7 h-7 transition-colors ${
              i <= (hovered || value)
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-600"
            }`}
          />
        </button>
      ))}
      {value > 0 && (
        <span className="text-gray-400 text-sm ml-2">
          {["", "Dobët", "Mesatar", "Mirë", "Shumë Mirë", "Shkëlqyer"][value]}
        </span>
      )}
    </div>
  );
}

export default function TestimonialsSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    location: "",
    service: "",
    rating: 0,
    text: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) {
      setError("Ju lutem zgjidhni një vlerësim me yje.");
      return;
    }
    setError("");
    setLoading(true);
    // ============================================================
    // NDRYSHO KËTU: Shto logjikën reale të dërgimit
    // Shembull Formspree:
    // await fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // ============================================================
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="container-custom relative z-10 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-yellow-500" />
            Lër një Koment
          </div>
          <h2 className="section-title">
            Si qe <span className="text-yellow-500">Shërbimi?</span>
          </h2>
          <p className="section-subtitle">
            Ndani përvojën tuaj — komenti juaj na ndihmon të përmirësohemi.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-14 h-14 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-white font-black text-2xl mb-2">Faleminderit!</h3>
              <p className="text-gray-400 text-sm">
                Komenti juaj u dërgua me sukses. E vlerësojmë shumë.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Emri + Qyteti */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                    Emri <span className="text-yellow-500">*</span>
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
                  <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                    Qyteti
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="p.sh. Tiranë"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Shërbimi */}
              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Shërbimi i Përdorur
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Zgjidhni shërbimin (opsional)...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Vlerësimi me yje */}
              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-3 uppercase tracking-wide">
                  Vlerësimi <span className="text-yellow-500">*</span>
                </label>
                <StarPicker
                  value={form.rating}
                  onChange={(v) => setForm((prev) => ({ ...prev, rating: v }))}
                />
                {error && (
                  <p className="text-red-400 text-xs mt-2">{error}</p>
                )}
              </div>

              {/* Komenti */}
              <div>
                <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Komenti juaj <span className="text-yellow-500">*</span>
                </label>
                <textarea
                  name="text"
                  value={form.text}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Si qe shërbimi? A ishte ekipi profesional? Sa shpejt mbërriti?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-700 text-black font-black py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-100 shadow-lg shadow-yellow-500/20 text-base"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Duke dërguar...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Dërgo Komentin
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}