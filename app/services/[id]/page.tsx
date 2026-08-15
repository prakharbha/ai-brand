import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  Building, Music, Palette, Rocket, Compass, 
  MapPin, Video, Award, CheckCircle2, ArrowLeft, ArrowRight 
} from "lucide-react";
import BackgroundEffect from "../../components/BackgroundEffect";

// Inline copy of SERVICES_DATA to keep it simple and independent
interface Highlight {
  title: string;
  desc: string;
}

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
  highlights: Highlight[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "corporate-events",
    icon: Building,
    title: "Corporate Events",
    tagline: "Inspiring Engagement, Strengthening Culture",
    description: "At AI Brand Exhibit, we design and execute impactful corporate events that inspire engagement, strengthen organizational culture and create meaningful business outcomes. From leadership forums and annual conferences to employee engagement programs and sales kick-off meetings, we curate memorable event experiences driven by innovation, strategic planning and impeccable execution.",
    image: "/assets/services/branding-audience.jpg",
    imageLeft: "/assets/services/corporate-event.jpg",
    imageRight: "/assets/services/branding-audience.jpg",
    offerings: [
      "Conferences & Summits",
      "Dealer & Distributor Meets",
      "Leadership Meets",
      "Sales Kick-Off Meetings",
      "Award Ceremonies",
      "Town Halls",
      "Team Building & Retreats",
      "Product Experience Centers"
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
      "Onground Crew & Logistics",
      "Security & Crowd Management",
      "Licensing & Government Permissions"
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
      "Digital Displays",
      "Exhibition Branding Support",
      "Custom Graphic Designs"
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
      "Hybrid & Virtual Launch Experiences",
      "Creative Reveal Choreography",
      "Interactive Product Demo Zones",
      "Post-Launch Press Kits"
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
      "Market Launch Initiatives",
      "Campus Activations",
      "Interactive Tech Deployments"
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
      "Full-Service Turnkey Solutions",
      "Multi-Storey Stall Builds",
      "Dismantling & Logistics Support"
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
      "Special Artist Management",
      "Theme Dinners & Galas",
      "VIP Concierge Desk Support"
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
      "Event Aftermovies & Highlights",
      "Cinematic Scriptwriting",
      "Professional Sound Design"
    ],
    highlights: [
      { title: "Corporate Films", desc: "Cinematic documentaries reflecting values, size, and legacy." },
      { title: "Product Videos", desc: "Highlighting features, usage guides, and benefits in sleek high-res." },
      { title: "Motion Graphics", desc: "Modern explainers, dynamic typography, and graphic assets." },
      { title: "Event Aftermovies", desc: "Capturing high-energy moments of live shows to extend activation buzz." }
    ]
  }
];

