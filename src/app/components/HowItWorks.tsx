"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PenLine, FolderOpen, Users } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Capture ideias",
        description:
            "Escreva notas, faça uploads, adicione links. O Papyde organiza enquanto você pensa.",
        icon: <PenLine size={22} strokeWidth={1.8} />,
        color: "#3d3028",
    },
    {
        number: "02",
        title: "Organize em pastas",
        description:
            "Estruture seu conhecimento em espaços visuais. Pastas, tags, e filtros inteligentes.",
        icon: <FolderOpen size={22} strokeWidth={1.8} />,
        color: "#7a6a5e",
    },
    {
        number: "03",
        title: "Colabore em tempo real",
        description:
            "Convide seu time. Editem juntos, deixem comentários, e construam juntos.",
        icon: <Users size={22} strokeWidth={1.8} />,
        color: "#c4a882",
    },
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            id="how"
            style={{ padding: "120px 24px", maxWidth: 900, margin: "0 auto", position: "relative" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: "center", marginBottom: 72 }}
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
                    Como funciona
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
                    Três passos para{" "}
                    <span className="gradient-text">clareza total</span>
                </h2>
            </motion.div>

            <div style={{ position: "relative" }}>
                {/* Animated vertical line */}
                <div
                    style={{
                        position: "absolute",
                        left: 28,
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background: "var(--border-light)",
                    }}
                >
                    <motion.div
                        style={{
                            width: "100%",
                            background: "linear-gradient(180deg, #1a1410, #7a6a5e, #c4a882)",
                            height: lineHeight,
                            transformOrigin: "top",
                        }}
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            style={{ display: "flex", gap: 28, alignItems: "flex-start", paddingLeft: 4 }}
                        >
                            {/* Step dot */}
                            <div
                                style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: "50%",
                                    background: `${step.color}22`,
                                    border: `2px solid ${step.color}50`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    position: "relative",
                                    zIndex: 1,
                                    color: step.color,
                                }}
                            >
                                {step.icon}
                            </div>

                            {/* Content */}
                            <div style={{ paddingTop: 10 }}>
                                <div
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 700,
                                        letterSpacing: "0.08em",
                                        color: step.color,
                                        marginBottom: 6,
                                    }}
                                >
                                    PASSO {step.number}
                                </div>
                                <h3
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "var(--text-primary)",
                                        marginBottom: 8,
                                        letterSpacing: "-0.3px",
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: 15,
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.65,
                                        maxWidth: 480,
                                    }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
