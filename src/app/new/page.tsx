import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import Image from "next/image";

export default function NewPage() {
  return (
    <>
      <Header />
      <main>
        <div className="relative h-[320px] overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1600&q=85" alt="New Arrivals" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#111827]/55 flex flex-col items-center justify-center gap-3">
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-2px] text-white">WHAT&apos;S NEW</h1>
          </div>
        </div>
        <div className="px-8 sm:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
