"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import Image from "next/image";

const filters = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];

export default function WomenPage() {
  const [active, setActive] = useState("All");
  const women = products.filter(p => p.category === "women");
  const filtered = active === "All" ? women : women.filter(p => p.subcategory === active.toLowerCase());

  return (
    <>
      <Header />
      <main>
        {/* Category Hero */}
        <div className="relative h-[320px] overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=85" alt="Women's Running" fill className="object-cover object-top" sizes="100vw" />
          <div className="absolute inset-0 bg-[#111827]/55 flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-white/60 text-xs tracking-widest uppercase font-light">Home / Women</p>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-2px] text-white">WOMEN&apos;S RUNNING</h1>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="px-8 sm:px-12 lg:px-20 py-8 flex flex-wrap items-center gap-3 border-b border-black/8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${active === f ? "bg-[#111827] text-white" : "border border-black/15 text-[#111827] hover:border-[#111827]"}`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto text-sm text-[#6b7280]">Sort: Featured ▾</div>
        </div>

        {/* Product Grid */}
        <div className="px-8 sm:px-12 lg:px-20 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[#6b7280] py-20">No products found in this category.</p>
          )}

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <button className="px-10 py-3.5 rounded-lg border border-[#111827] text-[#111827] text-sm font-medium hover:bg-[#111827] hover:text-white transition-all duration-300">
              Load More
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
