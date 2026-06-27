import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Safera Technologies",
  description: "Discover the mission, vision, pillars, and co-founders of Safera Technologies—shaping the future of women-first technology.",
  alternates: {
    canonical: "https://safera.tech/about",
  },
  openGraph: {
    title: "About Us | Safera Technologies",
    description: "Discover the mission, vision, pillars, and co-founders of Safera Technologies—shaping the future of women-first technology.",
    url: "https://safera.tech/about",
    siteName: "Safera Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Safera Technologies",
    description: "Discover the mission, vision, pillars, and co-founders of Safera Technologies—shaping the future of women-first technology.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
