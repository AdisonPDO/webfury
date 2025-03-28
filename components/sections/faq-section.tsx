"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "C'est vraiment tout compris à ce prix?",
      answer:
        "Oui, absolument. Le prix mensuel de 29,99€ inclut l'hébergement, le nom de domaine, le certificat SSL, les mises à jour de sécurité et le support technique. Les frais de setup uniques de 250€ couvrent la création complète de votre site. Aucun frais caché.",
    },
    {
      question: "Et si je n'ai pas de contenu ou de logo?",
      answer:
        "Pas de problème! Nous pouvons créer un contenu de base à partir de vos indications et utiliser votre nom d'entreprise comme logo temporaire. Vous pourrez ensuite enrichir le contenu progressivement. Nous proposons également des services de création de logo et de rédaction de contenu en option.",
    },
    {
      question: "Pourquoi si peu cher comparé aux autres?",
      answer:
        "Notre approche est différente. Nous avons développé des processus optimisés et des templates hautement convertissants spécifiques à chaque secteur d'activité. Cela nous permet de créer rapidement des sites efficaces sans les coûts traditionnels des agences web qui réinventent la roue à chaque projet.",
    },
    {
      question: "Que se passe-t-il si j'arrête de payer?",
      answer:
        "Si vous arrêtez votre abonnement, votre site restera en ligne pendant 30 jours supplémentaires. Ensuite, il sera mis hors ligne mais vos données seront conservées pendant 3 mois. Vous pouvez à tout moment exporter l'intégralité de votre contenu. Nous pouvons également vous fournir une archive complète de votre site moyennant des frais administratifs minimes.",
    },
    {
      question: "Combien vous coûte l'absence de site web chaque mois?",
      answer:
        "Selon plusieurs études, une entreprise locale sans présence web perd en moyenne entre 10% et 30% de clients potentiels. Pour un commerce réalisant 10 000€ de chiffre d'affaires mensuel, cela représente entre 1 000€ et 3 000€ de manque à gagner chaque mois. Notre solution à 29,99€/mois est donc un investissement extrêmement rentable.",
    },
  ]

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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-16 md:py-24">
      <motion.h2
        variants={fadeInVariants}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
      >
        Questions fréquentes
      </motion.h2>

      <motion.p
        variants={fadeInVariants}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-white/60 mb-12 max-w-2xl mx-auto"
      >
        Tout ce que vous devez savoir avant de vous lancer
      </motion.p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            custom={index + 2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl backdrop-blur-md bg-white/[0.03] border border-white/[0.08] overflow-hidden"
          >
            <button onClick={() => toggleFaq(index)} className="w-full p-5 flex items-center justify-between text-left">
              <span className="text-lg font-medium text-white">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp size={20} className="text-white/60" />
              ) : (
                <ChevronDown size={20} className="text-white/60" />
              )}
            </button>

            {openIndex === index && (
              <div className="p-5 pt-0 text-white/70 border-t border-white/[0.08]">{faq.answer}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

