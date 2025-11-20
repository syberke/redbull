"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function DriverCard({ driver }: { driver: any }) {
  const [tilt, setTilt] = useState(true);

  return (
    <motion.div
      onClick={() => setTilt(!tilt)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ rotate: tilt ? -4 : 4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-[360px] sm:w-[420px] rounded-3xl overflow-hidden
                 bg-[#0a1123] border border-white/10 shadow-2xl cursor-pointer
                 hover:scale-[1.06] transition-all duration-300"
    >
      {/* RedBull Logo Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image
          src="/redbull-logo.png" // ganti sesuai path kamu
          fill
          className="object-contain object-center"
          alt="RedBull Logo"
        />
      </div>

      {/* Number & Signature */}
      <div className="absolute top-5 left-5 z-20">
        <p className="text-6xl font-extrabold text-rb-red drop-shadow-xl">
          {driver.number}
        </p>
        <p className="text-lg text-white opacity-90">{driver.signature}</p>
      </div>

      {/* Driver Image */}
      <div className="relative h-[480px] w-full z-10">
        <Image
          src={driver.image}
          alt={driver.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Bottom Info */}
      <div className="p-7 relative z-20 bg-gradient-to-t from-black/90 to-transparent">
        <h2 className="text-3xl font-extrabold text-white tracking-wide">
          {driver.name}
        </h2>

        <div className="mt-4 space-y-2 text-gray-200 text-lg font-medium">
          {driver.stats.map((item: string, index: number) => (
            <p key={index} className="tracking-wide">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Glow border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-white/10
                      shadow-[0_0_50px_#ff0033aa] pointer-events-none" />
    </motion.div>
  );
}
