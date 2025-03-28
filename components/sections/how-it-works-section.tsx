"use client"

import { motion } from "framer-motion"
import { FileText, Zap, Trophy, ChevronDown } from "lucide-react"

export default function HowItWorksSection() {
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
  }

  const scrollToDetails = () => {
    const offersSection = document.getElementById("offers-section")
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-16 md:py-24">
      <motion.h2
        variants={fadeInVariants}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
      >
        Comment ça marche
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <FileText size={32} className="text-indigo-400" />,
            title: "Vous nous décrivez votre activité en 5 minutes",
            description: "Un formulaire simple et rapide pour comprendre vos besoins essentiels.",
          },
          {
            icon: <Zap size={32} className="text-orange-400" />,
            title: "Nous créons votre site en 48h chrono",
            description: "Notre équipe d'experts travaille jour et nuit pour respecter ce délai.",
          },
          {
            icon: <Trophy size={32} className="text-rose-400" />,
            title: "Vous récupérez des clients dès demain",
            description: "Votre site optimisé commence immédiatement à attirer des prospects.",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            custom={index + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl backdrop-blur-md bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex flex-col items-center text-center"
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#030303] border border-white/[0.08] flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <div className="mb-4 p-3 rounded-full bg-white/[0.03] border border-white/[0.08]">{step.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="text-white/60">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeInVariants}
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <button
          onClick={scrollToDetails}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-white hover:bg-white/[0.05] transition-all duration-300"
        >
          C'est vraiment tout?
          <ChevronDown size={18} />
        </button>
      </motion.div>
    </div>
  )
}

