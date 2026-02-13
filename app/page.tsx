import Image from "next/image";
import BackgroundEffect from "./components/BackgroundEffect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20 sm:justify-center sm:pt-0 px-4 text-center relative isolate">
      <BackgroundEffect />
      <div className="animate-fade-in-down">
        <Image
          src="/logo-ai-brand-exhibit.png"
          alt="AI Brand Exhibit Logo"
          width={400}
          height={216}
          priority
          className="h-auto w-64 sm:w-80 md:w-96"
        />
      </div>

      <div className="mt-8 animate-fade-in-up space-y-4">
        <h1 className="text-3xl font-light tracking-wide text-zinc-900 sm:text-4xl md:text-5xl">
          AI Brand Exhibit
        </h1>
        <p className="mx-auto max-w-lg text-lg text-zinc-600 sm:text-xl font-light">
          Events & Content Management
        </p>

        <div className="mt-12 flex flex-col items-center space-y-2 text-zinc-500 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-zinc-400">Get in Touch</p>
          <a href="mailto:sales@aibrandexhibit.com" className="text-lg hover:text-zinc-800 transition-colors">
            sales@aibrandexhibit.com
          </a>
          <a href="tel:+919891498148" className="text-lg font-light hover:text-zinc-800 transition-colors">
            +91 98914 98148
          </a>
        </div>
      </div>

      <footer className="fixed bottom-4 text-xs text-zinc-600 animate-fade-in">
        &copy; {new Date().getFullYear()} AI Brand Exhibit. All rights reserved.
      </footer>
    </main>
  );
}
