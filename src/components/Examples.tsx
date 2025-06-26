import { motion } from "framer-motion";

const examples = [
  {
    title: "Loom",
    url: "https://www.loom.com",
    desc: "Diseño limpio con foco en conversiones",
  },
  {
    title: "Superlist",
    url: "https://www.superlist.com",
    desc: "Animaciones suaves y experiencia moderna",
  },
  {
    title: "TypingMind",
    url: "https://www.typingmind.com",
    desc: "Aplicación web simple y profesional",
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto mt-20">
      <motion.div
        className="text-3xl sm:text-4xl font-bold dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-gray-700 dark:text-white text-2xl font-semibold mb-6 text-center">
          Inspiraciones de diseño
        </h2>
      </motion.div>
      <motion.div
        className="text-gray-600 dark:text-neutral-400 mb-12 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-center mb-10">
          Estos sitios son ejemplos de calidad visual y técnica que puedo tomar
          como referencia para crear tu web.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((site, i) => (
            <motion.div
              key={site.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="backdrop-blur-md bg-white/50 border border-white/80 dark:bg-neutral-900 dark:border-white/10 p-4 rounded-xl transition-shadow duration-300 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-1">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {site.title}
                </a>
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-400">
                {site.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
