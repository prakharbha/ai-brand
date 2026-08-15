import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project | AI Brand Exhibit",
  description: "Get in touch with our event planners. Call +91 99199 77300 or send a message to discuss your next brand experience, live concert, or exhibition stall.",
  alternates: {
    canonical: "https://www.aibrandexhibit.com/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
