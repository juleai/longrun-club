import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="relative overflow-hidden bg-[#F3F4F6] aspect-[3/4]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-[#111827] text-[#FAFAF8] text-[10px] font-medium px-2.5 py-1 rounded-md tracking-wide uppercase">
            {product.tag}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center">
          <span className="bg-[#FAFAF8] text-[#111827] text-xs font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Quick View
          </span>
        </div>
      </div>
      <div className="px-4 py-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-[#111827] text-sm">{product.name}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-yellow-400 text-xs">{"★".repeat(Math.floor(product.rating))}</span>
            <span className="text-[#6b7280] text-xs">{product.rating} ({product.reviews})</span>
          </div>
        </div>
        <p className="font-bold text-[#111827] text-base">${product.price}</p>
      </div>
    </Link>
  );
}
