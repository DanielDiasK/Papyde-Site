"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
                padding: "60px 24px 40px",
                borderTop: "1px solid var(--border)",
                background: "var(--bg-secondary)",
            }}
        >
            <div
                style={{
                    maxWidth: 1080,
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 40,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                {/* Brand */}
                <div style={{ maxWidth: 260 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: 8,
                                background: "var(--text-primary)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 14,
                                fontWeight: 700,
                                color: "var(--bg-primary)",
                            }}
                        >
                            P
                        </div>
                        <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>
                            Papyde
                        </span>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>
                        Seu workspace para ideias, notas e documentos. Feito com carinho para quem pensa diferente.
                    </p>
                    <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                        {[Github, Twitter, Linkedin].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.12, color: "var(--accent-warm)" }}
                                style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: 8,
                                    border: "1px solid var(--border)",
                                    background: "var(--bg-primary)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--text-muted)",
                                    transition: "all 0.2s",
                                    cursor: "pointer",
                                }}
                            >
                                <Icon size={14} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                {[
                    {
                        heading: "Produto",
                        links: ["Recursos", "Changelog", "Roadmap", "Status"],
                    },
                    {
                        heading: "Empresa",
                        links: ["Sobre", "Blog", "Carreiras", "Imprensa"],
                    },
                    {
                        heading: "Legal",
                        links: ["Privacidade", "Termos", "Cookies", "Segurança"],
                    },
                ].map((col) => (
                    <div key={col.heading}>
                        <div
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: "var(--text-muted)",
                                marginBottom: 14,
                            }}
                        >
                            {col.heading}
                        </div>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                            {col.links.map((link) => (
                                <li key={link}>
                                    <motion.a
                                        href="#"
                                        whileHover={{ x: 3, color: "var(--text-primary)" }}
                                        style={{
                                            fontSize: 13,
                                            color: "var(--text-secondary)",
                                            textDecoration: "none",
                                            display: "inline-block",
                                            transition: "color 0.15s",
                                        }}
                                    >
                                        {link}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div
                style={{
                    maxWidth: 1080,
                    margin: "40px auto 0",
                    paddingTop: 24,
                    borderTop: "1px solid var(--border-light)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12,
                }}
            >
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    © 2025 Papyde. Todos os direitos reservados.
                </span>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    Feito com ❤️ no Brasil
                </span>
            </div>
        </motion.footer>
    );
}
