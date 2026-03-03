"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote:
            "O Papyde mudou completamente como meu time organiza projetos. É como o Notion, mas mais rápido e bonito.",
        name: "Ana Beatriz",
        role: "Product Designer @ Startup",
        avatar: "👩‍💻",
        color: "#3d3028",
    },
    {
        quote:
            "Finalmente uma ferramenta que não me distrai. Tudo no lugar certo, sem frescura. Adoro as pastinhas!",
        name: "Carlos Melo",
        role: "Freelancer & Criador",
        avatar: "🧑‍🎨",
        color: "#7a6a5e",
    },
    {
        quote:
            "Uso todo dia para minha rotina de estudos. O modo escuro com as cores neutras é simplesmente perfeito.",
        name: "Juliana Costa",
        role: "Estudante de Medicina",
        avatar: "👩‍⚕️",
        color: "#c4a882",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            style={{ padding: "120px 24px", background: "var(--bg-secondary)" }}
        >
            <div style={{ maxWidth: 1080, margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
                    <span
                        style={{
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--accent-warm)",
                            display: "block",
                            marginBottom: 12,
                        }}
                    >
                        Depoimentos
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(28px, 4vw, 42px)",
                            fontWeight: 800,
                            letterSpacing: "-0.8px",
                            color: "var(--text-primary)",
                            lineHeight: 1.2,
                        }}
                    >
                        Amado por quem{" "}
                        <span className="gradient-text">pensa diferente</span>
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
                        gap: 20,
                    }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(26,20,16,0.1)" }}
                            style={{
                                background: "var(--bg-primary)",
                                border: "1px solid var(--border)",
                                borderRadius: 16,
                                padding: "28px 28px 32px",
                                position: "relative",
                                overflow: "hidden",
                                transition: "box-shadow 0.25s",
                            }}
                        >
                            {/* Top accent */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0, left: 0, right: 0,
                                    height: 3,
                                    background: t.color,
                                    borderRadius: "16px 16px 0 0",
                                }}
                            />

                            {/* Quote mark */}
                            <div
                                style={{
                                    fontSize: 48,
                                    lineHeight: 1,
                                    color: `${t.color}50`,
                                    fontFamily: "Georgia, serif",
                                    marginBottom: 8,
                                    marginTop: 4,
                                    userSelect: "none",
                                }}
                            >
                                &ldquo;
                            </div>

                            <p
                                style={{
                                    fontSize: 15,
                                    color: "var(--text-primary)",
                                    lineHeight: 1.7,
                                    marginBottom: 24,
                                    fontStyle: "italic",
                                }}
                            >
                                {t.quote}
                            </p>

                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        background: `${t.color}22`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 20,
                                        border: `1.5px solid ${t.color}45`,
                                    }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)" }}>
                                        {t.name}
                                    </div>
                                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
