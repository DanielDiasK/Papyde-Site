"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--bg-secondary)",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
            }}
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait">
                {theme === "dark" ? (
                    <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, y: 10 }}
                        animate={{ rotate: 0, opacity: 1, y: 0 }}
                        exit={{ rotate: 90, opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "flex" }}
                    >
                        <Sun size={16} />
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, y: 10 }}
                        animate={{ rotate: 0, opacity: 1, y: 0 }}
                        exit={{ rotate: -90, opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "flex" }}
                    >
                        <Moon size={16} />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
