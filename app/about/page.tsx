import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About AI Brand Exhibit | Our Journey & Event Expertise",
  description: "Learn about AI Brand Exhibit (OPC) Private Limited, our mission, vision, and core pillars. Over 15+ years of experience delivering 500+ successful corporate events, live concerts, and marketing campaigns.",
  alternates: {
    canonical: "https://www.aibrandexhibit.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
