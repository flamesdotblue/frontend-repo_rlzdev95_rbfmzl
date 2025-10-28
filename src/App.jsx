import { useEffect } from 'react';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import Showcase from './components/Showcase';
import ContactFooter from './components/ContactFooter';

function App() {
  useEffect(() => {
    document.title = 'Ali Pet Transport | Pet Relocation India';
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Ali Pet Transport — professional pet relocation across India. Dog courier, cat transport, pet movers with door-to-door service and live updates.';
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="scroll-smooth antialiased">
      {/* Simple sticky nav */}
      <header className="fixed inset-x-0 top-0 z-30 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-extrabold text-[#1CA7A1]">Ali Pet Transport</a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#2D2D2D] md:flex">
            <a href="#about" className="transition hover:text-[#1CA7A1]">About</a>
            <a href="#services" className="transition hover:text-[#1CA7A1]">Services</a>
            <a href="#gallery" className="transition hover:text-[#1CA7A1]">Gallery</a>
            <a href="#contact" className="rounded-full bg-[#FFC857] px-4 py-2 text-[#2D2D2D] transition hover:brightness-95">Get a Quote</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <InfoSections />
        <Showcase />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
