"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Download } from "lucide-react";

const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Recursos", href: "#features" },
    { label: "Como funciona", href: "#how" },
    { label: "Download", href: "#download" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const unsub = scrollY.on("change", (v) => setScrolled(v > 20));
        return unsub;
    }, [scrollY]);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: "fixed",
                top: 0, left: 0, right: 0,
                zIndex: 100,
                padding: "0 24px",
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
                background: scrolled ? "var(--bg-primary)" : "transparent",
                borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
            }}
        >
            {/* Logo */}
            <motion.a
                href="#hero"
                whileHover={{ scale: 1.03 }}
                style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
            >
                <div
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: 10,
                        background: "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 15,
                        fontWeight: 800,
                        color: "var(--bg-primary)",
                        boxShadow: "0 4px 12px rgba(26,20,16,0.2)",
                    }}
                >
                    P
                </div>
                <span style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.3px" }}>
                    Papyde
                </span>
            </motion.a>

            {/* Desktop Nav */}
            <nav style={{ display: "flex", gap: 2, alignItems: "center" }} className="hidden md:flex">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        style={{
                            padding: "6px 14px",
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 500,
                            color: "var(--text-secondary)",
                            textDecoration: "none",
                            transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.background = "var(--bg-secondary)";
                            (e.target as HTMLElement).style.color = "var(--text-primary)";
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.background = "transparent";
                            (e.target as HTMLElement).style.color = "var(--text-secondary)";
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* Actions */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <ThemeToggle />
                <motion.a
                    href="#download"
                    whileHover={{ scale: 1.03, opacity: 0.9 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        padding: "8px 16px",
                        borderRadius: 10,
                        background: "var(--text-primary)",
                        color: "var(--bg-primary)",
                        fontSize: 13,
                        fontWeight: 700,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        boxShadow: "0 2px 10px rgba(26,20,16,0.15)",
                        whiteSpace: "nowrap",
                    }}
                    className="hidden md:inline-flex"
                >
                    <Download size={13} />
                    Download Beta
                </motion.a>
            </div>
        </motion.header>
    );
}
