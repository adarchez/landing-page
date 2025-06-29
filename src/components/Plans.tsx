import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import { useTranslations } from "next-intl";

const planes = [
  {
    title: "Básico",
    price: "$100",
    features: ["Landing page", "Diseño responsivo", "SEO básico"],
  },
  {
    title: "Profesional",
    price: "$250",
    features: [
      "Todo lo del Básico",
      "Integración con Stripe",
      "Dashboard personalizado",
    ],
    highlight: true,
  },
  {
    title: "Empresarial",
    price: "$400",
    features: [
      "E-commerce completo",
      "Base de datos Supabase",
      "Soporte prioritario",
    ],
  },
];

export default function Projects() {
  const t = useTranslations("PlansSection");

  return (
    <section className="max-w-5xl mx-auto mt-20">
      <motion.div
        className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-gray-700 dark:text-white text-2xl font-semibold mb-6 text-center">
          {t("title")}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planes.map((plan, i) => (
            <PricingCard key={plan.title} {...plan} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
