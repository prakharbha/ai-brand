"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

const SERVICES_LIST = [
  { title: "Corporate Events", id: "corporate-events" },
  { title: "Live Concerts", id: "live-concerts" },
  { title: "Branding Solutions", id: "branding-solutions" },
  { title: "Product Launches", id: "product-launches" },
  { title: "Brand Activations", id: "brand-activations" },
  { title: "Exhibition & Trade Shows", id: "exhibition-trade-shows" },
  { title: "MICE Services", id: "mice-services" },
  { title: "Video Content Development", id: "video-content" },
];

const CONTACT_EMAIL = "info@aibrandexhibit.com";
const CONTACT_PHONE = "+91 98914 98148";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
    setMobileServicesOpen(true);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-zinc-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Image
                  src="/logo-ai-brand-exhibit.png"
                  alt="AI Brand Exhibit Logo"
                  width={240}
                  height={130}
                  className="h-20 w-auto object-contain max-w-[90%]"
                  priority
                  sizes="240px"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
               <div className="ml-10 flex items-center space-x-8">
                 {NAV_ITEMS.filter((item) => item.name !== "Contact Us").map((item) => {
                  if (item.name === "Services") {
                    return (
                      <div
                        key={item.name}
                        className="relative py-6"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                      >
                        <div className="inline-flex items-center gap-1">
                          <Link
                            href="/services"
                            className={`text-base font-semibold tracking-wide transition-colors duration-200 hover:text-zinc-950 ${
                              pathname.startsWith("/services") ? "text-zinc-950 font-bold" : "text-zinc-500"
                            }`}
                          >
                            Services
                          </Link>
                          <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="p-0.5 rounded focus:outline-none cursor-pointer"
                            aria-label="Toggle services dropdown"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                showDropdown ? "rotate-180 text-brand-orange" : "text-zinc-400"
                              }`}
                            />
                          </button>
                        </div>

                        <div
                          className={`absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg border border-zinc-150 rounded-2xl shadow-xl p-2.5 z-50 transition-all duration-200 origin-top-left ${
                            showDropdown
                              ? "opacity-100 translate-y-0 scale-100 visible"
                              : "opacity-0 translate-y-2 scale-95 invisible pointer-events-none"
                          }`}
                        >
                          <div className="space-y-0.5">
                            {SERVICES_LIST.map((srv) => {
                              const isSubActive = pathname === `/services/${srv.id}`;
                              return (
                                <Link
                                  key={srv.id}
                                  href={`/services/${srv.id}`}
                                  onClick={() => setShowDropdown(false)}
                                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                                    isSubActive
                                      ? "text-brand-orange bg-zinc-50"
                                      : "text-zinc-650 hover:text-zinc-950 hover:bg-zinc-50"
                                  }`}
                                >
                                  {srv.title}
                                </Link>
                              );
                            })}
                            <div className="border-t border-zinc-100 mt-2 pt-2">
                              <Link
                                href="/services"
                                onClick={() => setShowDropdown(false)}
                                className="block px-4 py-2.5 rounded-xl text-sm font-bold text-center text-white bg-gradient-to-r from-brand-orange to-brand-purple hover:opacity-95 shadow-sm transition-all"
                              >
                                All Services Overview
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative text-base font-semibold tracking-wide transition-colors duration-200 hover:text-zinc-950 py-6 block ${
                        isActive ? "text-zinc-950 font-bold" : "text-zinc-500"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span className="absolute bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange to-brand-purple rounded-full" />
                      )}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full text-base font-bold uppercase tracking-wider transition-all duration-300 ${
                    pathname === "/contact"
                      ? "bg-zinc-950 text-white shadow-md hover:bg-zinc-900"
                      : "bg-gradient-to-r from-brand-orange to-brand-purple text-white shadow-sm hover:shadow-md hover:opacity-95"
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-md text-zinc-600 hover:text-zinc-950 focus:outline-none"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white flex flex-col md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Top Bar with Logo + Close */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-zinc-100">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo-ai-brand-exhibit.png"
              alt="AI Brand Exhibit"
              width={180}
              height={98}
              className="h-16 w-auto object-contain"
              sizes="180px"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2.5 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-5 pt-6 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            if (item.name === "Services") {
              const isAnySubActive = pathname.startsWith("/services");
              return (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center justify-between w-full px-4 py-4 rounded-2xl text-lg font-semibold transition-colors ${
                      isAnySubActive
                        ? "text-zinc-950 bg-zinc-50"
                        : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50"
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180 text-brand-orange" : "text-zinc-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 origin-top ${
                      mobileServicesOpen
                        ? "max-h-[500px] opacity-100 visible"
                        : "max-h-0 opacity-0 invisible pointer-events-none"
                    }`}
                  >
                    <div className="pl-4 pt-1 pb-2 space-y-0.5 border-l-2 border-brand-orange/30 ml-4">
                      {SERVICES_LIST.map((srv) => {
                        const isSubActive = pathname === `/services/${srv.id}`;
                        return (
                          <Link
                            key={srv.id}
                            href={`/services/${srv.id}`}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                              isSubActive
                                ? "text-brand-orange bg-orange-50"
                                : "text-zinc-650 hover:text-zinc-950 hover:bg-zinc-50"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50 shrink-0" />
                            {srv.title}
                          </Link>
                        );
                      })}
                      <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-base font-bold text-brand-purple hover:bg-purple-50 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                        All Services Overview
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 rounded-2xl text-lg font-semibold transition-colors ${
                    isActive
                      ? "text-zinc-950 bg-zinc-50"
                      : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
