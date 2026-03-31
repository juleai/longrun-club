import Link from "next/link";
import { Logo } from "./Logo";

const shopLinks = ["Women's", "Men's", "New Arrivals", "Best Sellers", "Sale", "Gift Cards"];
const helpLinks = ["Order Status", "Shipping & Returns", "Size Guide", "Contact Us", "FAQ", "Product Care"];
const aboutLinks = ["Our Story", "Sustainability", "Athletes", "Careers", "Community", "Press"];

export function Footer() {
  return (
    <footer className="bg-[#111827] text-[#FAFAF8] relative overflow-hidden mt-auto">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-8 sm:px-12 pt-20 pb-8">
        {/* Newsletter */}
        <div className=" max-w-xl mx-auto mb-20 pb-16 border-b border-white/10">
          <h3 className="text-[2rem] text-center font-bold tracking-tight mb-3 bg-gradient-to-r from-[#FAFAF8] to-[#3B82F6] bg-clip-text text-transparent">
            Join The Movement
          </h3>
          <p className="text-[#9ca3af] font-light mb-8 text-sm">
            Get exclusive access to new drops, athlete stories, and performance tips.
          </p>
           <div className="embed-spot" id="footer-widget"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="w-10 h-10" />
              <span className="font-[var(--font-syne)] font-bold text-xl tracking-tight">LONG RUN</span>
            </Link>
            <p className="text-[#9ca3af] text-sm font-light leading-relaxed">
              Performance apparel designed for athletes who demand excellence. Built to last, engineered to perform.
            </p>
            <div className="flex gap-3 mt-1">
              {["IG", "TK", "YT", "ST"].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#9ca3af] text-xs font-medium hover:text-[#3B82F6] hover:-translate-y-1 transition-all duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[{ title: "Shop", links: shopLinks }, { title: "Help", links: helpLinks }, { title: "About", links: aboutLinks }].map(col => (
            <div key={col.title}>
              <h4 className="font-[var(--font-syne)] font-semibold text-sm tracking-wide mb-6">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-[#9ca3af] text-sm font-light hover:text-[#3B82F6] hover:translate-x-1 transition-all duration-300 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-[#9ca3af] text-xs font-light">
          <p>© 2026 Long Run. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map(l => (
              <a key={l} href="#" className="hover:text-[#3B82F6] transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex gap-2">
            {["VISA", "MC", "AMEX", "PYPL"].map(p => (
              <span key={p} className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[9px] tracking-wide">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
