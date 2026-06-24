"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundEffect from "../components/BackgroundEffect";
import { Award, Compass, Eye, ShieldCheck } from "lucide-react";

const CLIENTS_LIST = [
  "HCLTech", "Vama Sundari Investment", "HYZERO", "Airtel", 
  "LG Electronics", "Alstom Transport", "PI Industries", "Oil India", "Hero Group"
];

const PILLARS = [
  { title: "Future Focused Vision Driven", desc: "Always aligned with upcoming industry trends and next-gen event formats.", color: "from-[#de6042] to-[#7a3a8f]" },
  { title: "Impact Oriented Strategic Execution", desc: "Converting creative designs into precise, flawless real-world operations.", color: "from-[#7a3a8f] to-[#e11d48]" },
  { title: "Creativity + Technology Core Approach", desc: "Merging visual arts with interactive structures like AR/VR and 3D projection.", color: "from-[#e11d48] to-[#f59e0b]" },
  { title: "Brand Growth Measurable Results", desc: "Designing every experience to maximize audience engagement and return on investment.", color: "from-[#f59e0b] to-[#de6042]" },
];

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#18181b] relative overflow-hidden pt-28 pb-16">
      <BackgroundEffect />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-16 md:space-y-24">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 tracking-wider uppercase">
            Corporate Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600">
            About AI Brand Exhibit
          </h1>
          <p className="text-zinc-555 text-lg font-light leading-relaxed">
            A dynamic events, branding, and marketing solutions company powered by seasoned professionals with 15+ years of industry experience.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 tracking-wide">
              Our Journey & Expertise
            </h2>
            <p className="text-zinc-650 font-light leading-relaxed text-base">
              AI Brand Exhibit (OPC) Private Limited brings together strategic thinking, creative innovation, advanced technology, and meticulous execution to craft impactful events, compelling content, immersive brand experiences, and integrated marketing solutions.
            </p>
            <p className="text-zinc-650 font-light leading-relaxed text-base">
              With a proven track record of delivering more than <strong>500 successful projects</strong> spanning corporate events, live concerts, exhibitions, brand activations, video content production, and strategic communications, we stand as a trusted partner for brands nationwide.
            </p>
            
            {/* Brands we served */}
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <span className="text-xs uppercase text-zinc-500 font-semibold tracking-wider">
                Trusted by Leading Organizations
              </span>
              <div className="flex flex-wrap gap-2">
                {CLIENTS_LIST.map((c) => (
                  <span 
                    key={c}
                    className="px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 text-zinc-700 text-xs hover:border-brand-orange/30 hover:bg-white hover:text-zinc-950 transition-all duration-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden glass-panel border border-zinc-100 shadow-xl"
          >
            <Image
              src="/assets/about-us.jpg"
              alt="About AI Brand Exhibit team"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

        {/* Vision & Mission Stack (Full Width Alternating Components) */}
        <div className="space-y-12">
          
          {/* Full Width Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-3xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-brand-orange/10 text-brand-orange shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-wide">Our Vision</h3>
              </div>
              <p className="text-zinc-650 font-light leading-relaxed text-base">
                To become a leading innovation-driven experiences company, creating impactful events, immersive brand experiences and compelling content that inspire audiences, strengthen relationships and drive meaningful business outcomes.
              </p>
            </div>
            <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-zinc-100 shadow-sm bg-zinc-50">
              <Image
                src="/assets/vision.jpg"
                alt="Vision landscape"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
          </motion.div>

          {/* Full Width Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-3xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
            <div className="md:col-span-7 md:order-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-brand-purple/10 text-brand-purple shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-wide">Our Mission</h3>
              </div>
              <p className="text-zinc-650 font-light leading-relaxed text-base">
                To deliver integrated event, exhibition, branding, and digital solutions driven by creativity, technology and strategic expertise—helping brands foster meaningful engagement, achieve measurable growth and create lasting impact.
              </p>
            </div>
            <div className="md:col-span-5 md:order-1 relative h-64 rounded-2xl overflow-hidden border border-zinc-100 shadow-sm bg-zinc-50">
              <Image
                src="/assets/why-choose-us.jpg"
                alt="Mission target"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
          </motion.div>

        </div>

        {/* Why Choose Us / Core Pillars */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-zinc-950">
              Why Choose Us?
            </h2>
            <p className="text-zinc-500 font-light">
              We go beyond service delivery to build strategic partnerships based on execution excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-1.5 rounded-full bg-gradient-to-r ${pillar.color}`} />
                  <h4 className="text-base font-semibold text-zinc-950 tracking-wide pt-2">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-650 text-xs font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-1.5 text-zinc-400 text-xs uppercase font-bold tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                  Partnership Core
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
