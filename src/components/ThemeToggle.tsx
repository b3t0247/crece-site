import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load initial theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const initial = (saved as "light" | "dark") || system;
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group rounded-md px-3 py-2 text-sm tracking-widest uppercase xl:text-base"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform duration-200 ease-out group-hover:rotate-12" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-200 ease-out group-hover:-rotate-12" />
      )}
    </Button>
  );
}
