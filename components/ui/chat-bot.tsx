"use client"

import type React from "react"

import { motion } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { useState, useEffect, useRef } from "react"

type Message = {
  role: 'user' | 'assistant'
  content: string
}

// Pré-prompt pour orienter le chatbot vers le marketing de site web
const PRE_PROMPT = `Tu es un assistant commercial pour WebFury, une agence qui crée des landing pages professionnelles à partir de 19,99€/mois.

Nos offres:
- Offre Standard: 19,99€/mois + 399€ de setup - Landing page simple et efficace
- Offre Pro: 29,99€/mois + 149€ de setup - Landing page professionnelle
- Offre Premium: 39,99€/mois sans frais de setup - Landing page premium qui convertit

Toutes nos offres incluent:
- Landing page professionnelle avec CTA
- Design responsive
- Formulaire de contact optimisé
- SEO optimisé pour convertir
- Hébergement haute performance
- Certificat SSL inclus
- Mise en ligne en 48h

Ta mission est d'aider les visiteurs à comprendre ces offres et les convaincre de prendre rendez-vous sur notre calendly (calendly.com/webfury).

Réponds toujours de façon concise (moins de 3 phrases), enthousiaste, et dirige vers la prise de rendez-vous. Si on te pose une question technique précise, tu peux répondre brièvement mais termine toujours par suggérer un rendez-vous.

Important: Ne jamais inventer d'informations qui ne sont pas mentionnées ici.`

export default function ChatBot({ onClose }: { onClose: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Bonjour! Comment puis-je vous aider à lancer votre landing page professionnelle?" }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Fonction pour faire défiler automatiquement vers le bas
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Ajouter le message de l'utilisateur
    const userMessage = { role: 'user' as const, content: message }
    setMessages(prev => [...prev, userMessage])
    setMessage("")
    setIsLoading(true)

    try {
      // Créer le contexte de conversation pour l'API
      const conversationContext = [
        { role: "system", content: PRE_PROMPT },
        ...messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        { role: "user", content: message }
      ]

      // Utiliser l'API Hugging Face (alternative gratuite)
      // Note: Tu devras remplacer l'URL et l'en-tête d'autorisation par des valeurs valides
      // Cette implémentation simule une réponse pour la démo
      
      // Simulation de délai de réponse API
      setTimeout(() => {
        // Simuler une réponse d'IA basée sur le pré-prompt
        let response: string
        
        if (message.toLowerCase().includes("prix") || message.toLowerCase().includes("tarif") || message.toLowerCase().includes("combien")) {
          response = "Nos tarifs commencent à seulement 19,99€/mois + frais de setup. L'offre Premium à 39,99€/mois est sans frais de setup! Voulez-vous prendre rendez-vous pour en discuter plus en détail?"
        } else if (message.toLowerCase().includes("délai") || message.toLowerCase().includes("temps")) {
          response = "Votre landing page sera prête en 48h! C'est notre garantie. Si nous dépassons ce délai, vous recevez un mois gratuit. Puis-je vous aider à prendre rendez-vous?"
        } else if (message.toLowerCase().includes("seo") || message.toLowerCase().includes("référencement")) {
          response = "Toutes nos landing pages sont optimisées SEO pour maximiser les conversions. Notre offre Premium inclut une stratégie de conversion avancée. Souhaitez-vous en discuter lors d'un appel?"
        } else {
          response = "Je serais ravi de vous aider à créer une landing page qui convertit. Le meilleur moyen est de prendre un rendez-vous rapide sur calendly.com/webfury pour discuter de votre projet!"
        }
        
        setMessages(prev => [...prev, { role: 'assistant', content: response }])
        setIsLoading(false)
      }, 1000)

      /* 
      // Implémentation réelle avec Hugging Face (à décommenter et configurer)
      const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer hf_VOTRE_CLÉ_API", // Remplacer par votre clé API Hugging Face
          },
          body: JSON.stringify({ inputs: JSON.stringify(conversationContext) }),
        }
      )

      const result = await response.json()
      const aiResponse = result.generated_text || "Désolé, je n'ai pas pu traiter votre demande."
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
      setIsLoading(false)
      */
      
    } catch (error) {
      console.error("Error fetching AI response:", error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Désolé, j'ai rencontré un problème. Veuillez réessayer ou nous contacter directement à info@webfury.fr" 
      }])
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {!isExpanded ? (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleExpand}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-lg"
        >
          <MessageSquare size={24} />
        </motion.button>
      ) : (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-80 h-96 rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-4 flex items-center justify-between">
            <div className="font-medium">WebFury Assistant</div>
            <button onClick={toggleExpand} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.role === 'assistant'
                    ? 'bg-indigo-100 text-gray-800 rounded-lg rounded-tl-none'
                    : 'bg-violet-500 text-white rounded-lg rounded-tr-none ml-auto'
                } p-3 max-w-[80%] mb-4`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-indigo-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[80%] mb-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tapez votre message..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:bg-gray-100"
            />
            <button 
              type="submit" 
              disabled={isLoading || !message.trim()}
              className="p-2 rounded-lg bg-indigo-500 text-white disabled:bg-indigo-300"
            >
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      )}
    </div>
  )
}