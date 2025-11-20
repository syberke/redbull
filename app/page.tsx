'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Trophy, Zap, Target, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { drivers } from "@/data/drivers";
import { DriverCard } from "@/components/DriverCard";

export default function Home() {
  return (
    <div className="overflow-hidden">

      <Navbar />


      <section className="relative h-screen flex items-center justify-center overflow-hidden">
   <iframe
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  src=""
  title="YouTube Video Background"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
/>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white">
              ORACLE RED BULL
              <br />
              <span className="text-rb-yellow">
                RACING
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Experience the thrill of Formula 1 racing with the worlds most dominant team. Real-time data, live standings, and race results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/drivers">
                <Button size="lg" className="bg-rb-yellow hover:bg-rb-yellow/90 text-rb-navy font-bold text-lg px-8 py-6 transition-all hover:scale-105">
                  Meet Our Drivers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/races">
                <Button size="lg" variant="outline" className="border-2 border-rb-yellow text-white hover:bg-rb-yellow hover:text-rb-navy font-bold text-lg px-8 py-6 transition-all hover:scale-105">
                  View Race Calendar
                </Button>
              </Link>
            </div>
          </motion.div>
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

      {/* Why Red Bull Racing */}
      <section className="py-20 bg-background">
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
                <Card className="h-full border-2 border-transparent hover:border-rb-yellow transition-all duration-300 group">
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
                bg-rb-navy
                py-24
                relative
                overflow-hidden">

  {/* BACKGROUND LOGO */}
  <div className="absolute inset-0
                  bg-[url('/images/redbull-logo.png')]
                  bg-center
                  bg-contain
                  bg-no-repeat
                  opacity-10
                  pointer-events-none" />

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
      {/* Call to Action */}
      <section className="py-20 bg-rb-navy dark:bg-background">
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
