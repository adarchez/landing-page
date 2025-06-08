import { useTheme } from "next-themes";
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
import { motion } from "framer-motion";

const logos = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-sky-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-300" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express", icon: SiExpress, color: "text-white" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-300" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-300" },
  { name: "Stripe", icon: SiStripe, color: "text-purple-300" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-300" },
  { name: "Shadcn/UI", icon: SiShadcnui, color: "text-neutral-300" },
  { name: "Material UI", icon: SiMui, color: "text-indigo-300" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-indigo-400" },
];

// Separar los logos en 3 grupos
const splitLogos = [logos.slice(0, 5), logos.slice(5, 10), logos.slice(10)];

function repeatLogos(arr: typeof logos, times: number) {
  return Array(times).fill(arr).flat();
}

const animationClasses = [
  "animate-marquee",
  "animate-marquee-fast",
  "animate-marquee-slow",
];

export default function StackCarousel3Lanes() {
  const { theme } = useTheme();
  const iconSize = 56;

  return (
    <div className="overflow-hidden py-16 space-y-12 bg-gradient-to-b from-grey-900 via-neutral-300 to_neutral-950 dark:bg-gradient-to-b dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-gray-700 text-3xl sm:text-4xl font-bold dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Stack Tecnológico
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-neutral-400 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Herramientas que utilizo para construir productos robustos, modernos y
          escalables.
        </motion.p>
      </div>
      {splitLogos.map((logoGroup, idx) => (
        <div
          key={idx}
          className="relative group overflow-x-auto sm:overflow-visible whitespace-nowrap scroll-smooth"
        >
          <div
            className={`
              flex gap-12 sm:min-w-max overflow-visible
              ${animationClasses[idx]}
              group-hover:[animation-play-state:paused]
              perspective-1000
            `}
          >
            {repeatLogos(logoGroup, 6).map((logo, i) => {
              const Icon = logo.icon;
              const iconColor =
                theme === "light"
                  ? logo.color.replace("text-", "text-") + " text-opacity-100"
                  : logo.color + " text-opacity-90";

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.3, rotate: 3, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                  className="flex flex-col items-center min-w-[64px] sm:min-w-[100px] hover:cursor-pointer group relative transition-shadow duration-300 will-change-transform"
                >
                  <div
                    className="inline-flex flex-col items-center w-28 transition-transform duration-300 hover:scale-110"
                    style={{ overflow: "visible" }}
                  >
                    <Icon size={iconSize} className={`${iconColor} mb-2`} />
                    <p className="text-gray-700 dark:text-neutral-300 text-sm font-medium text-center">
                      {logo.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
