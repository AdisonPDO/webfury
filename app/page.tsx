"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import HeroGeometric from "@/components/hero-geometric";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import ComparisonSection from "@/components/sections/comparison-section";
import OffersSection from "@/components/sections/offers-section";
import DemoSection from "@/components/sections/demo-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import FinalCtaSection from "@/components/sections/final-cta-section";
import StickyHeader from "@/components/ui/sticky-header";
import LiveNotification from "@/components/ui/live-notification";
import ChatBot from "@/components/ui/chat-bot";
import ExitPopup from "@/components/ui/exit-popup";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showChat, setShowChat] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasSeenPromoPopup, setHasSeenPromoPopup] = useState(false);

  useEffect(() => {
    // Check if user has seen the promo popup recently (within last 3 hours)
    const lastSeenPromoTime = localStorage.getItem("furyPromoLastSeen");
    const threeHoursInMs = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

    let hasSeenPromo = false;
    if (lastSeenPromoTime) {
      const timePassed = Date.now() - parseInt(lastSeenPromoTime);
      hasSeenPromo = timePassed < threeHoursInMs;
    }

    setHasSeenPromoPopup(hasSeenPromo);

    // Show chat bot after 20 seconds
    const chatTimer = setTimeout(() => {
      setShowChat(true);
    }, 20000);

    // Show notification after 15 seconds
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);

      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 15000);

    // Setup exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenPromo) {
        setShowExitPopup(true);
        // Store current timestamp when user sees the promo
        localStorage.setItem("furyPromoLastSeen", Date.now().toString());
        setHasSeenPromoPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(chatTimer);
      clearTimeout(notificationTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303]">
      <StickyHeader />

      <HeroGeometric title1="Agence de création" title2="WebFury" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20 flex flex-col items-center">
        <HowItWorksSection />
        <ComparisonSection />
        <OffersSection />
        <DemoSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </div>

      {showNotification && <LiveNotification />}
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
      {showExitPopup && <ExitPopup onClose={() => setShowExitPopup(false)} />}
    </div>
  );
}
