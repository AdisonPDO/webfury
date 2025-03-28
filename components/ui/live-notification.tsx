"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

export default function LiveNotification() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className="fixed bottom-4 right-4 z-40 max-w-xs w-full p-4 rounded-lg bg-white shadow-lg"
    >
      <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <X size={16} />
      </button>

      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <div>
          <div className="text-gray-900 font-medium">Pendant que vous lisez ceci, 37 clients potentiels cherchent votre entreprise en ligne</div>
          <div className="text-gray-500 text-sm">il y a quelques secondes</div>
        </div>
      </div>
    </motion.div>
  )
}

