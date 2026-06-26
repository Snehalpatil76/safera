import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safera Technologies | Women-First Technology Company",
  description:
    "Safera Technologies is a women-first technology company solving real-world challenges through artificial intelligence, travel, and trusted communities.",
  keywords: [
    "Safera Technologies",
    "Women-First Technology",
    "Cohop",
    "Maira",
    "Women Safety AI",
    "Verified Travel Community",
    "Women Community Platform",
  ],
  authors: [{ name: "Safera Technologies Pvt. Ltd." }],
  openGraph: {
    title: "Safera Technologies | Women-First Technology Company",
    description:
      "Safera Technologies is a women-first technology company building digital products like Cohop and Maira to empower women through travel, AI, and community.",
    url: "https://safera.tech",
    siteName: "Safera Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safera Technologies | Women-First Technology Company",
    description:
      "Safera Technologies is a women-first technology company building digital products like Cohop and Maira.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-dark-text pt-20">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
