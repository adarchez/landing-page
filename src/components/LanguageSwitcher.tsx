"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "../i18n/routing";

export default function LanguageSwitcher() {
  const locales = routing.locales;
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // reemplaza el locale en la URL
    router.replace(segments.join("/"));
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => handleChange(e.target.value)}
      className="bg-transparent text-sm border px-2 py-1 rounded"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale === "es" ? "Español" : "English"}
        </option>
      ))}
    </select>
  );
}
