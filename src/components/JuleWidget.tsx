"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function JuleWidget() {
  const pathname = usePathname();

  useEffect(() => {
    const loadWidget = (id: string, src: string) => {
      const container = document.getElementById(id);
      if (!container) return;

      // Clear previous widget instance
      container.innerHTML = "";

      // Remove any existing script with same src to allow re-insertion
      const existing = document.querySelector(`script[data-jule-widget="${id}"]`);
      if (existing) existing.remove();

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-jule-widget", id);
      script.setAttribute("data-workspace-id", "72bf2a6d-633a-4b8c-b99c-9f5918f6ddea");
      script.setAttribute("data-container-selector", `#${id}`);
      script.setAttribute("data-debug", "true");

      if (id === "footer-widget-desktop") {
        script.setAttribute("data-project-id", "a32c9e71-8ff5-4ad1-bc41-e8aa2203448a");
      } else {
        script.setAttribute("data-project-id", "4a940d40-cc3c-4941-bc57-89c50c58819e");
      }

      document.body.appendChild(script);
    };

    // Small delay to ensure DOM is ready after navigation
    const timer = setTimeout(() => {
      loadWidget("footer-widget-desktop", "https://assets.jule.ai/preview/widget.js?w=desktop");
      loadWidget("footer-widget-mobile", "https://assets.jule.ai/preview/widget.js?w=mobile");
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
