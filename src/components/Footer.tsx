import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center dark:text-neutral-500 mt-20 text-sm">
      © 2025 Darchez Dev. Todos los derechos reservados.
      <div className="flex gap-6 mt-6 justify-center">
        <a
          href="https://github.com/adarchez/"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-gray-400 hover:text-gray-400 dark:hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/amaro-darchez/  "
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-gray-400 hover:text-gray-400 dark:hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </footer>
  );
}
