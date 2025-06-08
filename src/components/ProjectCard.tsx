import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectProps = {
  title: string;
  image: string;
  type: "Freelance" | "Personal" | "Demo";
  description?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  image,
  type,
  description,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  return (
    <motion.div
      className="bg-grey-900 dark:bg-neutral-900 rounded-xl overflow-hidden border border-gray-200 shadow-sm dark:border-neutral-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <motion.span
          className="absolute top-4 left-4 bg-green-100 text-green-800 dark:bg-blue-600 dark:text-white text-xs font-bold px-2 py-1 rounded-full shadow"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        >
          🆕 Nuevo
        </motion.span>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-60 object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <span className="text-sm dark:text-blue-400 font-semibold">{type}</span>
        <h3 className="text-xl font-bold dark:text-white">{title}</h3>
        {description && (
          <p className="text-sm dark:text-neutral-400">{description}</p>
        )}
        <div className="flex gap-4 mt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center gap-1"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center gap-1"
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
