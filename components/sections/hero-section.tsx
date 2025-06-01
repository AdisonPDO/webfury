"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection({ pacifico }: { pacifico: any }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="w-full md:w-1/2">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
        >
          <Image
            src="/placeholder.svg?height=20&width=20"
            alt="WebFury"
            width={20}
            height={20}
          />
          <span className="text-sm text-white/60 tracking-wide">WebFury</span>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Votre site pro en 48h pour
            </span>
            <br />
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 mt-4",
                pacifico.className
              )}
            >
              49,99€/mois. Point final.
            </span>
          </h1>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed">
            Pendant que vous lisez ceci, 37 clients potentiels cherchent votre
            entreprise en ligne
          </p>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Votre email"
              className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
            <input
              type="tel"
              placeholder="Votre téléphone"
              className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 rgba(249, 115, 22, 0)",
                "0 0 0 10px rgba(249, 115, 22, 0.3)",
                "0 0 0 0 rgba(249, 115, 22, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 text-lg"
          >
            OBTENEZ VOTRE SITE EN 48H
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-white/60 text-sm">
                Déjà + de 200 TPE équipées
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-white/60 text-sm">Satisfaction 97%</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-white/[0.03] border border-orange-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-orange-500" />
              <span className="text-white font-medium">
                3 places restantes au tarif actuel
              </span>
            </div>
            <div className="flex items-center gap-1 text-orange-500 font-mono">
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/50"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Commerçant souriant"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <div className="text-lg font-medium">Marie, Fleuriste</div>
            <div className="text-sm text-white/70">
              "Mon chiffre d'affaires a augmenté de 32% dès le premier mois"
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
