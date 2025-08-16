"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import VDMLogo from "@/public/logo/VDMLogo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-blue-50 sticky w-full top-0 z-50 flex">
      <div className="flex container mx-auto py-4 gap-5 max-w-[1240px] items-center">
        <Image src={VDMLogo} alt="VDM Urban Logo" height={42} />
        <nav className="flex items-center justify-center w-full">
          <ul className="hidden md:flex justify-center space-x-12 font-medium text-[1.1rem] bg-white py-2 px-16 rounded-3xl">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`hover:text-gray-700 transition px-1 py-2`}
                  >
                    {link.label}
                  </Link>
                  {/* Blue underline bar */}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transition-all duration-200 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button (kept unchanged) */}
          <button className="md:hidden" type="button">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">mobile menu</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
