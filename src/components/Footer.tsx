import Link from "next/link";
import { Phone, MapPin, Truck } from "lucide-react";

// ============================================================
// NDRYSHO KËTU: Numrin e telefonit, adresën, WhatsApp
// ============================================================
const PHONE_NUMBER = "+355 68 579 2000";
const PHONE_HREF = "tel:+355685792000";
const WHATSAPP_HREF = "https://wa.me/355685792000";
const BUSINESS_ADDRESS = "Tiranë, Shqipëri";

const navLinks = [
  { href: "/", label: "Kryefaqja" },
  { href: "/sherbimet", label: "Shërbimet" },
  { href: "/kontakt", label: "Kontakt" },
];

const areas = [
  "Tiranë","Durrës","Vlorë","Shkodër","Fier","Korçë","Elbasan","Berat","Lushnjë","Pogradec","Lezhë","Kukës","Gjirokastër","Sarandë","Kavajë",
  "Laç","Krujë","Burrel","Peshkopi","Librazhd","Kuçovë","Patos","Ballsh","Memaliaj","Tepelenë","Përmet","Delvinë","Himarë","Rrëshen","Milot","Mamurras","Fushë-Krujë","Shijak",
  "Peqin",
  "Gramsh",
  "Cërrik",
  "Belsh",
  "Roskovec",
  "Divjakë",
  "Orikum",
  "Bilisht",
  "Ersekë",
  "Maliq",
  "Pukë",
  "Bajram Curri",
  "Has",
  "Bulqizë",
  "Klos",
  "Poliçan",
  "Selenicë",
  "Vorë",
  "Kamëz"
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand + Kontakt */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-white font-black text-lg block leading-tight">
                  Karrotrec <span className="text-red-500">Keli</span>
                </span>
                <span className="text-yellow-500 text-xs font-bold tracking-widest">24/7</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Shërbim profesional karrotreci dhe transport automjetesh në të gjithë Shqipërinë.
            </p>
            <div className="space-y-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors group"
              >
                <div className="w-9 h-9 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm">{PHONE_NUMBER}</span>
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors group"
              >
                <div className="w-9 h-9 bg-green-700/20 rounded-lg flex items-center justify-center group-hover:bg-green-700/30 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm">WhatsApp</span>
              </a>
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">{BUSINESS_ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Navigimi */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Navigimi
              <span className="block w-6 h-0.5 bg-red-600 mt-2" />
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-red-600 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonat */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Zonat e Shërbimit
              <span className="block w-6 h-0.5 bg-red-600 mt-2" />
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {areas.map((area) => (
                <span
                  key={area}
                  className="bg-gray-900 text-gray-400 text-xs px-3 py-1.5 rounded-full border border-gray-800"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-400 text-xs font-bold mb-1">⚡ Mbërritje mesatare:</p>
              <p className="text-white text-sm font-semibold">15–30 minuta</p>
              <p className="text-gray-500 text-xs mt-0.5">*brenda qytetit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Karrotrec Keli 24/7. Të gjitha të drejtat të rezervuara.
          </p>
          <p className="text-gray-700 text-xs">Shërbim i licencuar — Shqipëri</p>
        </div>
      </div>
    </footer>
  );
}