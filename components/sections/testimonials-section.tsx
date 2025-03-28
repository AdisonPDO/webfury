"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Tess Coquilhat",
      business: "Restaurant Le Bistrot",
      photo: "/placeholder.svg?height=100&width=100",
      quote:
        "12 nouveaux clients dès le premier mois. Le retour sur investissement a été immédiat!",
    },
    {
      name: "Laura Boscher",
      business: "Assistante maternelle",
      photo: "/placeholder.svg?height=100&width=100",
      quote:
        "Taux de remplissage atteint en seulement 15 jours grâce à WebFury. Une vraie révolution pour mon activité!",
    },
    {
      name: "Marciano Pereira",
      business: "Artisan Peintre",
      photo: "/placeholder.svg?height=100&width=100",
      quote:
        "Nombre de devis doublé en 40 jours. WebFury a complètement transformé ma visibilité en ligne.",
    },
  ];

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
        Ils nous font confiance
      </motion.h2>

      <motion.p
        variants={fadeInVariants}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-white/60 mb-12 max-w-2xl mx-auto"
      >
        Des résultats concrets pour des entrepreneurs comme vous
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            custom={index + 2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl backdrop-blur-md bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#030303]">
                <Image
                  src={testimonial.photo || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="pt-10 text-center">
              <div className="text-xl font-bold text-white mb-1">
                {testimonial.name}
              </div>
              <div className="text-white/60 mb-4">{testimonial.business}</div>
              <div className="text-white/80 italic">"{testimonial.quote}"</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
