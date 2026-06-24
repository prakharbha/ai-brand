"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BackgroundEffect from "../components/BackgroundEffect";
import { X, ZoomIn, Info, Star } from "lucide-react";

/* ─── Client data ─────────────────────────────────────── */
interface Client {
  name: string;
  logo: string;       // path inside /public
  ext: "png" | "svg";
  bg?: string;        // optional card background colour (for coloured logos on white)
}

const CLIENTS: Client[] = [
  { name: "Airtel",              logo: "/assets/clients/airtel.png",       ext: "png" },
  { name: "HCL Tech",           logo: "/assets/clients/hcl.png",          ext: "png" },
  { name: "HYZERO",             logo: "/assets/clients/hyzero.png",       ext: "png" },
  { name: "LG Electronics",     logo: "/assets/clients/lg.svg",           ext: "svg" },
  { name: "Alstom Transport",   logo: "/assets/clients/alstom.svg",       ext: "svg" },
  { name: "PI Industries",      logo: "/assets/clients/pi-industries.png",ext: "png" },
  { name: "Oil India",          logo: "/assets/clients/oil-india.png",    ext: "png" },
  { name: "Hero MotoCorp",      logo: "/assets/clients/hero.svg",         ext: "svg" },
  { name: "Vama Sundari",       logo: "",                                 ext: "png" }, // text fallback
];

/* duplicate for seamless infinite scroll */
const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

/* ─── Gallery data ────────────────────────────────────── */
interface GalleryImage {
  id: string;
  src: string;
  category: "concerts" | "corporate" | "activations";
  title: string;
  desc: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { id: "c1",  src: "/assets/gallery/concert-1.jpg",  category: "concerts",     title: "HCL Concert Series",         desc: "Stage production & artist management." },
  { id: "c2",  src: "/assets/gallery/concert-2.jpg",  category: "concerts",     title: "Live Concert Rigging",        desc: "State-of-the-art stage setup & audio engineering." },
  { id: "a1",  src: "/assets/gallery/airtel-1.jpg",   category: "activations",  title: "Airtel Brand Activation",     desc: "Onground experiential launch." },
  { id: "c3",  src: "/assets/gallery/concert-3.jpg",  category: "concerts",     title: "Stadium Performance",         desc: "High-end visual & lighting design." },
  { id: "a2",  src: "/assets/gallery/airtel-2.jpg",   category: "activations",  title: "Airtel Marketing Campaign",   desc: "Interactive customer engagement setup." },
  { id: "co1", src: "/assets/gallery/img-5349.jpg",   category: "corporate",    title: "Corporate Awards Night",      desc: "Premium corporate design and event production." },
  { id: "c4",  src: "/assets/gallery/concert-4.jpg",  category: "concerts",     title: "Outdoor Music Festival",      desc: "Crowd control, security and backstage management." },
  { id: "a3",  src: "/assets/gallery/airtel-3.jpg",   category: "activations",  title: "Airtel Network Launch",       desc: "Product activation with digital displays." },
  { id: "c5",  src: "/assets/gallery/concert-5.jpg",  category: "concerts",     title: "Indoor Concert Visuals",      desc: "Immersive LED screen integrations." },
  { id: "co2", src: "/assets/gallery/image.jpg",      category: "corporate",    title: "Executive Annual Meet",       desc: "Conventions space branding & digital setup." },
  { id: "c6",  src: "/assets/gallery/concert-6.jpg",  category: "concerts",     title: "Live Band Show",              desc: "High fidelity audio tuning & backline support." },
];

const STATS = [
  { value: "500+", label: "Events Delivered" },
  { value: "8+",   label: "Marquee Clients" },
  { value: "15+",  label: "Years Experience" },
  { value: "PAN",  label: "India Presence" },
];

/* ─── Component ───────────────────────────────────────── */
export default function ClientsGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredImages = GALLERY_IMAGES.filter((img) =>
    activeFilter === "all" ? true : img.category === activeFilter
  );

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

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass-panel rounded-2xl p-5 text-center border border-zinc-100 hover:border-brand-orange/30 transition-colors"
              >
                <p className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-brand-purple">
                  {s.value}
                </p>
                <p className="text-xs text-zinc-500 font-semibold tracking-wider uppercase mt-1">
                  {s.label}
                </p>
              </div>
            ))}
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
            {["all", "concerts", "corporate", "activations"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-brand-orange border-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                {cat === "all" ? "Show All" : cat}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest">
                      {image.category === "concerts" ? "Live Concert" : image.category === "corporate" ? "Corporate Event" : "Brand Activation"}
                    </span>
                    <h3 className="text-white text-base font-bold tracking-wide mt-1">{image.title}</h3>
                    <p className="text-zinc-300 text-xs font-light mt-1 flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5 text-brand-orange" />
                      View Details
                    </p>
                  </div>
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-200"
            >
              <div className="relative aspect-video w-full bg-black">
                <Image src={selectedImage.src} alt={selectedImage.title} fill className="object-contain" sizes="100vw" priority />
              </div>
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-zinc-100">
                <div className="space-y-1">
                  <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest">
                    {selectedImage.category === "concerts" ? "Live Concert" : selectedImage.category === "corporate" ? "Corporate Event" : "Brand Activation"}
                  </span>
                  <h2 className="text-zinc-950 text-xl font-bold">{selectedImage.title}</h2>
                  <p className="text-zinc-500 text-sm">{selectedImage.desc}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-500 text-xs font-semibold shrink-0">
                  <Info className="w-4 h-4 text-brand-orange" />
                  Delivered Pan-India
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
