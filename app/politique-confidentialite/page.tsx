"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      id: "collecte",
      title: "1. Collecte des informations",
      content: "WebFury collecte les informations que vous nous fournissez lors de votre inscription à nos services, notamment vos nom, prénom, adresse email, numéro de téléphone et informations de facturation. Nous collectons également automatiquement certaines informations lors de votre visite sur notre site, comme votre adresse IP, votre navigateur et votre comportement de navigation."
    },
    {
      id: "utilisation",
      title: "2. Utilisation des informations",
      content: (
        <div>
          <p className="mb-2">Les informations collectées sont utilisées pour :</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Fournir, exploiter et maintenir nos services</li>
            <li>Améliorer et personnaliser votre expérience</li>
            <li>Comprendre comment vous utilisez nos services</li>
            <li>Développer de nouveaux produits et services</li>
            <li>Communiquer avec vous pour vous fournir des mises à jour</li>
            <li>Vous fournir un support client</li>
            <li>Envoyer des messages marketing (avec votre consentement)</li>
          </ul>
        </div>
      )
    },
    {
      id: "partage",
      title: "3. Partage des informations",
      content: (
        <div>
          <p className="mb-2">Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations avec :</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Nos fournisseurs de services qui nous aident à fournir nos services</li>
            <li>Les autorités légales lorsque nous y sommes légalement obligés</li>
          </ul>
        </div>
      )
    },
    {
      id: "cookies",
      title: "4. Cookies et technologies similaires",
      content: "Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site, analyser comment vous l'utilisez et personnaliser notre contenu et nos publicités. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur."
    },
    {
      id: "securite",
      title: "5. Sécurité des données",
      content: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés."
    },
    {
      id: "conservation",
      title: "6. Conservation des données",
      content: "Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. Après cette période, vos données sont supprimées ou anonymisées."
    },
    {
      id: "droits",
      title: "7. Vos droits",
      content: (
        <div>
          <p className="mb-2">Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition</li>
            <li>Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé</li>
          </ul>
          <p className="mt-2">Pour exercer ces droits, contactez-nous à privacy@webfury.fr.</p>
        </div>
      )
    },
    {
      id: "modifications",
      title: "8. Modifications de cette politique",
      content: "Nous pouvons modifier cette politique de confidentialité de temps à autre. Nous vous informerons de toute modification importante."
    },
    {
      id: "contact",
      title: "9. Contact",
      content: "Si vous avez des questions concernant cette politique ou nos pratiques en matière de confidentialité, contactez-nous à privacy@webfury.fr."
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
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-indigo-500/[0.03] blur-3xl" />
      
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-rose-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
            <Shield size={32} className="text-orange-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white/90 to-orange-300">
            Politique de Confidentialité
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Table des matières
          </h2>
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
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 text-center text-white/60 max-w-3xl mx-auto"
        >
          Chez WebFury, nous attachons une grande importance à la protection de vos données personnelles. 
          Cette politique détaille comment nous collectons, utilisons et protégeons vos informations.
        </motion.p>
        
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
              <h2 className="text-2xl font-bold mb-4 text-orange-300">{section.title}</h2>
              <div className="text-white/70 leading-relaxed">{section.content}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={fadeInVariants}
          custom={sections.length + 1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
            <span className="text-white/60">Dernière mise à jour: 28 mars 2025</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="px-6 py-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white/70 hover:text-white transition-colors">
              Retour à l'accueil
            </Link>
            <Link href="/cgu" className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500/80 to-rose-500/80 text-white font-medium hover:from-orange-500 hover:to-rose-500 transition-colors">
              Conditions Générales d'Utilisation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}