"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={() =>
        document
          .getElementById("contacto")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="fixed bottom-6 right-4 z-50 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm md:hidden"
    >
      <Mail size={16} /> Contáctame
    </motion.button>
  );
}
