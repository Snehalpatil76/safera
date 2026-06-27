import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safera Technologies | Women-First Technology Company",
  description: "Safera Technologies is a women-first technology company building digital products like Cohop and Maira designed around women's real lives.",
  alternates: {
    canonical: "https://safera.tech",
  },
  openGraph: {
    title: "Safera Technologies | Women-First Technology Company",
    description: "Safera Technologies is a women-first technology company building digital products like Cohop and Maira designed around women's real lives.",
    url: "https://safera.tech",
    siteName: "Safera Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safera Technologies | Women-First Technology Company",
    description: "Safera Technologies is a women-first technology company building digital products like Cohop and Maira designed around women's real lives.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
