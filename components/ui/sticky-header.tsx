"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyHeader() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setIsVisible(value > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const openCalendly = () => {
    // Open Calendly in a new window
    window.open("https://calendly.com/adison-apdev/30min", "_blank");
  };

  if (!isVisible) return null;

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.08] shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white font-bold">WebFury</div>

        <motion.button
          onClick={openCalendly}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 text-sm"
        >
          OBTENEZ VOTRE SITE EN 48H
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
