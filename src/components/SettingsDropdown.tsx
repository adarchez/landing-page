"use client";

import { useTheme } from "next-themes";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings2Icon } from "lucide-react";
import { useTranslations } from "next-intl";
import "flag-icons/css/flag-icons.min.css";
import { Moon, Sun } from "lucide-react";

export default function SettingsDropdown() {
  const t = useTranslations("SettingsSection");
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleThemeChange = (selected: string) => {
    setTheme(selected);
  };

  const handleLanguageChange = (selected: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${selected}`);
    router.push(newPath);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 rounded-full border hover:bg-muted transition">
            <Settings2Icon className="h-5 w-5" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 mt-2 p-4 space-y-4">
          <div>
            <DropdownMenuLabel className="mb-2">
              {t("titleTheme")}
            </DropdownMenuLabel>
            <div className="flex gap-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                onClick={() => handleThemeChange("light")}
                className="flex-1"
              >
                <Sun className="text-yellow-200" />
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                onClick={() => handleThemeChange("dark")}
                className="flex-1"
              >
                <Moon className="text-blue-700" />
              </Button>
            </div>
          </div>

          <div>
            <DropdownMenuLabel className="mb-2">
              {" "}
              {t("titleLang")}
            </DropdownMenuLabel>
            <div className="flex gap-2">
              <Button
                variant={locale === "en" ? "default" : "outline"}
                onClick={() => handleLanguageChange("en")}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <span className="fi fi-gb"></span> EN
              </Button>
              <Button
                variant={locale === "es" ? "default" : "outline"}
                onClick={() => handleLanguageChange("es")}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <span className="fi fi-es"></span> ES
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
