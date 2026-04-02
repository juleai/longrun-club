import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { JuleWidget } from "@/components/JuleWidget";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Long Run — Performance Running Apparel",
  description: "Built for the long run. Performance apparel engineered for athletes who demand excellence. Shop running shorts, tees, jackets, and accessories.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Long Run — Performance Running Apparel",
    description: "Performance apparel engineered for athletes who demand excellence. Every stitch, every fiber — designed to go the distance.",
    siteName: "Long Run",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Run — Performance Running Apparel",
    description: "Performance apparel engineered for athletes who demand excellence.",
  },
  keywords: ["running apparel", "performance wear", "athletic clothing", "running shorts", "running jackets", "Long Run"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          {children}
        </CartProvider>
        <JuleWidget />
      </body>
    </html>
  );
}
