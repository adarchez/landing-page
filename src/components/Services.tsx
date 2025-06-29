import { motion } from "framer-motion";
import { Layout, MonitorCheck, CreditCard, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const servicios = [
  {
    icon: Layout,
    title: "Landing pages modernas",
    desc: "Sitios rápidos, responsivos y atractivos para destacar tu marca.",
  },
  {
    icon: MonitorCheck,
    title: "Dashboards personalizados",
    desc: "Interfaces intuitivas para visualizar y controlar tu negocio.",
  },
  {
    icon: CreditCard,
    title: "Integraciones con Stripe y Supabase",
    desc: "Procesos de pago y backend escalables listos para producción.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    desc: "Optimización técnica para lograr posicionamiento y velocidad.",
  },
];

export default function Services() {
  const t = useTranslations("ServicesSection");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="max-w-6xl mx-auto mt-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-gray-700 dark:text-white text-3xl sm:text-4xl font-bold dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicios.map((servicio, i) => (
            <motion.div
              key={servicio.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="shadow-sm rounded-xl flex-col hover:scale-105 transition-transform duration-300"
            >
              <Card className="bg-gray-100 text-neutral-900 dark:bg-neutral-900 dark:text-white border border-gray-200 shadow-sm dark:border-neutral-800 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex gap-4 items-start">
                  <servicio.icon className="w-6 h-6 text-gray-700 dark:text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {t(`services.${i}.title`)}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-neutral-400 mt-1">
                      {t(`services.${i}.desc`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
