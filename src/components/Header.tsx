"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "What's New", href: "/new" },
  { label: "Shop All", href: "/shop" },
  { label: "Community", href: "/community" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8] border-b border-black/8">
      {/* Announcement Bar */}
      <div className="bg-[#111827] text-[#FAFAF8] text-center py-2.5 px-4 text-xs tracking-widest uppercase font-light">
        Free Shipping On Orders Over $75{" "}
        <Link href="/women" className="text-[#3B82F6] font-medium ml-1 hover:opacity-70 transition-opacity">
          Shop Now →
        </Link>
      </div>

      {/* Main Header */}
      <div className="max-w-[1600px] mx-auto px-8 sm:px-12 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Logo className="w-10 h-10 drop-shadow-sm group-hover:-translate-y-0.5 transition-transform duration-300" />
          <span className="font-[var(--font-syne)] font-bold text-[1.35rem] tracking-tight text-[#111827]">
            LONG RUN
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#111827] hover:text-[#3B82F6] transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#3B82F6] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button className="hidden sm:flex p-2 rounded-full hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          {/* Account */}
          <button className="hidden sm:flex p-2 rounded-full hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          {/* Cart */}
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] transition-all duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#3B82F6] text-[#111827] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          {/* CTA */}
          <Link
            href="/women"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-[#111827] text-[#FAFAF8] text-sm font-medium hover:bg-[#111827]/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Shop Collection
          </Link>

          {/* Mobile menu */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-[#111827] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#111827] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#111827] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {open && (
        <div className="lg:hidden border-t border-black/8 bg-[#FAFAF8] px-8 py-6 flex flex-col gap-5">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-lg text-[#111827] font-medium" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/women" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#111827] text-[#FAFAF8] text-sm font-medium" onClick={() => setOpen(false)}>
            Shop Collection
          </Link>
        </div>
      )}
    </header>
  );
}
