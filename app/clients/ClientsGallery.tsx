"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BackgroundEffect from "../components/BackgroundEffect";
import { X, Star, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Client data ─────────────────────────────────────── */
interface Client {
  name: string;
  logo: string;       // path inside /public
  ext: "png" | "svg";
  bg?: string;        // optional card background colour (for coloured logos on white)
}

const CLIENTS: Client[] = [
  { name: "Vama Sundari Investments (Delhi) Private Limited", logo: "", ext: "png" },
  { name: "HYZERO",          logo: "/assets/clients/hyzero.png",  ext: "png" },
  { name: "Airtel",          logo: "/assets/clients/airtel.png",  ext: "png" },
  { name: "HCL Concerts",   logo: "/assets/clients/hcl.png",     ext: "png" },
  { name: "Embassy Services",logo: "",                             ext: "png" },
];

/* duplicate for seamless infinite scroll */
const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

/* ─── Gallery data ────────────────────────────────────── */
interface GalleryImage {
  id: string;
  src: string;
  category: "concerts" | "corporate" | "branding";
  title: string;
  desc: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { id: "c1",  src: "/assets/gallery/concert-1.jpg",  category: "concerts",     title: "HCL Concert Series",         desc: "Stage production & artist management." },
  { id: "c2",  src: "/assets/gallery/concert-2.jpg",  category: "concerts",     title: "Live Concert Rigging",        desc: "State-of-the-art stage setup & audio engineering." },
  { id: "c3",  src: "/assets/gallery/concert-3.jpg",  category: "concerts",     title: "Stadium Performance",         desc: "High-end visual & lighting design." },
  { id: "c4",  src: "/assets/gallery/concert-4.jpg",  category: "concerts",     title: "Outdoor Music Festival",      desc: "Crowd control, security and backstage management." },
  { id: "c5",  src: "/assets/gallery/concert-5.jpg",  category: "concerts",     title: "Indoor Concert Visuals",      desc: "Immersive LED screen integrations." },
  { id: "c6",  src: "/assets/gallery/concert-6.jpg",  category: "concerts",     title: "Live Band Show",              desc: "High fidelity audio tuning & backline support." },
  { id: "a1",  src: "/assets/gallery/airtel-1.jpg",   category: "corporate",    title: "Airtel Corporate Event",      desc: "Corporate venue setup & branding." },
  { id: "a2",  src: "/assets/gallery/airtel-2.jpg",   category: "corporate",    title: "Airtel Corporate Gathering",  desc: "Corporate stage & experience booth." },
  { id: "a3",  src: "/assets/gallery/airtel-3.jpg",   category: "corporate",    title: "Airtel Executive Meet",       desc: "Corporate meeting & digital presentation." },
  { id: "b1",  src: "/assets/services/branding-kiosk.jpg",  category: "branding",     title: "HCL Mobile Charging Station", desc: "Custom brand kiosk display & charging booth." },
  { id: "b2",  src: "/assets/services/branding-badges.jpg", category: "branding",     title: "HCL Corporate Merchandise",  desc: "Custom anniversary branding & badges." },
];

/* ─── Component ───────────────────────────────────────── */
export default function ClientsGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredImages = GALLERY_IMAGES.filter((img) =>
    activeFilter === "all" ? true : img.category === activeFilter
  );

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > -1) {
      const prevIdx = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIdx]);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > -1) {
      const nextIdx = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIdx]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, filteredImages]);

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#18181b] relative overflow-hidden pt-28 pb-16">
      <BackgroundEffect />

      <div className="relative z-10 space-y-20">

        {/* ── Hero Header ─────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-700 tracking-widest uppercase">
              <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
              Our Clients
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500">
              Trusted by India's&nbsp;Best
            </h1>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              From Fortune-500 giants to India's leading PSUs — we've delivered
              extraordinary events for brands that demand nothing less.
            </p>
          </motion.div>
        </div>

        {/* ── Infinite Logo Carousel ───────────────────── */}
        <div className="w-full overflow-hidden select-none">
          {/* Section label */}
          <p className="text-center text-[11px] uppercase font-bold tracking-[0.2em] text-zinc-400 mb-6">
            Our Esteemed Partners &amp; Clients
          </p>

          {/* Fade edges */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

            {/* Scrolling track */}
            <div
              className="flex gap-5"
              style={{
                animation: isPaused ? "none" : "marquee 28s linear infinite",
                width: "max-content",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {MARQUEE_ITEMS.map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 group"
                  style={{ width: 200, height: 100 }}
                >
                  {client.logo ? (
                    <div className="relative w-[140px] h-[60px]">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain transition-all duration-300"
                        sizes="160px"
                        unoptimized={client.ext === "svg"}
                      />
                    </div>
                  ) : (
                    /* Text fallback for Vama Sundari */
                    <div className="px-4 text-center">
                      <span className="text-xs font-bold text-zinc-600 tracking-wide leading-tight group-hover:text-brand-orange transition-colors">
                        {client.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Gallery Grid ─────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-zinc-400">Portfolio</p>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">Event Gallery</h2>
            <p className="text-zinc-500 text-base">World-class event production across India.</p>
          </div>

          {/* Filter Nav */}
          <div className="flex justify-center flex-wrap gap-2 border-b border-zinc-100 pb-4">
            {["all", "concerts", "corporate", "branding"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-brand-orange border-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                {cat === "all"
                  ? "Show All"
                  : cat === "branding"
                  ? "Branding Solutions"
                  : cat === "concerts"
                  ? "Live Concerts"
                  : "Corporate Events"}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-100 group cursor-pointer shadow-sm bg-zinc-50 hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Arrow */}
            {filteredImages.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Arrow */}
            {filteredImages.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] flex items-center justify-center"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
