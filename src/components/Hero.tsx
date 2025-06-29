import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroIllustration from "../../public/coding.svg"; // descargá una de https://undraw.co y guardala ahí
import { ArrowRight, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="relative w-full min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-neutral-200 via-neutral-600 to-neutral-200 dark:bg-gradient-to-b dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
        <div className="w-full px-6 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Texto + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("title1")}
              <span className="text-blue-800 dark:text-blue-500">
                {t("name")}
              </span>
              <br />
              {t("title2")}
            </motion.h1>
            <motion.div
              className="text-lg md:text-xl dark:text-gray-300 max-w-xl mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg text-neutral-900 dark:text-neutral-400 mb-8 max-w-md">
                {t("about")}
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold transition flex items-center gap-2"
                  onClick={() =>
                    document
                      .getElementById("proyectos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("projectButton")} <ArrowRight size={18} />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="border border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 text-lg font-semibold transition-colors"
                  onClick={() =>
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail size={18} />
                  <span> {t("contactButton")}</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Ilustración */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full max-w-md mx-auto"
          >
            <Image
              src={HeroIllustration}
              alt="Ilustración desarrollador"
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
