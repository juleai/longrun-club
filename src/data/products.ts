export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: "women" | "men";
  subcategory: "tops" | "bottoms" | "outerwear" | "accessories";
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[];
  tag?: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "velocity-running-short",
    name: "Velocity Running Short",
    price: 68,
    category: "women",
    subcategory: "bottoms",
    description: "Engineered for speed and comfort. The Velocity Short features 4-way stretch fabric with a secure waistband and built-in liner.",
    features: ["4-Way Stretch", "Moisture-Wicking", "Built-in Liner", "Reflective Details", "Quick-Dry"],
    rating: 4.8,
    reviews: 124,
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Sage", hex: "#6b8f6b" },
      { name: "Coral", hex: "#e8806a" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/velocity-running-short.png",
    ],
    tag: "Best Seller",
  },
  {
    id: "2",
    slug: "aeroflow-performance-tee",
    name: "AeroFlow Performance Tee",
    price: 55,
    category: "women",
    subcategory: "tops",
    description: "Ultra-lightweight tee with AeroFlow technology for maximum breathability during high-intensity runs.",
    features: ["AeroFlow Ventilation", "Moisture-Wicking", "Anti-Odor", "UPF 30+"],
    rating: 4.6,
    reviews: 89,
    colors: [
      { name: "White", hex: "#f9fafb" },
      { name: "Black", hex: "#111827" },
      { name: "Sage", hex: "#6b8f6b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/aeroflow-performance-tee.png",
    ],
  },
  {
    id: "3",
    slug: "marathon-jacket",
    name: "Marathon Jacket",
    price: 125,
    category: "women",
    subcategory: "outerwear",
    description: "Packable, wind-resistant jacket with reflective details. Weighs just 120g — you'll forget you're wearing it.",
    features: ["Windproof", "Water-Resistant", "Packable", "Reflective Details", "Ultralight 120g"],
    rating: 4.9,
    reviews: 67,
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "Sage", hex: "#6b8f6b" },
      { name: "Cobalt", hex: "#3B82F6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/marathon-jacket.png",
    ],
    tag: "New",
  },
  {
    id: "4",
    slug: "stride-running-tank",
    name: "Stride Running Tank",
    price: 48,
    category: "women",
    subcategory: "tops",
    description: "Racerback tank with a relaxed fit and built-in shelf bra for everyday training.",
    features: ["Built-in Shelf Bra", "Moisture-Wicking", "Relaxed Fit"],
    rating: 4.5,
    reviews: 112,
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "Coral", hex: "#e8806a" },
      { name: "White", hex: "#f9fafb" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/stride-running-tank.png",
    ],
  },
  {
    id: "5",
    slug: "endurafit-tights",
    name: "EnduraFit Tights",
    price: 85,
    category: "women",
    subcategory: "bottoms",
    description: "High-waist compression tights with EnduraFit technology for mile after mile of support.",
    features: ["High-Waist", "Compression Fit", "Moisture-Wicking", "Side Pocket"],
    rating: 4.7,
    reviews: 203,
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Sage", hex: "#6b8f6b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/endurafit-tights.png",
    ],
    tag: "Best Seller",
  },
  {
    id: "6",
    slug: "tempo-sports-bra",
    name: "Tempo Sports Bra",
    price: 52,
    category: "women",
    subcategory: "tops",
    description: "Medium-support bra with seamless construction and moisture-wicking fabric.",
    features: ["Medium Support", "Seamless", "Moisture-Wicking", "Removable Pads"],
    rating: 4.4,
    reviews: 78,
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "Coral", hex: "#e8806a" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/tempo-sports-bra.png",
    ],
  },
  {
    id: "7",
    slug: "trailblaze-hoodie",
    name: "TrailBlaze Hoodie",
    price: 95,
    category: "women",
    subcategory: "outerwear",
    description: "Midlayer hoodie perfect for warming up and cooling down. Breathable, cozy, trail-ready.",
    features: ["Fleece-Lined", "Zippered Pocket", "Thumbholes", "Relaxed Fit"],
    rating: 4.6,
    reviews: 55,
    colors: [
      { name: "Charcoal", hex: "#374151" },
      { name: "Sage", hex: "#6b8f6b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/images/products/trailblaze-hoodie.png",
    ],
  },
  {
    id: "8",
    slug: "pacesetter-shorts",
    name: "PaceSetter Shorts",
    price: 62,
    category: "men",
    subcategory: "bottoms",
    description: "Lightweight split-hem shorts engineered for speed. Minimal construction, maximum range of motion.",
    features: ["Split-Hem", "Lightweight", "Moisture-Wicking", "Zip Pocket"],
    rating: 4.3,
    reviews: 91,
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Grey", hex: "#6b7280" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/products/pacesetter-shorts.png",
    ],
  },
  {
    id: "9",
    slug: "ultraglide-vest",
    name: "UltraGlide Vest",
    price: 78,
    category: "men",
    subcategory: "outerwear",
    description: "Streamlined running vest with front storage and a minimal profile to reduce drag.",
    features: ["Front Storage", "Windproof Front", "Breathable Back", "Reflective"],
    rating: 4.8,
    reviews: 44,
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "Cobalt", hex: "#3B82F6" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/images/products/ultraglide-vest.png",
    ],
    tag: "New",
  },
  {
    id: "10",
    slug: "pacesetter-cap",
    name: "PaceSetter Cap",
    price: 32,
    category: "men",
    subcategory: "accessories",
    description: "Technical running cap with curved brim and sweat-wicking sweatband.",
    features: ["Sweat-Wicking Band", "UPF 50+", "Adjustable Fit"],
    rating: 4.5,
    reviews: 156,
    colors: [
      { name: "Black", hex: "#111827" },
      { name: "White", hex: "#f9fafb" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    sizes: ["One Size"],
    images: [
      "/images/products/pacesetter-cap.png",
    ],
  },
];

export const getFeaturedProducts = () => products.slice(0, 3);
export const getNewArrivals = () => products.slice(6, 10);
export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getProductsByCategory = (cat: string) => products.filter(p => p.category === cat);
export const getRelatedProducts = (id: string, limit = 4) => products.filter(p => p.id !== id).slice(0, limit);
