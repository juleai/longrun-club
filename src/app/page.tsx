"use client";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";

const features = [
  { icon: "💧", title: "Moisture-Wicking", desc: "Advanced fabric technology that keeps you dry through every mile." },
  { icon: "🪶", title: "Ultralight", desc: "Engineered to feel weightless so you can focus on your pace." },
  { icon: "♻️", title: "Sustainable", desc: "Made with recycled fibers. Performance that's kind to the planet." },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="flex flex-col lg:flex-row min-h-[calc(100vh-108px)]">
          <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-16 lg:py-0">
            <p className="text-[#3B82F6] text-[11px] font-medium tracking-[3px] uppercase mb-6">
              Spring 2026 Collection
            </p>
            <h1 className="text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-3px] text-[#111827] mb-8">
              BUILT<br />FOR THE<br />LONG RUN
            </h1>
            <p className="text-[#6b7280] text-lg font-light leading-relaxed mb-10 max-w-md">
              Performance apparel engineered for athletes who demand excellence.
              Every stitch, every fiber — designed to go the distance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/women" className="px-8 py-4 rounded-lg bg-[#111827] text-[#FAFAF8] font-medium text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Shop Women
              </Link>
              <Link href="/men" className="px-8 py-4 rounded-lg border border-[#111827] text-[#111827] font-medium text-sm hover:bg-[#111827] hover:text-[#FAFAF8] transition-all duration-300">
                Shop Men
              </Link>
            </div>
          </div>
          <div className="lg:flex-1 min-h-[500px] lg:min-h-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1200&q=85"
              alt="Runner in action"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="px-8 sm:px-12 lg:px-20 py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-[-1.5px]">FEATURED</h2>
            <Link href="/women" className="text-sm text-[#3B82F6] font-medium hover:opacity-70 transition-opacity">View All →</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Large card */}
            <Link href={`/products/${featured[0].slug}`} className="group relative rounded-2xl overflow-hidden bg-[#F3F4F6] aspect-[4/5] lg:row-span-2">
              <Image src={featured[0].images[0]} alt={featured[0].name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-semibold text-xl">{featured[0].name}</p>
                  <p className="text-white/70 text-sm">{featured[0].features.slice(0, 2).join(" · ")}</p>
                </div>
                <p className="text-white font-bold text-xl">${featured[0].price}</p>
              </div>
            </Link>
            {/* Smaller cards */}
            {featured.slice(1).map(p => (
              <Link key={p.id} href={`/products/${p.slug}`} className="group relative rounded-2xl overflow-hidden bg-[#F3F4F6] aspect-[3/2]">
                <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-white font-semibold">{p.name}</p>
                    <p className="text-white/70 text-xs">{p.features.slice(0, 2).join(" · ")}</p>
                  </div>
                  <p className="text-white font-bold text-lg">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* DARK FEATURES BAND */}
        <section className="bg-[#111827] py-20 px-8 sm:px-12 lg:px-20">
          <h2 className="text-[2.5rem] font-bold tracking-[-2px] text-white text-center mb-14">
            ENGINEERED TO PERFORM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {features.map(f => (
              <div key={f.title} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#3B82F6]/15 flex items-center justify-center text-2xl">{f.icon}</div>
                <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                <p className="text-[#6b7280] text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LIFESTYLE BAND */}
        <section className="relative h-[480px] overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=85" alt="Join the community" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#111827]/55 flex flex-col items-center justify-center gap-6 text-center px-6">
            <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-2px] text-white">JOIN THE COMMUNITY</h2>
            <p className="text-white/80 font-light text-lg max-w-sm">Connect with thousands of runners worldwide</p>
            <Link href="/community" className="px-8 py-4 rounded-lg bg-white text-[#111827] font-medium text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
              Explore Community
            </Link>
          </div>
        </section>

        {/* NEW ARRIVALS */}
        <section className="px-8 sm:px-12 lg:px-20 py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold tracking-[-1.5px]">NEW ARRIVALS</h2>
            <Link href="/new" className="text-sm text-[#3B82F6] font-medium hover:opacity-70 transition-opacity">View All →</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="px-8 sm:px-12 lg:px-20 py-20 text-center border-t border-black/8">
          <h2 className="text-[2.2rem] font-bold tracking-[-1.5px] mb-3">JOIN THE MOVEMENT</h2>
          <p className="text-[#6b7280] font-light mb-8 max-w-sm mx-auto text-sm">
            Get exclusive access to new drops, athlete stories, and performance tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3.5 rounded-lg border border-black/15 bg-white text-[#111827] placeholder-[#6b7280] text-sm outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/15 transition-all" />
            <button type="submit" className="px-6 py-3.5 rounded-lg bg-[#3B82F6] text-white font-medium text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
