import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, WhatsappLogo } from 'lucide-react';

const ContactFooter = () => {
  return (
    <div id="contact" className="relative bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#2D2D2D]">Get a Quote</h3>
            <p className="mt-2 text-gray-600">Tell us about your pet and route. We’ll reach out quickly.</p>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-3 md:grid-cols-2">
                <input type="text" placeholder="Your Name" className="rounded-xl border border-gray-200 p-3 outline-none ring-[#1CA7A1] transition focus:ring-2" />
                <input type="tel" placeholder="Phone / WhatsApp" className="rounded-xl border border-gray-200 p-3 outline-none ring-[#1CA7A1] transition focus:ring-2" />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <input type="text" placeholder="From City" className="rounded-xl border border-gray-200 p-3 outline-none ring-[#1CA7A1] transition focus:ring-2" />
                <input type="text" placeholder="To City" className="rounded-xl border border-gray-200 p-3 outline-none ring-[#1CA7A1] transition focus:ring-2" />
              </div>
              <textarea placeholder="Pet details (species, size, special needs)" rows={4} className="rounded-xl border border-gray-200 p-3 outline-none ring-[#1CA7A1] transition focus:ring-2" />
              <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1CA7A1] px-5 py-3 font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:bg-[#18938e]">
                <Mail className="h-5 w-5" /> Submit Request
              </button>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <Phone className="h-4 w-4" /> +91-90000-00000
                <MapPin className="ml-4 h-4 w-4" /> India — Pan-India Service
              </div>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <div className="relative aspect-[4/3] w-full">
              <iframe
                title="Service Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4432691.690261254!2d73.0191574!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff5b8b3d9d9%3A0x54f77f39f1c5c1b!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="pointer-events-none absolute inset-0 animate-pulse rounded-3xl ring-2 ring-[#1CA7A1]/30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="text-xl font-extrabold text-[#1CA7A1]">Ali Pet Transport</div>
              <div className="mt-1 text-sm text-gray-600">© 2025 Ali Pet Transport. All rights reserved.</div>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[#2D2D2D]">
              <a href="#home" className="transition hover:text-[#1CA7A1]">Home</a>
              <a href="#about" className="transition hover:text-[#1CA7A1]">About</a>
              <a href="#services" className="transition hover:text-[#1CA7A1]">Services</a>
              <a href="#gallery" className="transition hover:text-[#1CA7A1]">Gallery</a>
              <a href="#contact" className="transition hover:text-[#1CA7A1]">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <a aria-label="WhatsApp" href="https://wa.me/919000000000" className="rounded-full bg-[#25D366] p-3 text-white transition hover:scale-105">
                <WhatsappLogo className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919000000000"
        className="fixed bottom-6 right-6 z-40 inline-flex animate-bounce items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <WhatsappLogo className="h-6 w-6" />
      </a>
    </div>
  );
};

export default ContactFooter;
