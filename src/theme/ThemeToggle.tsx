import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";
import { Moon, SunMedium } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        className="relative"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <SunMedium
          size={20}
          className={`transition-transform ${
            theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <Moon
          size={20}
          className={`absolute transition-transform ${
            theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
      </Button>
    </div>
  );
};
