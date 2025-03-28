"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function OrderSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.8 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <motion.div
      custom={0}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] -z-10" />

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Commandez votre site en 48h</h2>

        <p className="text-white/60 mb-6 text-center">
          Obtenez un site web professionnel, rapide et optimisé en seulement 48 heures. Notre équipe d'experts est prête
          à transformer votre vision en réalité.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
          >
            Commander maintenant
            <ArrowRight size={18} />
          </motion.button>

          <span className="text-white/40 text-sm">Satisfaction garantie ou remboursé</span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
            <div className="text-xl font-bold text-white mb-1">48h</div>
            <div className="text-white/40 text-sm">Livraison rapide</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
            <div className="text-xl font-bold text-white mb-1">100%</div>
            <div className="text-white/40 text-sm">Satisfaction client</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
            <div className="text-xl font-bold text-white mb-1">24/7</div>
            <div className="text-white/40 text-sm">Support technique</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

