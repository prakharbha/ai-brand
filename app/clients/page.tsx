import type { Metadata } from "next";
import ClientsGallery from "./ClientsGallery";

export const metadata: Metadata = {
  title: "Our Work & Clients | AI Brand Exhibit",
  description: "View our portfolio of successful events and brand marketing solutions delivered pan-India. Trusted by HCL Tech, Airtel, LG Electronics, Hero Group, and Oil India.",
  alternates: {
    canonical: "https://www.aibrandexhibit.com/clients",
  },
};

export default function ClientsPage() {
  return <ClientsGallery />;
}
