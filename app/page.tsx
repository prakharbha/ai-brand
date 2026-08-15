"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Spotlight } from "./components/Spotlight";
import BackgroundEffect from "./components/BackgroundEffect";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Globe, Users, Award,
  Building, Music, Palette, Rocket, Compass, Video, MapPin
} from "lucide-react";

// Dynamically import Spline to prevent SSR issues
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineLoader />,
});

function SplineLoader() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f5] via-[#fef6f6] to-[#f3e8ff] rounded-2xl animate-pulse" />
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-12 h-12 border-2 border-brand-orange border-t-transparent rounded-full animate-spin" />
        <span className="text-zinc-650 text-sm tracking-widest uppercase animate-pulse">
          Initializing 3D Space
        </span>
      </div>
    </div>
  );
}

const STATS = [
  { icon: Globe, value: "Pan-India", label: "Execution Capability" },
  { icon: Users, value: "360°", label: "Brand Solutions" },
];

const SERVICES_PREVIEW = [
  { icon: Building, title: "Corporate Events",       desc: "Conferences, summits, dealer meets and employee engagements.",         href: "/services/corporate-events" },
  { icon: Music,    title: "Live Concerts",           desc: "End-to-end stage rigging, audio, visuals, and talent management.",     href: "/services/live-concerts" },
  { icon: Palette,  title: "Branding Solutions",      desc: "POSM, corporate branding, office graphics, and displays.",             href: "/services/branding-solutions" },
  { icon: Rocket,   title: "Product Launches",        desc: "Dynamic reveals powered by modern tech and virtual integrations.",     href: "/services/product-launches" },
  { icon: Award,    title: "Brand Activations",       desc: "Roadshows, mall activations, sampling campaigns and retail setups.",   href: "/services/brand-activations" },
  { icon: Compass,  title: "Exhibition & Trade Shows",desc: "Concept stall designs, custom fabrication, and turnkey operations.",   href: "/services/exhibition-trade-shows" },
  { icon: MapPin,   title: "MICE Services",           desc: "Meetings, incentives, conferences and exhibitions across India.",       href: "/services/mice-services" },
  { icon: Video,    title: "Video Production",        desc: "Cinematic films, corporate clips, CEO messages, and motion graphics.", href: "/services/video-content" },
];

const ALL_CLIENTS = [
  { name: "Vama Sundari",    logo: "",                             ext: "png" },
  { name: "HYZERO",          logo: "/assets/clients/hyzero.png",  ext: "png" },
  { name: "Airtel",          logo: "/assets/clients/airtel.png",  ext: "png" },
  { name: "HCL Concerts",   logo: "/assets/clients/hcl.png",           ext: "png" },
  { name: "Embassy Services",logo: "",                             ext: "png" },
];

// Duplicate for seamless infinite scroll
const MARQUEE_CLIENTS = [...ALL_CLIENTS, ...ALL_CLIENTS];

