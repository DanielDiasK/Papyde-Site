"use client";

import { motion } from "framer-motion";
import { Download, Monitor, Shield, Zap } from "lucide-react";

const perks = [
    { icon: <Monitor size={18} />, text: "Roda nativamente no Windows 10/11" },
    { icon: <Shield size={18} />, text: "Sem anúncios, sem rastreamento" },
    { icon: <Zap size={18} />, text: "Leve, rápido e sem internet obrigatória" },
];

export default function DownloadSection() {
    return (
        <section
            id="download"
            style={{ padding: "120px 24px", background: "var(--bg-secondary)" }}
        >
            <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Beta badge */}
                    <div style={{ marginBottom: 24 }}>
                        <span
                            style={{
                                display: "inline-block",
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "var(--bg-primary)",
                                background: "var(--text-primary)",
                                padding: "4px 12px",
                                borderRadius: 20,
                            }}
                        >
                            Beta — Acesso antecipado
                        </span>
                    </div>

                    <h2
                        style={{
                            fontSize: "clamp(30px, 5vw, 52px)",
                            fontWeight: 900,
                            letterSpacing: "-1.5px",
                            lineHeight: 1.1,
                            color: "var(--text-primary)",
                            marginBottom: 16,
                        }}
                    >
                        Disponível para{" "}
                        <span className="gradient-text">Windows</span>
                    </h2>

                    <p
                        style={{
                            fontSize: 16,
                            color: "var(--text-secondary)",
                            lineHeight: 1.65,
                            marginBottom: 40,
                            maxWidth: 440,
                            margin: "0 auto 40px",
                        }}
                    >
                        Baixe a versão beta do Papyde gratuitamente. Experimente antes de qualquer um e ajude a moldar o produto.
                    </p>

                    {/* Download button */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.04, boxShadow: "0 10px 40px rgba(26,20,16,0.22)" }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "16px 36px",
                            borderRadius: 14,
                            background: "var(--text-primary)",
                            color: "var(--bg-primary)",
                            fontSize: 16,
                            fontWeight: 700,
                            textDecoration: "none",
                            boxShadow: "0 4px 20px rgba(26,20,16,0.18)",
                            marginBottom: 20,
                        }}
                    >
                        <Download size={18} />
                        Baixar para Windows
                    </motion.a>

                    <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 48 }}>
                        Versão Beta • Windows 10 / 11 • .exe • ~24 MB • Gratuito
                    </p>

                    {/* Perks */}
                    <div
                        style={{
                            display: "flex",
                            gap: 12,
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {perks.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "10px 16px",
                                    borderRadius: 10,
                                    border: "1px solid var(--border)",
                                    background: "var(--bg-primary)",
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: "var(--text-secondary)",
                                }}
                            >
                                <span style={{ color: "var(--accent-warm)" }}>{p.icon}</span>
                                {p.text}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
