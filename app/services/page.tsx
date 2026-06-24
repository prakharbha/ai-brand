import type { Metadata } from "next";
import ServicesDirectory from "./ServicesDirectory";

export const metadata: Metadata = {
  title: "Our Services | 360° Event & Brand Marketing Solutions",
  description: "Explore the comprehensive corporate solutions at AI Brand Exhibit. From corporate events, live concerts, branding solutions, and exhibition stalls to product launches, MICE services, and cinematic content development.",
  alternates: {
    canonical: "https://www.aibrandexhibit.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesDirectory />;
}
