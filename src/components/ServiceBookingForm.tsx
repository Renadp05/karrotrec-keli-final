"use client";

import { useState } from "react";
import { Send, CheckCircle, Phone } from "lucide-react";

// ============================================================
// NDRYSHO KËTU: Numrin e telefonit
// ============================================================
const PHONE_HREF = "tel:+355685792000";
const PHONE_NUMBER = "+355 68 579 2000";

const serviceTypes = [
  "Transport automjeti (qytet tjetër)",
  "Transport makine për servis",
  "Transport makine sporti / luksoze",
  "Planifikim transport ndërqytetës",
  "Tjetër",
];

type FormData = {
  name: string;
  phone: string;
  service: string;
  from: string;
  to: string;
  date: string;
  notes: string;
};

const inputClass =
  "w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors text-sm";

export default function ServiceBookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    from: "",
    to: "",
    date: "",
    notes: "",
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
    // NDRYSHO KËTU: Shto logjikën e dërgimit (Formspree, email API, etj.)
    // Shembull Formspree: fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form) })
    // ============================================================
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center">
        <CheckCircle className="w-14 h-14 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-white font-black text-2xl mb-2">Kërkesa u Dërgua!</h3>
        <p className="text-gray-400 text-sm mb-6">
          Do t&apos;ju kontaktojmë sa më shpejt me detajet dhe çmimin.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm"
        >
          <Phone className="w-4 h-4" />
          Telefono nëse është urgjent — {PHONE_NUMBER}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Emri + Telefon */}
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
              Telefon <span className="text-yellow-500">*</span>
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

        {/* Lloji i shërbimit */}
        <div>
          <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            Lloji i Shërbimit <span className="text-yellow-500">*</span>
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="" disabled>Zgjidhni shërbimin...</option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Nga / Deri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
              Nga (vendndodhja) <span className="text-yellow-500">*</span>
            </label>
            <input
              type="text"
              name="from"
              value={form.from}
              onChange={handleChange}
              required
              placeholder="p.sh. Tiranë, Rruga Kombit"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
              Deri (destinacioni) <span className="text-yellow-500">*</span>
            </label>
            <input
              type="text"
              name="to"
              value={form.to}
              onChange={handleChange}
              required
              placeholder="p.sh. Durrës, Servisi Auto"
              className={inputClass}
            />
          </div>
        </div>

        {/* Data e dëshiruar */}
        <div>
          <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            Data e Dëshiruar
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>

        {/* Shënime shtesë */}
        <div>
          <label className="block text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            Shënime Shtesë
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Modeli i makinës, detaje të veçanta, orari preferuar..."
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
              Dërgo Kërkesën
            </>
          )}
        </button>

        <p className="text-gray-600 text-xs text-center">
          Për emergjencë të menjëhershme telefononi direkt:{" "}
          <a href={PHONE_HREF} className="text-red-400 font-bold hover:text-red-300">
            {PHONE_NUMBER}
          </a>
        </p>
      </form>
    </div>
  );
}