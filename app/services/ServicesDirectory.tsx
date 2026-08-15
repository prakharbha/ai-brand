"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BackgroundEffect from "../components/BackgroundEffect";
import { 
  Building, Music, Palette, Rocket, Compass, 
  MapPin, Video, Award, CheckCircle2, ArrowRight 
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: any;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageLeft?: string;
  imageRight?: string;
  offerings: string[];
  highlights: { title: string; desc: string }[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "corporate-events",
    icon: Building,
    title: "Corporate Events",
    tagline: "Inspiring Engagement, Strengthening Culture",
    description: "At AI Brand Exhibit, we design and execute impactful corporate events that inspire engagement, strengthen organizational culture and create meaningful business outcomes. From leadership forums and annual conferences to employee engagement programs and sales kick-off meetings, we curate memorable event experiences driven by innovation, strategic planning and impeccable execution.",
    image: "/assets/services/branding-audience.jpg",
    offerings: [
      "Conferences & Summits",
      "Dealer & Distributor Meets",
      "Leadership Meets",
      "Sales Kick-Off Meetings",
      "Award Ceremonies",
      "Town Halls"
    ],
    highlights: [
      { title: "Conferences & Summits", desc: "Strategic content creation & global audience reach." },
      { title: "Leadership Meets", desc: "Visionary executive sessions and immersive environments." },
      { title: "Award Ceremonies", desc: "Celebrating corporate excellence, achievements, and milestones." },
      { title: "Employee Engagement", desc: "Building internal culture through customized team building." }
    ]
  },
  {
    id: "live-concerts",
    icon: Music,
    title: "Live Concerts",
    tagline: "Captivating Audiences, Creating Unforgettable Moments",
    description: "AI Brand Exhibit delivers end-to-end live concert production and entertainment experiences that captivate audiences and create unforgettable moments. From artist coordination and venue management to technical production and event logistics we ensure seamless execution of world-class live performances.",
    image: "/assets/services/live-concert.jpg",
    offerings: [
      "Venue Suggestions & Booking",
      "Stage & Rigging Setup",
      "Lighting & Visuals Design",
      "Performers & Backline Support",
      "Sleek Sound & Audio engineering",
      "Onground Crew & Logistics"
    ],
    highlights: [
      { title: "Artist Coordination", desc: "End-to-end talent booking, hospitality, and scheduling." },
      { title: "Venue & Logistics", desc: "Precise site management, safety protocols, and route planning." },
      { title: "Technical Production", desc: "State-of-the-art AV sound, rigging, and stage systems." },
      { title: "Audience Experience", desc: "Crowd control, ticketing supports, and premium hospitality." }
    ]
  },
  {
    id: "branding-solutions",
    icon: Palette,
    title: "Branding Solutions",
    tagline: "Bringing Brands to Life Across Spaces",
    description: "At AI Brand Exhibit, we create integrated branding solutions that bring brands to life across events, workspaces, retail environments and customer touchpoints. Our expertise combines strategic design, compelling visual storytelling and flawless execution to deliver memorable brand experiences that enhance visibility, strengthen brand recognition and foster meaningful engagement.",
    image: "/assets/services/branding-kiosk.jpg",
    imageLeft: "/assets/services/branding-kiosk.jpg",
    imageRight: "/assets/services/branding-badges.jpg",
    offerings: [
      "Corporate Branding",
      "Event Branding Structure",
      "POSM Solutions",
      "Signage Systems",
      "Environmental Graphics",
      "Digital Displays"
    ],
    highlights: [
      { title: "Corporate Branding", desc: "Ensuring identity consistency across all visual assets." },
      { title: "Event Branding", desc: "Creating immersive spaces that represent the brand's core values." },
      { title: "POSM & Signage", desc: "Unlocking brand visibility in high-traffic retail spots." },
      { title: "Environmental Graphics", desc: "Transforming office workspaces and structures creatively." }
    ]
  },
  {
    id: "product-launches",
    icon: Rocket,
    title: "Product Launches",
    tagline: "Accelerating Market Traction with Impact",
    description: "At AI Brand Exhibit, we craft impactful product launch experiences that generate excitement, enhance visibility, and accelerate market traction. By combining strategic planning, immersive storytelling, innovative technology and flawless execution, we enable brands to unveil their products with maximum impact and meaningful audience engagement.",
    image: "/assets/services/product-launches.jpg",
    offerings: [
      "Media Launches",
      "Product Launch Events",
      "Dealer Launch Programs",
      "Experiential Product Showcase",
      "Hybrid & Virtual Launch Experiences"
    ],
    highlights: [
      { title: "Launch Events", desc: "Dynamic stage reveals powered by smart tech and choreography." },
      { title: "Media Launches", desc: "Strategic press relations, media kit designs, and showcase coordination." },
      { title: "Dealer Launch", desc: "Designing attractive packages and meets to lock in retail partners." },
      { title: "Hybrid Experiences", desc: "Extending reach via high-quality live broadcast integrations." }
    ]
  },
  {
    id: "brand-activations",
    icon: Award,
    title: "Brand Activations",
    tagline: "Fostering Direct Connections with Consumers",
    description: "AI Brand Exhibit helps brands connect directly with consumers through memorable experiences and result driven engagements. Through innovative activation strategies, immersive brand interactions and on-ground engagement programs, we create meaningful connections that enhance brand visibility, generate excitement and strengthen consumer relationships.",
    image: "/assets/services/brand-activation.png",
    offerings: [
      "Experiential Marketing",
      "Roadshows & Mall Activations",
      "Retail Activations",
      "Product Demonstrations",
      "Sampling Campaigns",
      "Market Launch Initiatives"
    ],
    highlights: [
      { title: "Experiential Marketing", desc: "Designing interactive brand setups that prompt user creation." },
      { title: "Retail Activations", desc: "Spurring purchases directly at point-of-sale via smart displays." },
      { title: "Onground Roadshows", desc: "Traveling brand setups that bring the brand closer to regional areas." },
      { title: "Consumer Engagement", desc: "Contests, gamified check-ins, and direct reward programs." }
    ]
  },
  {
    id: "exhibition-trade-shows",
    icon: Compass,
    title: "Exhibition & Trade Shows",
    tagline: "Transforming Presence into Engaging Experiences",
    description: "At AI Brand Exhibit, we deliver comprehensive exhibition and trade show solutions that transforms brand presence into engaging visitor experiences. From concept-driven stall design and fabrication to exhibition management and visitor engagement strategies, we create impactful environments that maximize visibility, foster meaningful interactions and unlock valuable business opportunities.",
    image: "/assets/services/exhibition-trade-shows.jpg",
    offerings: [
      "Creative Stall Design",
      "Precision Fabrication",
      "Exhibition Stall Management",
      "Trade Fair Support",
      "Interactive Visitor Engagement",
      "Full-Service Turnkey Solutions"
    ],
    highlights: [
      { title: "Stall Design", desc: "Creating unique, custom 3D stand concepts optimized for traffic." },
      { title: "Precision Build", desc: "High-quality raw material fabrication ensuring safety and premium feel." },
      { title: "Stall Management", desc: "Handling security, AV setup, hostesses, catering, and cleaning." },
      { title: "Visitor Engagement", desc: "Puzzles, interactive VR zones, and check-in panels." }
    ]
  },
  {
    id: "mice-services",
    icon: MapPin,
    title: "MICE Services",
    tagline: "Destination Sourcing & Destination Excellence",
    description: "At AI Brand Exhibit, we offer comprehensive MICE solutions encompassing corporate travel, business meetings, conferences, incentive programs and exhibition experiences. Through strategic coordination, professional event management and exceptional hospitality services, we deliver well-orchestrated experiences that ensure successful and memorable business engagements.",
    image: "/assets/services/mice.jpg",
    offerings: [
      "Venue Sourcing & Booking",
      "Delegate Registration Management",
      "Travel & Flights Coordination",
      "Premium Hospitality Management",
      "On-site Logistics & Production",
      "Special Artist Management"
    ],
    highlights: [
      { title: "Destination Excellence", desc: "Unlocking local properties, hotels, and unique convention centers." },
      { title: "Delegate Management", desc: "Handling RSVP lists, badges, hotels check-ins, and local commutes." },
      { title: "Guest Hospitality", desc: "Providing custom VIP kits, round-the-clock desks, and local tour support." },
      { title: "Flawless Execution", desc: "Strategic scheduling to ensure zero delays across schedules." }
    ]
  },
  {
    id: "video-content",
    icon: Video,
    title: "Video Content Development",
    tagline: "Creative Visual Storytelling, Cinematic Production",
    description: "At AI Brand Exhibit, we develop compelling visual content driven by strategic storytelling, cinematic production and creative excellence. From corporate films and brand stories to social media content and event aftermovies, we help brands engage audiences, amplify their digital presence and create lasting impressions.",
    image: "/assets/about-us.jpg",
    offerings: [
      "Corporate Films",
      "Product Showcase Videos",
      "Social Media Reels/Shorts",
      "2D & 3D Motion Graphics",
      "CEO Messages",
      "Event Aftermovies & Highlights"
    ],
    highlights: [
      { title: "Corporate Films", desc: "Cinematic documentaries reflecting values, size, and legacy." },
      { title: "Product Videos", desc: "Highlighting features, usage guides, and benefits in sleek high-res." },
      { title: "Motion Graphics", desc: "Modern explainers, dynamic typography, and graphic assets." },
      { title: "Event Aftermovies", desc: "Capturing high-energy moments of live shows to extend activation buzz." }
    ]
  }
];

