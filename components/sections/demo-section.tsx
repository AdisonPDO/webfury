"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DemoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const examples = [
    {
      image: "/carrousel/tess_studio.png",
      title: "Tess Coquilhat",
      result: "De 0 à 8 prospects/mois en 30 jours",
      type: "Studio Graphique",
    },
    {
      image: "/carrousel/tresors_laura.png",
      title: "Les petits trésors de Laura",
      result: "Taux de remplissage atteint en seulement 15 jours",
      type: "Assistante maternelle",
    },
    {
      image: "/carrousel/mani_peinture.png",
      title: "Mani Peinture",
      result: "Nombre de devis doublé en 40 jours",
      type: "Artisan Peintre",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === examples.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? examples.length - 1 : prev - 1));
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const openCalendly = () => {
    // Open Calendly in a new window
    window.open("https://calendly.com/webfury", "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-16 md:py-24">
      <motion.h2
        variants={fadeInVariants}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
      >
        DES SITES QUI CONVERTISSENT, PAS QUI IMPRESSIONNENT
      </motion.h2>

      <motion.p
        variants={fadeInVariants}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-white/60 mb-12 max-w-2xl mx-auto"
      >
        Des exemples concrets de sites qui génèrent des résultats mesurables
      </motion.p>

      <motion.div
        variants={fadeInVariants}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl shadow-black/50">
          <Image
            src={examples[activeIndex].image || "/placeholder.svg"}
            alt={examples[activeIndex].title}
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="px-2 py-1 rounded-full bg-white/20 text-xs text-white">
                {examples[activeIndex].type}
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {examples[activeIndex].title}
            </div>
            <div className="text-green-400 font-medium">
              {examples[activeIndex].result}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {examples.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeInVariants}
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 flex justify-center"
      >
        <motion.button
          onClick={openCalendly}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
        >
          Le vôtre dans 48h?
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </div>
  );
}
