"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Free",
        price: "R$0",
        period: "/mês",
        description: "Para quem está começando",
        color: "#7a6a5e",
        features: [
            "5 pastas ativas",
            "1.000 blocos por workspace",
            "Colaboração com 2 convidados",
            "Apps web e mobile",
            "Suporte via comunidade",
        ],
        cta: "Começar grátis",
        featured: false,
    },
    {
        name: "Pro",
        price: "R$29",
        period: "/mês",
        description: "Para indivíduos produtivos",
        color: "#1a1410",
        features: [
            "Pastas ilimitadas",
            "Blocos ilimitados",
            "Colaboração com 10 convidados",
            "Histórico de versão (30 dias)",
            "IA integrada",
            "Suporte prioritário",
        ],
        cta: "Assinar agora",
        featured: true,
    },
    {
        name: "Team",
        price: "R$79",
        period: "/mês",
        description: "Para times e empresas",
        color: "#c4a882",
        features: [
            "Tudo do Pro",
            "Convidados ilimitados",
            "Permissões avançadas",
            "Analytics de workspace",
            "SSO & SAML",
            "Suporte dedicado",
        ],
        cta: "Falar com vendas",
        featured: false,
    },
];

export default function Pricing() {
    return (
        <section
            id="pricing"
            style={{ padding: "120px 24px", maxWidth: 1080, margin: "0 auto" }}
        >
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
                    Preços
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
                    Simples e{" "}
                    <span className="gradient-text">transparente</span>
                </h2>
                <p
                    style={{
                        marginTop: 16,
                        fontSize: 16,
                        color: "var(--text-secondary)",
                        maxWidth: 420,
                        margin: "16px auto 0",
                    }}
                >
                    Sem surpresas. Cancele quando quiser.
                </p>
            </motion.div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 20,
                    alignItems: "start",
                }}
            >
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -4 }}
                        style={{
                            background: plan.featured
                                ? "var(--text-primary)"
                                : "var(--bg-primary)",
                            border: plan.featured
                                ? "2px solid var(--text-primary)"
                                : "1px solid var(--border)",
                            borderRadius: 20,
                            padding: "32px 28px",
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: plan.featured
                                ? "0 8px 48px rgba(26,20,16,0.18)"
                                : "var(--card-shadow)",
                        }}
                    >
                        {/* Featured badge */}
                        {plan.featured && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: 16,
                                    right: 16,
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    color: "var(--text-primary)",
                                    background: "var(--accent-sand)",
                                    padding: "4px 10px",
                                    borderRadius: 20,
                                }}
                            >
                                Popular
                            </div>
                        )}

                        <div
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: plan.featured ? "var(--accent-sand)" : plan.color,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                marginBottom: 8,
                            }}
                        >
                            {plan.name}
                        </div>

                        <div
                            style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}
                        >
                            <span
                                style={{
                                    fontSize: 40,
                                    fontWeight: 800,
                                    color: plan.featured ? "#f5f0eb" : "var(--text-primary)",
                                    letterSpacing: "-1.5px",
                                }}
                            >
                                {plan.price}
                            </span>
                            <span
                                style={{
                                    fontSize: 14,
                                    color: plan.featured ? "rgba(245,240,235,0.5)" : "var(--text-muted)",
                                }}
                            >
                                {plan.period}
                            </span>
                        </div>

                        <p
                            style={{
                                fontSize: 13,
                                color: plan.featured ? "rgba(245,240,235,0.6)" : "var(--text-muted)",
                                marginBottom: 28,
                            }}
                        >
                            {plan.description}
                        </p>

                        <hr
                            className="notion-hr"
                            style={{
                                marginBottom: 24,
                                background: plan.featured ? "rgba(245,240,235,0.1)" : "var(--border)",
                            }}
                        />

                        <ul
                            style={{
                                listStyle: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: 12,
                                marginBottom: 32,
                            }}
                        >
                            {plan.features.map((f) => (
                                <li
                                    key={f}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        fontSize: 14,
                                        color: plan.featured ? "rgba(245,240,235,0.8)" : "var(--text-secondary)",
                                    }}
                                >
                                    <Check
                                        size={14}
                                        color={plan.featured ? "#c4a882" : plan.color}
                                        strokeWidth={3}
                                    />
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                width: "100%",
                                padding: "12px 0",
                                borderRadius: 12,
                                border: plan.featured
                                    ? "none"
                                    : `1.5px solid var(--border)`,
                                background: plan.featured
                                    ? "#c4a882"
                                    : "transparent",
                                color: plan.featured ? "#1a1410" : "var(--text-primary)",
                                fontSize: 14,
                                fontWeight: 700,
                                cursor: "pointer",
                                transition: "all 0.2s",
                            }}
                        >
                            {plan.cta} {plan.featured ? "→" : ""}
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
