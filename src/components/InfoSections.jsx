import { motion } from 'framer-motion';
import { Home, Shield, Dog, Truck, Map, Camera, Utensils, Package } from 'lucide-react';
import { useEffect, useRef } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="group relative min-w-[260px] rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-colors hover:border-[#1CA7A1] hover:shadow-lg"
  >
    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6FFFD] text-[#1CA7A1]">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold text-[#2D2D2D]">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(28,167,161,0.08), transparent 40%)' }} />
  </motion.div>
);

const ServicesCarousel = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let dir = 1;
    const timer = setInterval(() => {
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) dir = -1;
      if (el.scrollLeft <= 4) dir = 1;
      el.scrollBy({ left: 2 * dir, behavior: 'smooth' });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: Home, title: 'Door-to-Door Pet Relocation', desc: 'Seamless pickup and delivery right to your home.' },
    { icon: Truck, title: 'Intercity & Interstate Transport', desc: 'Safe long-distance travel across India.' },
    { icon: Camera, title: 'Live Tracking & Video Updates', desc: 'Stay connected with updates throughout the trip.' },
    { icon: Utensils, title: 'Feeding & Comfort Stops', desc: 'Scheduled breaks for meals, water, and walks.' },
    { icon: Package, title: 'Custom Pet Crates', desc: 'Comfortable crates tailored to your pet’s size.' },
  ];

  return (
    <div className="mt-10 overflow-x-auto scroll-smooth" ref={scrollerRef}>
      <div className="flex w-max gap-5 pr-6">
        {services.map((s) => (
          <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>
  );
};

const InfoSections = () => {
  useEffect(() => {
    const listener = (e) => {
      const cards = document.querySelectorAll('[style*="--x"]');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', listener);
    return () => window.removeEventListener('mousemove', listener);
  }, []);

  return (
    <div className="bg-[#F5F5F5] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* About */}
        <motion.div
          id="about"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#2D2D2D] md:text-4xl">We move pets with love</h2>
            <p className="mt-4 text-gray-700">
              At Ali Pet Transport, we move pets with love. Our trained handlers ensure safety, care, and comfort for every furry
              passenger. From pickup to delivery, we manage every detail so you can relax.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <Home className="mx-auto h-6 w-6 text-[#1CA7A1]" />
                <p className="mt-2 text-sm font-medium text-[#2D2D2D]">Home Pickup</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <Shield className="mx-auto h-6 w-6 text-[#1CA7A1]" />
                <p className="mt-2 text-sm font-medium text-[#2D2D2D]">Safe Transit</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <Dog className="mx-auto h-6 w-6 text-[#1CA7A1]" />
                <p className="mt-2 text-sm font-medium text-[#2D2D2D]">Happy Delivery</p>
              </div>
            </div>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop"
            alt="Handler caring for a dog"
            className="h-full w-full rounded-3xl object-cover shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Services carousel */}
        <div id="services" className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] md:text-3xl">Our Services</h3>
              <p className="mt-2 text-gray-600">Flexible options to match every pet’s needs and comfort.</p>
            </div>
            <div className="hidden items-center gap-3 text-sm text-gray-600 md:flex">
              <Map className="h-4 w-4" /> Scroll
            </div>
          </div>
          <ServicesCarousel />
        </div>
      </div>
    </div>
  );
};

export default InfoSections;
