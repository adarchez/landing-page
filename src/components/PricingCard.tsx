import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
  index: number;
}

export default function PricingCard({
  features,
  highlight = false,
  index,
}: PricingCardProps) {
  const t = useTranslations("PlansSection");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
        backgroundColor: highlight ? "#2563eb" : "#1f2937", // azul o gris oscuro
        color: "#fff",
      }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-2xl border ${
        highlight ? "border-blue-600" : "border-neutral-800"
      } overflow-hidden transition-colors`}
    >
      <Card className="bg-gray-100 text-neutral-900 dark:bg-neutral-900 dark:text-white">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            {t(`plans.${index}.title`)}
          </h3>
          <p className="text-4xl font-bold mb-4">{t(`plans.${index}.price`)}</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center text-neutral-700 dark:text-neutral-300"
              >
                <Check className="w-4 h-4 mr-2 dark:text-green-400" />
                {t(`plans.${index}.features.${i}.name`)}
              </li>
            ))}
          </ul>
          <Button
            className={
              "transition-colors duration-300 bg-blue-600 text-neutral-100 hover:bg-blue-900 dark:bg-white dark:text-blue-600 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
            }
          >
            {t("button")}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
