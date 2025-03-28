"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function ExitPopup({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>

        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-2">ATTENDEZ!</div>
          <div className="text-orange-500 font-bold text-xl mb-4">Code promo exclusif: FURY10</div>

          <p className="text-gray-600 mb-6">
            Profitez de cette offre spéciale et économisez 10% sur le prix final de votre abonnement en utilisant ce code promo.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              navigator.clipboard.writeText('FURY10');
              alert('Code promo FURY10 copié !');
              onClose();
            }}
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 mb-3"
          >
            COPIER LE CODE PROMO
          </motion.button>

          <button onClick={onClose} className="text-gray-500 text-sm hover:underline">
            Non merci, je n'ai pas besoin de réduction
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

