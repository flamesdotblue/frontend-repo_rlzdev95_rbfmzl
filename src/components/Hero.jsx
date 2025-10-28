import { motion } from 'framer-motion';
import { PhoneCall, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-[#1CA7A1] via-[#34c9c3] to-[#FFC857]">
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-70"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.25) 0, transparent 35%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.3) 0, transparent 45%)',
          backgroundSize: '200% 200%'
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center text-white md:flex-row md:items-center md:justify-between md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Your Pet’s Comfort is Our Journey
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Nationwide Door-to-Door Pet Relocation You Can Trust.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#1CA7A1] shadow-xl transition-all hover:translate-y-[-2px] hover:shadow-2xl"
            >
              <PhoneCall className="h-5 w-5" />
              Book a Ride
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <MessageSquare className="h-5 w-5" />
              Get a Quote
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm">All-India Coverage</div>
            <div className="rounded-full bg-white/20 px-4 py-2 text-sm">Trained Handlers</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-12 w-full md:mt-0 md:w-1/2"
        >
          <div className="relative mx-auto aspect-[4/3] max-w-lg">
            <motion.img
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600&auto=format&fit=crop"
              alt="Happy dog in transit"
              className="h-full w-full rounded-3xl object-cover shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6"
              initial={{ x: -10, y: 10, rotate: -2, opacity: 0 }}
              animate={{ x: [0, 10, 0], y: [0, -6, 0], rotate: [-2, 2, -2], opacity: 1 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2582/2582203.png"
                alt="Pet transport van"
                className="h-20 w-20 drop-shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
