"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

export default function ComparisonSection() {
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
    window.open("https://calendly.com/adison-apdev/30min", "_blank");
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
        Comparaison choc
      </motion.h2>

      <motion.p
        variants={fadeInVariants}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-white/60 mb-12 max-w-2xl mx-auto"
      >
        Pourquoi payer plus cher et attendre plus longtemps pour un résultat
        identique?
      </motion.p>

      <motion.div
        variants={fadeInVariants}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="p-6 rounded-2xl backdrop-blur-md bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
          <div className="text-xl font-bold mb-4 text-white/80">
            Agence Web Classique
          </div>

          <div className="mb-6">
            <div className="text-3xl font-bold text-white mb-1">4000€</div>
            <div className="text-white/60">+ frais mensuels cachés</div>
          </div>

          <div className="space-y-4 mb-6">
            {[
              {
                label: "Délai de livraison",
                value: "6 à 8 semaines",
                negative: true,
              },
              {
                label: "Processus",
                value: "Complexe, multiples réunions",
                negative: true,
              },
              {
                label: "Modifications",
                value: "Facturées en supplément",
                negative: true,
              },
              {
                label: "Résultat",
                value: "Site souvent surdimensionné",
                negative: true,
              },
              { label: "Support", value: "Limité et lent", negative: true },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.negative ? (
                  <X size={18} className="text-red-500 mt-1 shrink-0" />
                ) : (
                  <Check size={18} className="text-green-500 mt-1 shrink-0" />
                )}
                <div>
                  <div className="text-white/80">{item.label}</div>
                  <div
                    className={
                      item.negative ? "text-red-400" : "text-green-400"
                    }
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-indigo-500/[0.1] to-rose-500/[0.1] border border-white/[0.15] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
          <div className="text-xl font-bold mb-4 text-white">WebFury</div>

          <div className="mb-6">
            <div className="text-3xl font-bold text-white mb-1">
              49,99€/mois
            </div>
            <div className="text-white/60">tout compris, sans surprise</div>
          </div>

          <div className="space-y-4 mb-6">
            {[
              {
                label: "Délai de livraison",
                value: "48h chrono garanti",
                negative: false,
              },
              {
                label: "Processus",
                value: "Simple, 5 minutes de votre temps",
                negative: false,
              },
              {
                label: "Modifications",
                value: "Incluses dans l'abonnement",
                negative: false,
              },
              {
                label: "Résultat",
                value: "Site optimisé pour convertir",
                negative: false,
              },
              { label: "Support", value: "Réactif 7j/7", negative: false },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.negative ? (
                  <X size={18} className="text-red-500 mt-1 shrink-0" />
                ) : (
                  <Check size={18} className="text-green-500 mt-1 shrink-0" />
                )}
                <div>
                  <div className="text-white">{item.label}</div>
                  <div
                    className={
                      item.negative ? "text-red-400" : "text-green-400"
                    }
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
          >
            Économisez 3750€ - Commencez maintenant
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
