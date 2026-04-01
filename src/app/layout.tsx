import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Script from "next/script";

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
  description: "Built for the long run. Performance apparel engineered for athletes who demand excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          {children}
        </CartProvider>
        <Script
          src="https://assets.jule.ai/preview/widget.js?w=desktop"
          strategy="afterInteractive"
          data-workspace-id="72bf2a6d-633a-4b8c-b99c-9f5918f6ddea"
          data-project-id="a32c9e71-8ff5-4ad1-bc41-e8aa2203448a"
          data-container-selector="#footer-widget-desktop"
          data-debug="true"
        />
         <Script
          src="https://assets.jule.ai/preview/widget.js?w=mobile"
          strategy="afterInteractive"
          data-workspace-id="72bf2a6d-633a-4b8c-b99c-9f5918f6ddea"
          data-project-id="4a940d40-cc3c-4941-bc57-89c50c58819e"
          data-container-selector="#footer-widget-mobile"
          data-debug="true"
        />
      </body>
    </html>
  );
}
