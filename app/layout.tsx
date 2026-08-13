import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import PreviewKeeper from "./components/PreviewKeeper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Brand Exhibit | Creating Experiences, Building Brands, Delivering Impact",
  description: "Pan-India premier events, exhibitions, brand activations, MICE services, video content, and integrated marketing solutions agency. 500+ projects delivered.",
  keywords: ["AI Brand Exhibit", "Event management India", "Exhibition stall designer", "Brand Activations", "Corporate Events Delhi", "Live Concert organizer", "MICE services India"],
  authors: [{ name: "AI Brand Exhibit Team" }],
  metadataBase: new URL("https://www.aibrandexhibit.com"),
  alternates: {
    canonical: "https://www.aibrandexhibit.com",
  },
  openGraph: {
    title: "AI Brand Exhibit | Events, Exhibitions & Brand Marketing",
    description: "Creating Experiences. Building Brands. Delivering Impact. 500+ projects across India.",
    url: "https://www.aibrandexhibit.com",
    siteName: "AI Brand Exhibit",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Brand Exhibit",
    description: "Pan-India events, exhibitions, brand activations & marketing solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: "/*" },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#ffffff] text-[#18181b] antialiased min-h-screen flex flex-col justify-between`}
      >
        {/* Preserves ?preview=true across all client-side navigation */}
        <PreviewKeeper />
        <div>
          <Navbar />
          {children}
        </div>

        {/* Premium Light Footer */}
        <footer className="border-t border-zinc-100 bg-[#fafafa] pt-10 pb-6 text-zinc-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              {/* Brand + Tagline */}
              <div className="flex flex-col items-start space-y-1.5">
                <span className="text-zinc-950 text-sm font-semibold tracking-wider uppercase">
                  AI Brand Exhibit
                </span>
                <span className="text-xs text-zinc-500">
                  Creating Experiences. Building Brands. Delivering Impact.
                </span>
                {/* Contact Details */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a href="tel:+919891498148" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-brand-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +91 98914 98148
                  </a>
                  <a href="mailto:sales@aibrandexhibit.com" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-brand-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    sales@aibrandexhibit.com
                  </a>
                </div>
              </div>

              {/* Nav Links */}
              <div className="flex gap-6 text-sm flex-wrap">
                <a href="/about" className="hover:text-zinc-900 transition-colors">About</a>
                <a href="/services" className="hover:text-zinc-900 transition-colors">Services</a>
                <a href="/clients" className="hover:text-zinc-900 transition-colors">Clients</a>
                <a href="/contact" className="hover:text-zinc-900 transition-colors">Contact</a>
              </div>
            </div>

            {/* Separator and Bottom Bar */}
            <div className="border-t border-zinc-200/60 pt-5 text-center">
              <p className="text-xs text-zinc-550">
                &copy; {new Date().getFullYear()} AI Brand Exhibit (OPC) Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
