import ProductsClient from "./ProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Safera Technologies",
  description: "Explore our ecosystem of digital products built for real impact, including Cohop Travel Community and Maira AI Wellness Support.",
  alternates: {
    canonical: "https://safera.tech/products",
  },
  openGraph: {
    title: "Our Products | Safera Technologies",
    description: "Explore our ecosystem of digital products built for real impact, including Cohop Travel Community and Maira AI Wellness Support.",
    url: "https://safera.tech/products",
    siteName: "Safera Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | Safera Technologies",
    description: "Explore our ecosystem of digital products built for real impact, including Cohop Travel Community and Maira AI Wellness Support.",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
