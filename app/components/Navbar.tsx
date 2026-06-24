"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
    setMobileServicesOpen(false);
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
                {NAV_ITEMS.map((item) => {
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

                        <AnimatePresence>
                          {showDropdown && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.98 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg border border-zinc-150 rounded-2xl shadow-xl p-2.5 z-50"
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
                            </motion.div>
                          )}
                        </AnimatePresence>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[60] bg-white flex flex-col md:hidden"
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
              {NAV_ITEMS.map((item, idx) => {
                if (item.name === "Services") {
                  const isAnySubActive = pathname.startsWith("/services");
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 + 0.1 }}
                      className="space-y-1"
                    >
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

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 + 0.1 }}
                  >
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
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA + Contact Info */}
            <div className="px-5 pb-8 pt-4 border-t border-zinc-100 space-y-4">
              {/* Contact Us CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-4 rounded-2xl text-base font-bold uppercase tracking-wider bg-gradient-to-r from-brand-orange to-brand-purple text-white shadow-lg shadow-brand-orange/20 hover:opacity-95 transition-opacity"
              >
                Contact Us
              </Link>

              {/* Contact Details */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-brand-orange/30 transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-brand-orange/10 text-brand-orange shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Call</p>
                    <p className="text-xs font-semibold text-zinc-800">{CONTACT_PHONE}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-brand-orange/30 transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-brand-purple/10 text-brand-purple shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Email</p>
                    <p className="text-xs font-semibold text-zinc-800">{CONTACT_EMAIL}</p>
                  </div>
                </a>
              </div>

              <p className="text-center text-[11px] text-zinc-400">
                © {new Date().getFullYear()} AI Brand Exhibit (OPC) Pvt. Ltd.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