export async function generateStaticParams() {
  return SERVICES_DATA.map((srv) => ({
    id: srv.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);
  if (!service) return { title: "Service Not Found" };

  // Rich meta description: tagline + first ~100 chars of body description + key capabilities
  const bodySnippet = service.description.split(".")[0];
  const capabilities = service.offerings.slice(0, 3).join(", ");
  const richDescription = `${service.tagline}. ${bodySnippet}. Capabilities: ${capabilities} & more.`;

  return {
    title: `${service.title} | Services | AI Brand Exhibit`,
    description: richDescription.slice(0, 160),
    openGraph: {
      title: `${service.title} | AI Brand Exhibit`,
      description: richDescription.slice(0, 160),
      url: `https://www.aibrandexhibit.com/services/${service.id}`,
      siteName: "AI Brand Exhibit",
      type: "website",
    },
    alternates: {
      canonical: `https://www.aibrandexhibit.com/services/${service.id}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  const currentIndex = SERVICES_DATA.findIndex((s) => s.id === id);
  
  if (currentIndex === -1) {
    notFound();
  }

  const service = SERVICES_DATA[currentIndex];
  const nextService = SERVICES_DATA[(currentIndex + 1) % SERVICES_DATA.length];
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#18181b] relative overflow-hidden pt-28 pb-16">
      <BackgroundEffect />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-10">
        {/* Breadcrumb back navigation */}
        <div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-950 font-semibold text-base transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all services
          </Link>
        </div>

        {/* Split Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Service Profile Main Contents */}
          <div className="lg:col-span-8 space-y-8">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-8 border border-zinc-150 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-brand-purple/10 text-brand-orange">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                    Service Profile
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                  {service.title}
                </h1>
                <p className="text-brand-purple text-base font-bold tracking-wide italic">
                  "{service.tagline}"
                </p>
              </div>

              {/* Main Image Display */}
              {service.imageLeft && service.imageRight ? (
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-zinc-150 shadow-sm bg-zinc-50">
                    <Image
                      src={service.imageLeft}
                      alt={`${service.title} - charging kiosk`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      priority
                    />
                  </div>
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-zinc-150 shadow-sm bg-zinc-50">
                    <Image
                      src={service.imageRight}
                      alt={`${service.title} - badges`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-150 shadow-sm bg-zinc-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                </div>
              )}

              {/* Description */}
              <p className="text-zinc-650 font-light text-base leading-relaxed">
                {service.description}
              </p>

              {/* Scope Checklist */}
              <div className="space-y-4 pt-6 border-t border-zinc-100">
                <h2 className="text-lg font-bold text-zinc-950 tracking-wide uppercase">
                  Core Capabilities & Scope
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.offerings.map((offering) => (
                    <div key={offering} className="flex items-center gap-3 text-zinc-700 text-base">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                      <span>{offering}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Highlights */}
              <div className="space-y-6 pt-6 border-t border-zinc-100">
                <h2 className="text-lg font-bold text-zinc-950 tracking-wide uppercase">
                  Execution & Strategic Highlights
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {service.highlights.map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl bg-zinc-50 border border-zinc-150/70 hover:border-brand-orange/20 transition-colors space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-purple shrink-0" />
                        <h3 className="font-bold text-zinc-900 text-base">{highlight.title}</h3>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-relaxed pl-4">
                        {highlight.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Slider back navigation links */}
            <div className="flex justify-between items-center pt-4">
              <Link 
                href="/services"
                className="text-zinc-400 hover:text-zinc-800 text-sm font-bold uppercase tracking-wider"
              >
                ← Directory Home
              </Link>
              
              <Link
                href={`/services/${nextService.id}`}
                className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-purple text-sm font-bold uppercase tracking-wider group"
              >
                <span>Next: {nextService.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Widget 1: Other Services Navigation Links */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-150/80 space-y-4">
              <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider border-b border-zinc-150 pb-2">
                All Capabilities
              </h3>
              <div className="space-y-1.5">
                {SERVICES_DATA.map((srv) => {
                  const isActive = srv.id === service.id;
                  return (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.id}`}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                        isActive
                          ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                          : "text-zinc-600 hover:text-brand-orange hover:bg-zinc-50 border-transparent"
                      }`}
                    >
                      {srv.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Widget 2: Metric & Scope details */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-150/80 space-y-4 bg-zinc-50/50">
              <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider border-b border-zinc-150 pb-2">
                Deployment Metric
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">Delivery Reach</span>
                  <span className="text-sm font-semibold text-zinc-800">Pan-India Support</span>
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">Process Flow</span>
                  <span className="text-sm font-semibold text-zinc-800">Design → Build → Execute</span>
                </div>
                <div>
                  <span className="text-xs text-zinc-400 font-bold block uppercase tracking-wider">Support Channels</span>
                  <span className="text-sm font-semibold text-zinc-800">24/7 Account Management</span>
                </div>
              </div>
            </div>

            {/* Widget 3: Quick Action Inquiry CTA */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-150/80 space-y-4 bg-gradient-to-tr from-brand-orange/5 to-brand-purple/5">
              <h3 className="text-sm font-bold text-zinc-950 tracking-wide">
                Start Planning
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Send direct coordinates, sizing requests, and specifications to our design and logistics teams.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Start Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
