import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Landing Page Estudio de Arquitectura",
    image: "/projects/arq.png",
    type: "Freelance",
    description:
      "Diseño y desarrollo de una landing responsive para un estudio de arquitectura. Next.js + Tailwind.css",
    liveUrl: "https://cliente-ejemplo.com",
    githubUrl: "https://github.com/adarchez/arq-landingpage",
  },
  {
    title: "Dashboard de activos financieros",
    image: "/projects/dashboard.png",
    type: "Personal",
    description:
      "App de visualización de portafolio cripto/acciones. React + MaterialUI + Firebase + API externa.",
    liveUrl: "https://amaroweb-crypto.vercel.app",
    githubUrl:
      "https://github.com/adarchez/investfolio/tree/master/frontend/firebase-vite/",
  },
  {
    title: "E-commerce con Next.js",
    image: "/projects/ecommerce.png",
    type: "Freelance",
    description:
      "Desarrollo de un e-commerce completo con Next.js, Tailwind.css y Sanity.io. Incluye carrito, checkout (stripe) y gestión de productos.",
    liveUrl: "https://cliente-ejemplo.com",
    githubUrl: "https://github.com/adarchez/ecommerce",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.section
        id="proyectos"
        className="py-16 bg-grey-600 dark:bg-neutral-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <section
          id="proyectos"
          className="py-16 px-6 bg-grey-600 dark:bg-neutral-950"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-gray-700 text-3xl sm:text-4xl font-bold dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Proyectos Destacados
            </motion.h2>
            <motion.div
              className="text-gray-600 dark:text-neutral-400 mb-12 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Aquí puedes ver algunos de mis trabajos más recientes, donde
              aplico las últimas tecnologías y mejores prácticas de desarrollo
              web.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, id) => (
                  <ProjectCard
                    key={id}
                    title={project.title}
                    image={project.image}
                    type={project.type as "Freelance" | "Personal" | "Demo"}
                    description={project.description}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </motion.section>
    </motion.div>
  );
}
