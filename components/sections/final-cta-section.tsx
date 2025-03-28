"use client"

import { motion } from "framer-motion"
import { Zap, ArrowRight, MessageCircle } from "lucide-react"

export default function FinalCtaSection() {
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

  const openCalendly = () => {
    // Open Calendly in a new window
    window.open("https://calendly.com/webfury", "_blank")
  }
  
  const openDiscord = () => {
    // Open Discord in a new window
    window.open("https://discord.gg/JDMkBb9Ar5", "_blank")
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-16 md:py-24">
      <motion.div
        variants={fadeInVariants}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative p-8 md:p-12 rounded-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-rose-500/20 backdrop-blur-md" />

        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            DANS 48H, VOTRE CONCURRENCE AURA UN PROBLÈME: VOUS.
          </h2>

          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Ne laissez plus vos clients potentiels aller chez vos concurrents. Prenez l'avantage dès maintenant avec un
            site web professionnel qui convertit.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-8 w-full max-w-md mx-auto">
            <motion.button
              onClick={openCalendly}
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
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 w-full md:w-auto max-w-xs"
            >
              <Zap size={20} className="fill-white" />
              LANCEZ VOTRE SITE MAINTENANT
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              onClick={openDiscord}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-all w-full md:w-auto max-w-xs"
            >
              <MessageCircle size={20} />
              DISCORD
            </motion.button>
          </div>

          <p className="text-white/50 text-sm">Support 7j/7 • <a href="/cgu" className="hover:underline">CGU</a> • <a href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</a></p>
        </div>
      </motion.div>
    </div>
  )
}

