'use client';

import { DriverCard } from "@/components/DriverCard";
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { drivers } from "@/data/drivers";
import { motion } from 'framer-motion';
import { ArrowRight, Target, Trophy, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  {/* FULLSCREEN CAROUSEL ADVANCED */}
const slides = [
  {
    src: "/crusel1.avif",
    title: "Red Bull Racing Dominance",
    desc: "Precision, power, and unmatched engineering excellence."
  },
  {
    src: "/crusel2.webp",
    title: "The Fastest Pit Crew",
    desc: "Experience world-record pit stop performance."
  },
  {
    src: "/crusel3.gif",
    title: "Max Verstappen Speed",
    desc: "Unleashing pure racing spirit with every lap."
  },
];

const [index, setIndex] = useState(0);
const duration = 5000;
const progress = (index % slides.length) * duration;

useEffect(() => {
  const timer = setInterval(() => {
    setIndex(prev => (prev + 1) % slides.length);
  }, duration);
  return () => clearInterval(timer);
}, []);

  return (
    <div className="overflow-hidden">

      <Navbar />


<section className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* Gambar Carousel */}
  <div className="absolute inset-0 overflow-hidden">
    {slides.map((slide, i) => (
      <motion.img
        key={i}
        src={slide.src}
        alt="Slide"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ opacity: index === i ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
    ))}
  </div>

  <div className="absolute inset-0 bg-black/50" />

  {/* TEKS SUPER TURUN */}
  <div className="absolute inset-0 flex flex-col items-center text-center z-20 top-[73%] -translate-y-1/2">

    <motion.h2
      key={index + '-title'}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-5xl font-bold drop-shadow-lg"
    >
      {slides[index].title}
    </motion.h2>

    <motion.p
      key={index + '-desc'}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-base md:text-lg mt-3 max-w-xl opacity-90 drop-shadow"
    >
      {slides[index].desc}
    </motion.p>


    <Link href="/team">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 flex items-center gap-2 text-white tracking-widest text-sm"
      >
        DISCOVER <span className="text-xl">›</span>
      </motion.button>
    </Link>

</div>


{/* PANAH KIRI - STYLE FERRARI */}
  <button
    onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
    className="absolute left-10 top-1/2 -translate-y-1/2 text-white text-4xl font-light z-30"
  >
    ‹
  </button>

  {/* PANAH KANAN - STYLE FERRARI */}
  <button
    onClick={() => setIndex((index + 1) % slides.length)}
    className="absolute right-10 top-1/2 -translate-y-1/2 text-white text-4xl font-light z-30"
  >
    ›
  </button>

  {/* INDICATOR BULAT BAWAH */}
<div className="absolute bottom-10 w-full flex justify-center gap-3 z-30">


    {slides.map((_, i) => (
      <div key={i} className="relative w-5 h-5">
        {/* Lingkaran outline */}
        <div className="w-5 h-5 rounded-full border-2 border-white opacity-70"></div>

        {/* Progress fill */}
        <motion.div
          key={index === i ? "progress-" + i : "reset-" + i}
          className="absolute inset-0 rounded-full border-2 border-rb-yellow"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={index === i ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: (index === i ? duration / 1000 : 0), ease: "linear" }}
        />
      </div>
    ))}
  </div>
</section>


      {/* Why Red Bull Racing */}
      <section className="py-20   bg-[#0B0D10]">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Pushing the boundaries of performance and innovation">
            Why Red Bull Racing
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Championship Legacy',
                description: 'Multiple World Championships with a winning mentality and proven track record of success.',
                color: 'rb-yellow',
              },
              {
                icon: Zap,
                title: 'Cutting-Edge Technology',
                description: 'Advanced aerodynamics and engineering excellence driving innovation in Formula 1.',
                color: 'rb-red',
              },
              {
                icon: Target,
                title: 'Precision & Performance',
                description: 'Relentless pursuit of perfection with data-driven strategies and elite teamwork.',
                color: 'rb-sky',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
               <Card className="h-full border-2 border-[#1A1D22] hover:border-rb-yellow transition-all duration-300 group bg-[#0F1114]">

                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${feature.color}/10 mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-rb-yellow transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 <section>
<div className="min-h-screen
                bg-[#0B0D10]
                py-24
                relative
                overflow-hidden">


  {/* BACKGROUND LOGO */}
  <div className="absolute inset-0
                  bg-[url('/redbull.png')]
                  bg-bottom
                  bg-no-repeat
                  bg-[length:100%]
                  opacity-10
                  pointer-events-none
                   scale-x-[-1]
                   " />
                  


  <div className="container mx-auto px-4 relative z-10">
    <h1 className="text-center text-6xl font-extrabold text-white mb-20 tracking-wide">
      Meet the Team
    </h1>

    <div className="flex flex-wrap justify-center gap-14">
      {drivers.map((d, i) => (
        <DriverCard key={i} driver={d} />
      ))}
    </div>
  </div>

</div>

      </section>
        {/* Spline 3D full layar */}
      <section className="relative h-screen w-full overflow-hidden">
        <iframe
          src="https://my.spline.design/honoringredbullracing-x1RVFz6LgMOCTBtzFMx6Q4QZ/"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
        />
      </section>
      {/* Call to Action */}
      <section className="py-20   bg-[#0B0D10]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Experience the Action?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore live standings, race results, and detailed driver statistics powered by real-time F1 data.
            </p>
            <Link href="/team">
              <Button size="lg" className="bg-rb-red hover:bg-rb-red/90 text-white font-bold text-lg px-8 py-6 transition-all hover:scale-105">
                Discover Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
