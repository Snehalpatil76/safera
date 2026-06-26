import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-safera-border/60 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Company Info */}
        <div className="md:col-span-2 flex flex-col gap-6 max-w-sm">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary-purple to-secondary-purple"></span>
            <span className="font-sans text-xl font-bold tracking-tight text-dark-text">SAFERA</span>
          </Link>
          <p className="text-gray-text text-sm leading-relaxed">
            Safera Technologies is a women-first technology company building digital products powered by AI, travel, and community.
          </p>
          <div className="flex items-center gap-3 mt-2">
            {/* LinkedIn: Only include Maira LinkedIn page */}
            <a
              href="https://www.linkedin.com/company/maira-app" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-safera-border hover:border-primary-purple hover:bg-soft-lavender text-gray-text hover:text-primary-purple transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-dark-text text-sm tracking-wide uppercase">Navigation</h3>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link href="/" className="text-gray-text hover:text-primary-purple text-sm transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-text hover:text-primary-purple text-sm transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-text hover:text-primary-purple text-sm transition-colors duration-200">
                Products
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-text hover:text-primary-purple text-sm transition-colors duration-200">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-text hover:text-primary-purple text-sm transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Products & Contact Links */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-semibold text-dark-text text-sm tracking-wide uppercase mb-3">Products</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/products" className="text-gray-text hover:text-primary-purple text-sm transition-colors duration-200">
                  Cohop
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-text hover:text-primary-purple text-sm transition-colors duration-200">
                  Maira
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-dark-text text-sm tracking-wide uppercase mb-3">Contact</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-text">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-text/75" />
                <a href="mailto:social@cohop.in" className="hover:text-primary-purple transition-colors">
                  social@cohop.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-text/75" />
                <a href="tel:+919702492111" className="hover:text-primary-purple transition-colors">
                  +91 9702492111
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-text/75" />
                <a href="tel:+916265279306" className="hover:text-primary-purple transition-colors">
                  +91 6265279306
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-text/75 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-safera-border/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-text text-xs">
          © {new Date().getFullYear()} Safera Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
