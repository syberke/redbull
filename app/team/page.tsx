'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Trophy,
  Users,
  Wrench,
  Target,
  TrendingUp,
  Award,
} from 'lucide-react';
import Image from 'next/image';

const teamValues = [
  {
    title: 'Performance',
    description:
      'We push the limits of what is possible, constantly striving for perfection in every aspect of racing.',
    icon: Target,
  },
  {
    title: 'Innovation',
    description:
      'Advanced aerodynamics, hybrid power units, and data analytics drive our competitive edge.',
    icon: TrendingUp,
  },
  {
    title: 'Teamwork',
    description:
      'From engineers to drivers, every team member plays a crucial role in our success.',
    icon: Users,
  },
  {
    title: 'Excellence',
    description:
      'Our commitment to excellence has made us one of the most successful teams in F1 history.',
    icon: Trophy,
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0B0D10]">
<section className="relative h-screen w-full overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/team.jpg"
      alt="Red Bull Racing Background"
      fill
      className="object-cover"
    />
  </div>

  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

  {/* Content */}
<div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20">

  <h1
    className="
      text-left
      text-6xl md:text-[11rem]
      font-black
      leading-none
      text-white
      drop-shadow-2xl
      relative
      translate-y-10 md:translate-y-20
      md:ml-40
    "
    style={{ letterSpacing: '2px' }}
  >
    THE TEAM
  </h1>

</div>


  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0B0D10]" />

</section>


     

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Our commitment to excellence drives every decision we make">
            Our Values
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-transparent hover:border-rb-sky transition-all group">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-rb-yellow/10 group-hover:bg-rb-yellow/20 transition-colors">
                        <value.icon className="h-6 w-6 text-rb-yellow" />
                      </div>
                      <CardTitle className="text-2xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Powered by passion, precision, and performance">
            About Red Bull Racing
          </SectionTitle>

          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <Card>
              <CardContent className="p-8">
                <p className="mb-4">
                  Oracle Red Bull Racing is one of the most successful teams in
                  Formula 1 history. Based in Milton Keynes, United Kingdom,
                  the team has dominated the sport with innovative engineering
                  and exceptional driving talent.
                </p>
                <p className="mb-4">
                  Our journey began in 2005, and since then, we have secured
                  multiple Constructor Championships and Driver Championships,
                  establishing ourselves as a powerhouse in modern F1 racing.
                </p>
                <p>
                  With a team of over 800 dedicated professionals, from
                  engineers and mechanics to strategists and support staff, we
                  work tirelessly to push the boundaries of what is possible in
                  motorsport.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0A1018] border-rb-yellow/20">
              <CardContent className="p-8 text-white dark:text-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-rb-yellow">
                  Our Mission
                </h3>
                <p>
                  To compete at the highest level of motorsport, inspiring fans
                  around the world through innovation, performance, and the
                  relentless pursuit of excellence. We aim to push the
                  boundaries of technology and human achievement, setting new
                  standards in Formula 1 racing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B0D10]
">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Trophy className="h-16 w-16 mx-auto mb-6 text-rb-yellow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Building the Future of Racing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every race, every lap, every second counts. Join us as we continue
              to write history in the world of Formula 1.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
