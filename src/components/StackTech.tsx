"use client";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiStripe,
  SiFramer,
  SiShadcnui,
  SiMui,
  SiBootstrap,
} from "react-icons/si";

const stack = [
  { name: "Next.js", icon: <SiNextdotjs size={32} />, color: "text-white" },
  { name: "React", icon: <SiReact size={32} />, color: "text-sky-400" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={32} />,
    color: "text-cyan-300",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={32} />,
    color: "text-blue-300",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={32} />,
    color: "text-yellow-300",
  },
  { name: "Node.js", icon: <SiNodedotjs size={32} />, color: "text-green-400" },
  { name: "Express", icon: <SiExpress size={32} />, color: "text-white" },
  {
    name: "Firebase",
    icon: <SiFirebase size={32} />,
    color: "text-orange-300",
  },
  { name: "MongoDB", icon: <SiMongodb size={32} />, color: "text-green-300" },
  {
    name: "Supabase",
    icon: <SiSupabase size={32} />,
    color: "text-emerald-300",
  },
  { name: "Stripe", icon: <SiStripe size={32} />, color: "text-purple-300" },
  {
    name: "Framer Motion",
    icon: <SiFramer size={32} />,
    color: "text-pink-300",
  },
  {
    name: "Shadcn/UI",
    icon: <SiShadcnui size={32} />,
    color: "text-neutral-300",
  },
  {
    name: "Material UI",
    icon: <SiMui size={32} />,
    color: "text-indigo-300",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap size={32} />,
    color: "text-indigo-400",
  },
];

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="relative py-20 px-4 bg-gradient-to-b from-grey-900 via-neutral-300 to_neutral-950 dark:bg-gradient-to-b dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Stack Tecnológico
          </motion.h2>

          <motion.p
            className="dark:text-neutral-400 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Herramientas que utilizo para construir productos robustos, modernos
            y escalables.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {stack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-200 dark:bg-neutral-900 border border-gray-200 shadow-sm dark:border-neutral-800 rounded-xl p-5 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`mb-2 ${tech.color}`}>{tech.icon}</div>
                <p className="text-gray-700 dark:text-neutral-300 text-sm font-medium text-center">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
