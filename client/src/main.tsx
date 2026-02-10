import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { businessConfig } from "./config/business";

// Inject brand colors as CSS variables
if (businessConfig.primaryAccentColor) {
  document.documentElement.style.setProperty('--brand-primary', businessConfig.primaryAccentColor);
}
if (businessConfig.secondaryAccentColor) {
  document.documentElement.style.setProperty('--brand-cta', businessConfig.secondaryAccentColor);
}
if (businessConfig.brandColors) {
  const colors = businessConfig.brandColors;
  if (colors.primary) document.documentElement.style.setProperty('--brand-primary', colors.primary);
  if (colors.cta) document.documentElement.style.setProperty('--brand-cta', colors.cta);
  if (colors.accent) document.documentElement.style.setProperty('--brand-accent', colors.accent);
  if (colors.navBg) document.documentElement.style.setProperty('--brand-nav-bg', colors.navBg);
  if (colors.topBar) document.documentElement.style.setProperty('--brand-top-bar', colors.topBar);
}

// Register Service Worker for caching
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered:', registration);
    }).catch(error => {
      console.log('SW registration failed:', error);
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
