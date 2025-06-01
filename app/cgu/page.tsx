"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CGUPage() {
  const sections = [
    {
      id: "presentation",
      title: "1. Présentation du service",
      content: "WebFury est un service de création et d'hébergement de sites web professionnels proposé par WebFury SAS. Notre offre propose la création d'un site web en 48 heures, avec un abonnement mensuel à partir de 49,99€."
    },
    {
      id: "tarifs",
      title: "2. Tarifs et modalités de paiement",
      content: "Nos tarifs sont disponibles sur notre site. Le paiement s'effectue mensuellement. Des frais d'installation peuvent s'appliquer selon l'offre choisie. Tous les prix sont indiqués en euros et TTC."
    },
    {
      id: "creation",
      title: "3. Création et mise en ligne",
      content: "WebFury s'engage à créer et mettre en ligne votre site dans un délai de 48 heures ouvrées suite à la réception de l'ensemble des éléments nécessaires (contenus, images, informations). Si ce délai n'est pas respecté, nous vous offrons un mois d'abonnement."
    },
    {
      id: "propriete",
      title: "4. Propriété intellectuelle",
      content: "Le client reste propriétaire des contenus fournis. WebFury conserve la propriété intellectuelle des templates, designs et code source. Le client dispose d'une licence d'utilisation pendant la durée de l'abonnement."
    },
    {
      id: "modifications",
      title: "5. Modifications et mises à jour",
      content: "Les modifications du site sont incluses selon le forfait choisi. Certaines modifications complexes peuvent faire l'objet d'un devis supplémentaire."
    },
    {
      id: "hebergement",
      title: "6. Hébergement et disponibilité",
      content: "Nos services incluent l'hébergement du site. Nous nous engageons à maintenir une disponibilité de 99,5% sur l'année."
    },
    {
      id: "resiliation",
      title: "7. Résiliation",
      content: "Le client peut résilier son abonnement à tout moment avec un préavis de 30 jours. La résiliation entraîne la mise hors ligne du site à la fin de la période payée."
    },
    {
      id: "limitations",
      title: "8. Limitations de responsabilité",
      content: "WebFury ne peut être tenu responsable des contenus publiés par le client, ni des problèmes liés à des facteurs externes (coupure internet, problèmes de navigateur, etc.)."
    },
    {
      id: "support",
      title: "9. Support client",
      content: "Notre support client est disponible 7j/7 par email ou via notre formulaire de contact."
    },
    {
      id: "modification-cgu",
      title: "10. Modification des CGU",
      content: "WebFury se réserve le droit de modifier les présentes CGU à tout moment. Les clients seront informés des modifications substantielles."
    },
    {
      id: "loi-applicable",
      title: "11. Loi applicable",
      content: "Les présentes CGU sont soumises au droit français."
    }
  ]

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 + i * 0.05,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }
  
  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />
      
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-sm border-b border-white/[0.08]">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
        >
          Conditions Générales d'Utilisation
        </motion.h1>
        
        {/* Table des matières */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map((section, index) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="text-white/70 hover:text-white hover:underline transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              id={section.id}
              key={section.id}
              variants={fadeInVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] shadow-lg hover:bg-white/[0.05] transition-colors"
            >
              <h2 className="text-2xl font-bold mb-4 text-indigo-300">{section.title}</h2>
              <p className="text-white/70 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={fadeInVariants}
          custom={sections.length + 1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm">Dernière mise à jour: 28 mars 2025</p>
          
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/" className="px-6 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white/70 hover:text-white transition-colors">
              Retour à l'accueil
            </Link>
            <Link href="/politique-confidentialite" className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500/80 to-violet-500/80 text-white font-medium hover:from-indigo-500 hover:to-violet-500 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}