// Central site configuration. Change these once and they propagate everywhere.
// Before deploying: set SITE_URL to your real domain (used for canonicals, sitemap, OG).

export const site = {
  name: "BalkonRechner",
  // No trailing slash. Update to your real domain before launch.
  url: "https://balkonrechner.online",
  title: "Balkonkraftwerk-Rechner 2026 – Ertrag, Ersparnis & Amortisation",
  description:
    "Kostenloser Balkonkraftwerk-Rechner: Berechne Ertrag, jährliche Stromersparnis und Amortisation deiner Mini-PV-Anlage – mit regionalen Ertragsdaten und den aktuellen Regeln für 2026.",
  locale: "de_DE",
  author: "BalkonRechner Redaktion",
  // Used in the Impressum. Replace with your real details before launch.
  operator: {
    name: "Max Mustermann",
    street: "Musterstraße 1",
    city: "04109 Leipzig",
    email: "kontakt@balkonrechner.de",
  },
};

export type Site = typeof site;
