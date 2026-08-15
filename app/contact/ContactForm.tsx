"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundEffect from "../components/BackgroundEffect";
import { Mail, Phone, Sparkles, Send, CheckCircle, MapPin } from "lucide-react";

const SERVICES_OPTIONS = [
  "Corporate Events",
  "Live Concerts",
  "Branding Solutions",
  "Product Launches",
  "Brand Activations",
  "Exhibition & Trade Shows",
  "MICE Services",
  "Video Content Development",
];

function ContactContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const serviceVal = searchParams.get("service");
    if (serviceVal) {
      const decoded = decodeURIComponent(serviceVal);
      const matched = SERVICES_OPTIONS.find(
        (opt) => opt.toLowerCase() === decoded.toLowerCase() || opt.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === decoded.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched }));
      }
    }
  }, [searchParams]);
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Mock API delay
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#18181b] relative overflow-hidden pt-28 pb-16">
      <BackgroundEffect />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800 tracking-wider uppercase">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600">
            Start Your Experience
          </h1>
          <p className="text-zinc-555 text-lg font-light">
            Have a project in mind? Contact our team of seasoned professionals to discuss events, exhibitions, and brand campaigns.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-8 rounded-2xl space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
              
              <h2 className="text-xl font-bold text-zinc-950 tracking-wide border-b border-zinc-100 pb-3">
                Official Channels
              </h2>
              
              <div className="space-y-6">
                {/* Registered Office Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-yellow/10 text-brand-yellow shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase text-zinc-400 font-bold tracking-wider block">Registered Office</span>
                    <p className="text-zinc-800 font-semibold text-sm leading-relaxed">
                      L180100, 7th Avenue, Gaur City 1,<br />
                      Gautam Buddha Nagar, Uttar Pradesh – 201318
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-orange/10 text-brand-orange shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase text-zinc-400 font-bold tracking-wider block">Call Details</span>
                    <a href="tel:+919919977300" className="text-zinc-800 hover:text-brand-orange transition-colors font-semibold block">
                      +91 99199 77300
                    </a>
                    <a href="tel:+919891498148" className="text-zinc-800 hover:text-brand-orange transition-colors font-semibold block">
                      +91 98914 98148
                    </a>
                    <a href="tel:+919026477300" className="text-zinc-800 hover:text-brand-orange transition-colors font-semibold block">
                      +91 90264 77300
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase text-zinc-400 font-bold tracking-wider block">Email Inquiries</span>
                    <a href="mailto:sales@aibrandexhibit.com" className="text-zinc-800 hover:text-brand-orange transition-colors font-semibold block">
                      sales@aibrandexhibit.com
                    </a>
                  </div>
                </div>

                {/* Slogan */}
                <div className="flex items-start gap-4 pt-4 border-t border-zinc-100">
                  <div className="p-3 rounded-xl bg-brand-pink/10 text-brand-pink shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase text-zinc-400 font-bold tracking-wider block">Our Slogan</span>
                    <p className="text-zinc-650 font-light text-sm italic">
                      &quot;Creating Experiences. Building Brands. Delivering Impact.&quot;
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none" />
              
              <h2 className="text-xl font-bold text-zinc-950 tracking-wide border-b border-zinc-100 pb-3 mb-6">
                Send a Message
              </h2>

              <AnimatePresence mode="wait">
                {formStatus !== "success" ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-brand-orange transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-brand-orange transition-colors"
                          placeholder="Your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-brand-orange transition-colors"
                          placeholder="Mobile number"
                        />
                      </div>
                      
                      {/* Company */}
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-brand-orange transition-colors"
                          placeholder="Organization name"
                        />
                      </div>
                    </div>

                    {/* Service Needed Dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Service Required</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                      >
                        <option value="" className="bg-white text-zinc-500">Select a service category</option>
                        {SERVICES_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-zinc-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-50/50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                        placeholder="Describe your event or project guidelines..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-purple hover:from-brand-orange/90 hover:to-brand-purple/90 text-white font-medium text-sm tracking-wide shadow-lg shadow-brand-orange/15 transition-all duration-200"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="p-4 rounded-full bg-green-500/10 text-green-600">
                      <CheckCircle className="w-12 h-12 animate-bounce" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 tracking-wide">
                      Message Sent!
                    </h3>
                    <p className="text-zinc-500 text-sm max-w-sm font-light">
                      Thank you for contacting AI Brand Exhibit. Our event planners will review your request and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="px-6 py-2.5 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-650 text-xs font-semibold uppercase hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </main>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#ffffff] text-[#18181b] relative overflow-hidden pt-28 pb-16 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-brand-orange border-t-transparent rounded-full animate-spin" />
      </main>
    }>
      <ContactContent />
    </Suspense>
  );
}
