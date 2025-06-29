"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import "flag-icons/css/flag-icons.min.css";

const languages = [
  { code: "en", label: "EN", flag: "/flags/en.svg" },
  { code: "es", label: "ES", flag: "/flags/es.svg" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const current = languages.find((l) => l.code === locale) ?? languages[0];
  const [open, setOpen] = useState(false);

  const handleChange = (code: string) => {
    setOpen(false);
    const newPath = pathname.replace(`/${locale}`, `/${code}`);
    router.push(newPath);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <span className={locale === "es" ? "fi fi-es" : "fi fi-us"}></span>
            <span>{current.label}</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <DropdownMenuContent className="mt-2 w-28">
                {languages.map(({ code, label }) => (
                  <DropdownMenuItem
                    key={code}
                    onSelect={() => handleChange(code)}
                    className="flex items-center gap-2"
                  >
                    <span
                      className={label === "ES" ? "fi fi-es" : "fi fi-us"}
                    ></span>
                    <span>{label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </motion.div>
          )}
        </AnimatePresence>
      </DropdownMenu>
    </div>
  );
}
