import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Landing Page para Agencia Creativa",
    image: "/projects/landing-agencia.jpg",
    type: "Freelance",
    description:
      "Diseño y desarrollo de una landing responsive para una agencia de diseño en Buenos Aires.",
    liveUrl: "https://cliente-ejemplo.com",
    githubUrl: "https://github.com/amaroweb/landing-agencia",
  },
  {
    title: "Dashboard Cripto Personal",
    image: "/projects/dashboard-crypto.jpg",
    type: "Personal",
    description:
      "App de visualización de portafolio cripto con React + Tailwind + API externa.",
    liveUrl: "https://amaroweb-crypto.vercel.app",
    githubUrl: "https://github.com/amaroweb/crypto-dashboard",
  },
  {
    title: "Clon de Loom",
    image: "/projects/loom-clone.jpg",
    type: "Demo",
    description:
      "Clon funcional de Loom para mostrar habilidades con Next.js, Tailwind y grabación de pantalla.",
    liveUrl: "https://cliente-ejemplo.com",
    githubUrl: "https://github.com/amaroweb/loom-clone",
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
            <motion.p
              className="text-gray-600 dark:text-neutral-400 mb-12 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Aquí puedes ver algunos de mis trabajos más recientes, donde
              aplico las últimas tecnologías y mejores prácticas de desarrollo
              web.
            </motion.p>
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
                    type={project.type}
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
