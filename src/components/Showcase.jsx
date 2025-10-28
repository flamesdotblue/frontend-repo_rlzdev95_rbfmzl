import { motion, useAnimationControls } from 'framer-motion';
import { Award, Globe, ShieldCheck } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

const Counter = ({ to, label, icon: Icon }) => {
  const [val, setVal] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    let raf;
    const duration = 1200;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    controls.start({ scale: [1, 1.1, 1], transition: { duration: 0.6 } });
    return () => cancelAnimationFrame(raf);
  }, [to, controls]);

  return (
    <motion.div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6FFFD] text-[#1CA7A1]">
        <Icon className="h-6 w-6" />
      </div>
      <motion.div animate={controls} className="text-3xl font-extrabold text-[#2D2D2D]">{val}+</motion.div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </motion.div>
  );
};

const useAutoScroll = (speed = 1.2) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let dir = 1;
    const timer = setInterval(() => {
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) dir = -1;
      if (el.scrollLeft <= 2) dir = 1;
      el.scrollBy({ left: dir * speed, behavior: 'smooth' });
    }, 20);
    return () => clearInterval(timer);
  }, [speed]);
  return ref;
};

const Showcase = () => {
  const gallery = useMemo(
    () => [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1600&auto=format&fit=crop',
    ],
    []
  );
  const [lightbox, setLightbox] = useState(null);
  const galRef = useAutoScroll(1.5);

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Counter to={500} label="Pets Relocated" icon={Award} />
          <Counter to={100} label="% Safety Record" icon={ShieldCheck} />
          <Counter to={29} label="States Covered" icon={Globe} />
        </div>

        {/* Gallery */}
        <div id="gallery" className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] md:text-3xl">Happy Pets. Happier Parents.</h3>
              <p className="mt-2 text-gray-600">A glimpse from our journeys across India.</p>
            </div>
          </div>
          <div ref={galRef} className="mt-8 flex w-full gap-4 overflow-x-auto scroll-smooth">
            {gallery.map((src, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightbox(src)}
                className="relative aspect-[4/3] w-72 shrink-0 overflow-hidden rounded-2xl shadow-md"
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="mt-20">
          <h3 className="text-2xl font-bold text-[#2D2D2D] md:text-3xl">What pet parents say</h3>
          <p className="mt-2 text-gray-600">Real experiences from our community.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              'Ali Pet Transport handled my dog’s move from Delhi to Mumbai perfectly. Safe, on-time, and caring!',
              'Flawless service! Constant updates and my cat arrived calm and happy.',
              'Professional team, clean crate, and smooth door-to-door experience. Highly recommend!',
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-[#F5F5F5] p-6 shadow-sm"
              >
                <p className="text-gray-700">“{t}”</p>
                <div className="mt-4 text-sm font-semibold text-[#2D2D2D]">— Verified Client</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Selected" className="max-h-full max-w-full rounded-xl shadow-2xl" />
        </div>
      )}
    </div>
  );
};

export default Showcase;
