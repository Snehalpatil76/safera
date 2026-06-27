import CareersClient from "./CareersClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Safera Technologies",
  description: "Join our team of designers, researchers, and engineers building technology designed around women's real lives. Explore opportunities at Safera.",
  alternates: {
    canonical: "https://safera.tech/careers",
  },
  openGraph: {
    title: "Careers | Safera Technologies",
    description: "Join our team of designers, researchers, and engineers building technology designed around women's real lives. Explore opportunities at Safera.",
    url: "https://safera.tech/careers",
    siteName: "Safera Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Safera Technologies",
    description: "Join our team of designers, researchers, and engineers building technology designed around women's real lives. Explore opportunities at Safera.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
