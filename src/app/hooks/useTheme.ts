"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        // Init from localStorage or system preference
        const stored = localStorage.getItem("papyde-theme") as Theme | null;
        if (stored) {
            setTheme(stored);
            applyTheme(stored);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initial = prefersDark ? "dark" : "light";
            setTheme(initial);
            applyTheme(initial);
        }
    }, []);

    function applyTheme(t: Theme) {
        const root = document.documentElement;
        if (t === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }

    function toggleTheme() {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        applyTheme(next);
        localStorage.setItem("papyde-theme", next);
    }

    return { theme, toggleTheme };
}