export default function Home() {
  const [splineLoading, setSplineLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#18181b] relative overflow-hidden flex flex-col justify-center">
      {/* Background canvas particle effect */}
      <BackgroundEffect />

      <div className="relative w-full pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-24 md:space-y-36">
        {/* Spotlight */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#de6042" />

            {/* --- HERO AREA SECTION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[550px]">
              
              {/* Left Column: Slogan & Intro Text */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8 relative z-20">
                <div className="space-y-4">

                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600">
                    Creating Experiences.<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-brand-purple to-brand-magenta">
                      Building Brands.
                    </span><br />
                    Delivering Impact.
                  </h1>
                  
                  <p className="text-zinc-650 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                    Events | Exhibitions | Brand Experiences | Live Concerts | Content Development.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-purple hover:from-brand-orange/95 hover:to-brand-purple/95 text-white font-medium text-sm tracking-wide shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30 hover:scale-[1.02] transition-all duration-200"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-250 text-zinc-800 font-medium text-sm tracking-wide transition-all duration-200"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Right Column: 21st Dev Interactive Robot (Spline 3D Scene) */}
              {isDesktop && (
                <div className="hidden lg:flex lg:col-span-5 relative w-full h-[400px] md:h-[500px] items-center justify-center z-20">
                  <div
                    className={`w-full h-full rounded-2xl overflow-hidden border border-zinc-100 shadow-xl relative bg-gradient-to-br from-[#fff0f5]/80 via-[#fef6f6]/80 to-[#f3e8ff]/80 backdrop-blur-md transition-all duration-1000 delay-300 ${
                      mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    {splineLoading && <SplineLoader />}
                    
                    <Spline
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      onLoad={() => setSplineLoading(false)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* --- ABOUT SUMMARY SECTION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 tracking-wider uppercase">
                  Who We Are
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                  Delivering Over 500+ Projects Nationwide
                </h2>
                <p className="text-zinc-650 font-light leading-relaxed">
                  AI Brand Exhibit is a dynamic events, branding and marketing solutions company powered by a team of seasoned professionals with 15+ years of industry experience. We bring together strategic thinking, creative innovation, and advanced technology to build lasting impacts.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange hover:text-brand-purple transition-colors"
                  >
                    Learn More About Our Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Stats Counters */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {STATS.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-panel p-5 rounded-2xl flex flex-col items-center text-center space-y-2 border border-zinc-100"
                    >
                      <div className="p-2 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-purple/10 text-brand-orange">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-bold text-zinc-950">{stat.value}</span>
                      <span className="text-xs uppercase font-bold tracking-wider text-zinc-500">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* --- SERVICES SUMMARY SECTION --- */}
            <div className="space-y-10">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 tracking-wider uppercase">
                  What We Offer
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                  Our Execution Pillars
                </h2>
                <p className="text-zinc-550 font-light text-sm">
                  Strategic activations, live events production, custom fabrication, MICE planning, and creative content designs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SERVICES_PREVIEW.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      className="glass-panel p-5 rounded-2xl space-y-3 hover:border-brand-orange/30 hover:shadow-md hover:shadow-brand-orange/5 transition-all duration-300 flex flex-col group"
                    >
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-brand-orange/10 to-brand-purple/10 text-brand-orange w-fit group-hover:from-brand-orange/20 group-hover:to-brand-purple/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-brand-orange transition-colors">{item.title}</h3>
                      <p className="text-zinc-500 font-light text-xs leading-relaxed flex-1">{item.desc}</p>
                      <span className="text-[11px] font-bold text-brand-orange/70 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs tracking-wider uppercase transition-colors"
                >
                  View All Services Overview
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* --- CLIENTS SUMMARY SECTION --- */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 tracking-wider uppercase">
                    Our Clients
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-950">Trusted by India's Best</h2>
                  <p className="text-zinc-500 font-light text-sm">
                    From Fortune-500 giants to India's leading PSUs — delivering extraordinary events.
                  </p>
                </div>
                <Link
                  href="/clients"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:underline uppercase tracking-wider shrink-0 pb-1"
                >
                  View Event Gallery
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Infinite Logo Marquee */}
              <div className="relative overflow-hidden rounded-2xl border border-zinc-100 bg-white py-6">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

                <div
                  className="flex gap-4 home-marquee"
                  style={{ width: "max-content", animation: "marquee 28s linear infinite" }}
                >
                  {MARQUEE_CLIENTS.map((client, idx) => (
                    <div
                      key={`${client.name}-${idx}`}
                      className="flex-shrink-0 flex items-center justify-center rounded-xl border border-zinc-100 hover:border-brand-orange/30 hover:shadow-sm transition-all duration-300 bg-white"
                      style={{ width: 160, height: 80 }}
                    >
                      {client.logo ? (
                        <div className="relative w-[110px] h-[48px]">
                          <Image
                            src={client.logo}
                            alt={`${client.name} logo`}
                            fill
                            className="object-contain"
                            sizes="120px"
                            unoptimized={client.ext === "svg"}
                          />
                        </div>
                      ) : (
                        <span className="text-xs font-bold text-zinc-600 tracking-wide text-center px-3 leading-tight">
                          {client.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- CONTACT CTA --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 border border-zinc-150 rounded-3xl overflow-hidden shadow-sm bg-white">
              {/* Left Side: Image */}
              <div className="relative aspect-video md:aspect-auto w-full min-h-[250px] md:min-h-[320px] bg-zinc-50">
                <Image
                  src="/assets/why-choose-us.jpg"
                  alt="Partner with AI Brand Exhibit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Visual subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent mix-blend-overlay" />
              </div>

              {/* Right Side: Text */}
              <div className="p-8 md:p-12 flex flex-col justify-center items-start text-left space-y-6 bg-gradient-to-tr from-brand-orange/5 to-brand-purple/5">
                <h2 className="text-3xl font-bold text-zinc-950 tracking-tight">Ready to Partner With Us?</h2>
                <p className="text-zinc-650 font-light text-base leading-relaxed">
                  Connect with our planning team to discuss your upcoming product launches, corporate meets, live concerts, or exhibition stall designs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-900 hover:scale-[1.02] text-white font-semibold text-base tracking-wider uppercase transition-transform shadow-md"
                >
                  Start Enquiry
                  <ArrowRight className="w-4 h-4 text-brand-orange" />
                </Link>
              </div>
            </div>
      </div>
    </main>
  );
}
