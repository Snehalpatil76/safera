import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Safera Technologies",
  description: "Get in touch with Safera Technologies for partnerships, career collaboration, or product feedback.",
  alternates: {
    canonical: "https://safera.tech/contact",
  },
  openGraph: {
    title: "Contact Us | Safera Technologies",
    description: "Get in touch with Safera Technologies for partnerships, career collaboration, or product feedback.",
    url: "https://safera.tech/contact",
    siteName: "Safera Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Safera Technologies",
    description: "Get in touch with Safera Technologies for partnerships, career collaboration, or product feedback.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
