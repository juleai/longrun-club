"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const accordionItems = ["Description", "Features & Materials", "Size & Fit", "Shipping & Returns"];

export function ProductDetailClient({ product, related }: { product: Product; related: Product[] }) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImg, setActiveImg] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>("Description");
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    if (!selectedSize) return;
    addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, color: selectedColor.name, size: selectedSize, image: product.images[0] });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="px-8 sm:px-12 lg:px-20 py-5 text-xs text-[#6b7280] font-light">
          <Link href="/" className="hover:text-[#3B82F6]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/women" className="hover:text-[#3B82F6]">Women</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111827]">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="px-8 sm:px-12 lg:px-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#F3F4F6] aspect-square">
              <Image
                src={product.images[activeImg] || product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? "border-[#111827]" : "border-transparent"}`}>
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 pt-2">
            <div>
              <h1 className="text-[2rem] font-bold tracking-tight text-[#111827] mb-2">{product.name}</h1>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm">{"★".repeat(Math.floor(product.rating))}</span>
                <span className="text-[#6b7280] text-sm">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-3xl font-bold text-[#111827]">${product.price}</p>

            {/* Color */}
            <div>
              <p className="text-sm font-medium text-[#111827] mb-3">Color — {selectedColor.name}</p>
              <div className="flex gap-2.5">
                {product.colors.map(c => (
                  <button key={c.name} onClick={() => setSelectedColor(c)} title={c.name}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor.name === c.name ? "border-[#3B82F6] scale-110" : "border-transparent hover:scale-105"}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-[#111827]">Size</p>
                <button className="text-xs text-[#3B82F6] hover:opacity-70 transition-opacity">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button key={s} onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${selectedSize === s ? "bg-[#111827] text-white border-[#111827]" : "border-black/20 text-[#111827] hover:border-[#111827]"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {!selectedSize && <p className="text-xs text-[#6b7280] mt-2">Please select a size</p>}
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                added ? "bg-green-600 text-white" :
                selectedSize ? "bg-[#111827] text-white hover:-translate-y-0.5 hover:shadow-xl" :
                "bg-[#111827]/40 text-white/60 cursor-not-allowed"
              }`}
            >
              {added ? "✓ Added to Cart!" : `Add to Cart — $${product.price}`}
            </button>

            <button className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors text-center">
              ♡ Add to Wishlist
            </button>

            {/* Accordion */}
            <div className="border-t border-black/10 mt-2">
              {accordionItems.map((item, i) => (
                <div key={item} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item ? null : item)}
                    className="w-full flex items-center justify-between py-4 text-sm font-medium text-[#111827] hover:text-[#3B82F6] transition-colors"
                  >
                    {item}
                    <span className={`text-lg transition-transform duration-200 ${openAccordion === item ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openAccordion === item && (
                    <div className="pb-4 text-sm text-[#6b7280] font-light leading-relaxed">
                      {i === 0 && product.description}
                      {i === 1 && <ul className="flex flex-col gap-1">{product.features.map(f => <li key={f}>• {f}</li>)}</ul>}
                      {i === 2 && "True to size. We recommend sizing up if between sizes. Model is 5'9\" wearing size S."}
                      {i === 3 && "Free standard shipping on orders over $75. Free returns within 30 days."}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dark Feature Band */}
        <section className="bg-[#111827] py-16 px-8 sm:px-12 lg:px-20">
          <h2 className="text-[2rem] font-bold tracking-[-1.5px] text-white text-center mb-10">WHY ATHLETES LOVE IT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto text-center">
            {[{ title: "4-Way Stretch", desc: "Moves with you through every stride" }, { title: "Quick-Dry Fabric", desc: "Wicks moisture in seconds" }, { title: "Reflective Details", desc: "Stay visible in low light" }].map(f => (
              <div key={f.title}>
                <p className="text-white font-semibold mb-1">{f.title}</p>
                <p className="text-[#6b7280] text-sm font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="px-8 sm:px-12 lg:px-20 py-20">
          <h2 className="text-2xl font-bold tracking-[-1px] mb-8">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
