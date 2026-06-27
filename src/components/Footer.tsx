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

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#08080d] border-t border-white/8 py-20 md:py-28 relative overflow-hidden">
      {/* Footer subtle lighting */}
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-primary-purple/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative z-10">
        {/* Company Info */}
        <div className="md:col-span-2 flex flex-col gap-6 max-w-sm">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary-purple to-secondary-purple shadow-[0_0_10px_rgba(139,92,246,0.3)]"></span>
            <span className="font-sans text-xl font-bold tracking-tight text-white">SAFERA</span>
          </Link>
          <p className="text-gray-text text-sm leading-relaxed">
            Safera Technologies is a women-first technology company building digital products powered by AI, travel, and community.
          </p>
          <div className="flex items-center gap-3 mt-2">
            {/* LinkedIn: Only include Maira LinkedIn page */}
            <a
              href="https://www.linkedin.com/company/maira-club/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/8 hover:border-primary-purple hover:bg-primary-purple/10 text-gray-text hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            {/* Instagram: Only include Maira Instagram page */}
            <a
              href="https://www.instagram.com/maira.india" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/8 hover:border-primary-purple hover:bg-primary-purple/10 text-gray-text hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-white text-xs tracking-widest uppercase">Navigation</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" className="text-gray-text hover:text-white text-sm transition-colors duration-200 link-underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-text hover:text-white text-sm transition-colors duration-200 link-underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-text hover:text-white text-sm transition-colors duration-200 link-underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-text hover:text-white text-sm transition-colors duration-200 link-underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-text hover:text-white text-sm transition-colors duration-200 link-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Products & Contact Links */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold text-white text-xs tracking-widest uppercase mb-4">Products</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://cohop.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-text hover:text-white text-sm transition-colors duration-200 link-underline"
                >
                  Cohop
                </a>
              </li>
              <li>
                <a
                  href="https://maira.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-text hover:text-white text-sm transition-colors duration-200 link-underline"
                >
                  Maira
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-xs tracking-widest uppercase mb-4">Contact</h3>
            <ul className="flex flex-col gap-3.5 text-sm text-gray-text">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-purple/80" />
                <a href="mailto:social@safera.tech" className="hover:text-white transition-colors">
                  social@safera.tech
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-purple/80" />
                <a href="tel:+919702492111" className="hover:text-white transition-colors">
                  +91 9702492111
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-purple/80" />
                <a href="tel:+916265279306" className="hover:text-white transition-colors">
                  +91 6265279306
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-purple/80 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-gray-text text-xs">
          © {new Date().getFullYear()} Safera Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
