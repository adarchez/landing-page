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
  SiRedux,
  SiGraphql,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiPython,
  SiWebpack,
  SiEslint,
  SiSpring,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const logos = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-sky-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-300" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-400" },
  { name: "Stripe", icon: SiStripe, color: "text-purple-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
  { name: "Shadcn/UI", icon: SiShadcnui, color: "text-neutral-300" },
  { name: "Material UI", icon: SiMui, color: "text-indigo-300" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-indigo-400" },
  { name: "Redux", icon: SiRedux, color: "text-purple-400" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Netlify", icon: SiNetlify, color: "text-cyan-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "Webpack", icon: SiWebpack, color: "text-purple-600" },
  { name: "ESLint", icon: SiEslint, color: "text-purple-400" },
  { name: "Spring", icon: SiSpring, color: "text-green-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
];

function splitIntoGroups<T>(arr: T[], groups: number): T[][] {
  const result: T[][] = [];
  const groupSize = Math.floor(arr.length / groups);
  let startIndex = 0;

  for (let i = 0; i < groups; i++) {
    let endIndex = startIndex + groupSize;
    // Para los últimos grupos, agregamos los elementos restantes
    if (i === groups - 1) {
      endIndex = arr.length;
    }
    result.push(arr.slice(startIndex, endIndex));
    startIndex = endIndex;
  }

  return result;
}

// Separar los logos en 3 grupos
const splitLogos = splitIntoGroups(logos, 3);

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
  const t = useTranslations("StackSection");

  return (
    <div className="overflow-hidden py-24 space-y-12 bg-gradient-to-b from-grey-900 via-neutral-300 to_neutral-950 dark:bg-gradient-to-b dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-gray-700 text-3xl sm:text-4xl font-bold dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-neutral-400 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("desc")}
        </motion.p>
      </div>
      {splitLogos.map((logoGroup, idx) => (
        <div
          key={idx}
          className="relative group overflow-hidden sm:overflow-visible whitespace-nowrap scroll-smooth"
        >
          <div
            className={`
              flex gap-12 sm:min-w-max overflow-visible
              ${animationClasses[idx]}
              group-hover:[animation-play-state:paused]
              perspective-1000
            `}
          >
            {repeatLogos(logoGroup, 8).map((logo, i) => {
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
                  className="flex flex-col items-center min-w-[64px] sm:min-w-[100px] hover:cursor-pointer group relative transition-shadow duration-300 will-change-transform overflow-visible"
                >
                  <div
                    className="inline-flex flex-col items-center w-28 transition-transform duration-300 hover:scale-110 relative z-10 overflow-visible"
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
