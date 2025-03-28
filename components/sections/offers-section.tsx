"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Star } from "lucide-react"

export default function OffersSection() {
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

  return (
    <div id="offers-section" className="w-full max-w-5xl mx-auto py-16 md:py-24">
      <motion.h2
        variants={fadeInVariants}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
      >
        Nos offres
      </motion.h2>

      <motion.p
        variants={fadeInVariants}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-white/60 mb-12 max-w-2xl mx-auto"
      >
        Des solutions simples et transparentes pour tous les budgets
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          variants={fadeInVariants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex flex-col"
        >
          <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 w-full" />

          <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            ÉCONOMIQUE
          </div>

          <div className="p-6 h-full flex flex-col">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Offre Standard</h3>
              <p className="text-gray-600 mb-6">Landing page simple et efficace</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">
                  19,99€<span className="text-lg font-normal text-gray-500">/mois</span>
                </div>
                <div className="text-gray-500">+ 399€ de setup unique</div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Landing page professionnelle avec CTA",
                  "Design responsive (mobile)",
                  "Formulaire de contact optimisé",
                  "SEO optimisé pour convertir",
                  "Hébergement haute performance",
                  "Certificat SSL inclus",
                  "1 modification mensuelle",
                  "Mise en ligne en 48h",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check size={18} className="text-green-500 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.button
              onClick={openCalendly}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            >
              CHOISIR STANDARD
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex flex-col"
        >
          <div className="h-2 bg-gradient-to-r from-indigo-500 to-violet-500 w-full" />

          <div className="absolute top-4 right-4 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAIRE
          </div>

          <div className="p-6 h-full flex flex-col">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Offre Pro</h3>
              <p className="text-gray-600 mb-6">Landing page professionnelle</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">
                  29,99€<span className="text-lg font-normal text-gray-500">/mois</span>
                </div>
                <div className="text-gray-500">+ 149€ de setup unique</div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Landing page professionnelle avec CTA",
                  "Design responsive optimisé",
                  "Formulaire de contact optimisé",
                  "SEO optimisé pour convertir",
                  "Hébergement haute performance",
                  "Certificat SSL inclus",
                  "3 modifications mensuelles",
                  "Mise en ligne en 48h",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check size={18} className="text-green-500 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.button
              onClick={openCalendly}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              CHOISIR PRO
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-white shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex flex-col"
        >
          <div className="h-2 bg-gradient-to-r from-rose-500 to-orange-500 w-full" />

          <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Star size={12} className="fill-white" />
            RECOMMANDÉ
          </div>

          <div className="p-6 h-full flex flex-col">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Offre Premium</h3>
              <p className="text-gray-600 mb-6">Landing page premium qui convertit</p>

              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">
                  39,99€<span className="text-lg font-normal text-gray-500">/mois</span>
                </div>
                <div className="text-gray-500">Sans frais de setup</div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Landing page professionnelle avec CTA",
                  "Design premium ultra-convertissant",
                  "Formulaire de contact optimisé",
                  "SEO avancé + stratégie de conversion",
                  "Intégration réseaux sociaux",
                  "Certificat SSL inclus",
                  "Modifications illimitées",
                  "Support prioritaire 7j/7",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check size={18} className="text-green-500 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.button
              onClick={openCalendly}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
            >
              CHOISIR PREMIUM
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInVariants}
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-white font-medium">48h ou GRATUIT</span>
        </div>
      </motion.div>
    </div>
  )
}