export default function ServicesDirectory() {
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
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600">
            360° Marketing & Event Solutions
          </h1>
          <p className="text-zinc-555 text-lg font-light">
            Combining strategy, creative design, and advanced technology to connect your brand with audiences.
          </p>
        </motion.div>

        {/* Detailed Sequential Services List */}
        <div className="space-y-16 md:space-y-24">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Background ambient light */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

                {/* Left/Right Text Column */}
                <div className={`lg:col-span-7 space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-brand-purple/10 text-brand-orange">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-0.5">
                      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-wide">
                        {service.title}
                      </h2>
                      <p className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-zinc-650 font-light leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="pt-1">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 transition-colors shadow-sm"
                    >
                      View Detailed Profile
                      <ArrowRight className="w-4 h-4 text-brand-orange" />
                    </Link>
                  </div>

                  {/* Capabilities & Highlights Mini-Grids */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-100">
                    {/* Capabilities */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold tracking-wider text-zinc-900 uppercase">
                        Capabilities Include
                      </h3>
                      <div className="space-y-2">
                        {service.offerings.slice(0, 4).map((offering) => (
                          <div key={offering} className="flex items-center gap-2 text-zinc-700 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                            <span>{offering}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold tracking-wider text-zinc-900 uppercase">
                        Strategic Highlights
                      </h3>
                      <div className="space-y-2">
                        {service.highlights.slice(0, 2).map((highlight, hIdx) => (
                          <div key={hIdx} className="flex gap-1.5 text-xs text-zinc-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 shrink-0" />
                            <div className="space-y-0.5">
                              <span className="font-semibold text-zinc-800 block">{highlight.title}</span>
                              <span className="text-zinc-500 text-xs block leading-normal">{highlight.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Left/Right Image Column */}
                <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                  {service.imageLeft && service.imageRight ? (
                    <div className="grid grid-cols-2 gap-3 h-full">
                      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-zinc-150 shadow-md bg-zinc-50 group">
                        <Image
                          src={service.imageLeft}
                          alt={`${service.title} - left`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                          sizes="(max-width: 1024px) 50vw, 15vw"
                          priority={idx === 0}
                        />
                      </div>
                      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-zinc-150 shadow-md bg-zinc-50 group">
                        <Image
                          src={service.imageRight}
                          alt={`${service.title} - right`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                          sizes="(max-width: 1024px) 50vw, 15vw"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-zinc-150 shadow-md bg-zinc-50 group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        priority={idx === 0}
                      />
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
