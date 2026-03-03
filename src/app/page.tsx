"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FolderCard from "./components/FolderCard";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import { Download, ArrowRight, FileText, Database, WifiOff, Sparkles, Zap, LayoutTemplate, Link2, Monitor, Lock, Moon, PenLine, Grid3x3, ShieldCheck, BrainCircuit, BellRing, FolderOpen } from "lucide-react";

// Feature folder cards — warm neutral tabs
const featureCards = [
  {
    color: "var(--bg-primary)",
    tabColor: "#9a8878",
    title: "Notas inteligentes",
    description:
      "Capture pensamentos com formatação rica, mídias embutidas e links bidirecionais. Sua memória em texto.",
    icon: <PenLine size={20} strokeWidth={1.8} />,
    tag: "Escrita",
    tagColor: "#9a8878",
    delay: 0,
  },
  {
    color: "var(--bg-primary)",
    tabColor: "#7a6a5e",
    title: "Banco de dados visual",
    description:
      "Tabelas, kanban, calendário e galeria. Veja seus dados no modo que faz mais sentido para você.",
    icon: <Grid3x3 size={20} strokeWidth={1.8} />,
    tag: "Organização",
    tagColor: "#7a6a5e",
    delay: 0.08,
  },
  {
    color: "var(--bg-primary)",
    tabColor: "#7a6a5e",
    title: "Funciona offline",
    description:
      "Seus dados ficam na sua máquina. Trabalhe sem internet, sem depender de servidores de terceiros.",
    icon: <ShieldCheck size={20} strokeWidth={1.8} />,
    tag: "Privacidade",
    tagColor: "#7a6a5e",
    delay: 0.16,
  },
  {
    color: "var(--bg-primary)",
    tabColor: "#a08060",
    title: "IA integrada",
    description:
      "Resuma, reescreva, gere conteúdo e faça perguntas sobre seus documentos com IA nativa.",
    icon: <BrainCircuit size={20} strokeWidth={1.8} />,
    tag: "IA",
    tagColor: "#a08060",
    delay: 0.24,
  },
  {
    color: "var(--bg-primary)",
    tabColor: "#c4a882",
    title: "Automações",
    description:
      "Conecte tarefas, defina lembretes e dispare ações automáticas baseadas em eventos do seu workspace.",
    icon: <BellRing size={20} strokeWidth={1.8} />,
    tag: "Produtividade",
    tagColor: "#a08060",
    delay: 0.32,
  },
  {
    color: "var(--bg-primary)",
    tabColor: "#8c7d72",
    title: "Templates prontos",
    description:
      "+200 templates para reuniões, sprints, diários, estudos e muito mais. Pronto pra usar.",
    icon: <FolderOpen size={20} strokeWidth={1.8} />,
    tag: "Templates",
    tagColor: "#b8956a",
    delay: 0.4,
  },
];

// Ticker
const tickerItems = [
  { icon: FileText, label: "Notas" },
  { icon: Database, label: "Bancos de dados" },
  { icon: WifiOff, label: "Offline first" },
  { icon: Sparkles, label: "IA nativa" },
  { icon: Zap, label: "Automações" },
  { icon: LayoutTemplate, label: "Templates" },
  { icon: Link2, label: "Links bidirecionais" },
  { icon: Monitor, label: "Windows nativo" },
  { icon: Lock, label: "Privacidade" },
  { icon: Moon, label: "Modo escuro" },
];

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "16px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(90deg, var(--bg-secondary), transparent)",
          zIndex: 2, pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(-90deg, var(--bg-secondary), transparent)",
          zIndex: 2, pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 0, width: "max-content", alignItems: "center" }}
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "0 28px",
                fontSize: 13,
                fontWeight: 500,
                color: "var(--text-muted)",
                whiteSpace: "nowrap",
              }}
            >
              <Icon size={14} strokeWidth={1.8} />
              {item.label}
              <span style={{ color: "var(--border)", marginLeft: 16, fontSize: 8 }}>●</span>
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

// Animated counter
function AnimCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const step = value / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= value) { setCount(value); clearInterval(timer); }
            else { setCount(Math.floor(start)); }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
        }}
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px 6px 8px",
                borderRadius: 20,
                border: "1px solid var(--border)",
                background: "var(--bg-secondary)",
                fontSize: 12,
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: 32,
                cursor: "default",
              }}
            >
              <span
                style={{
                  background: "var(--text-primary)",
                  borderRadius: 12,
                  padding: "2px 8px",
                  fontSize: 11,
                  color: "var(--bg-primary)",
                  fontWeight: 700,
                }}
              >
                BETA
              </span>
              <Monitor size={13} style={{ display: "inline", verticalAlign: "middle" }} /> Agora disponível para Windows
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                fontWeight: 900,
                letterSpacing: "-2.5px",
                lineHeight: 1.08,
                color: "var(--text-primary)",
                marginBottom: 24,
              }}
            >
              Pense. Escreva.{" "}
              <span className="gradient-text">Organize.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                maxWidth: 520,
                margin: "0 auto 40px",
              }}
            >
              O workspace definitivo para notas, documentos e organização pessoal.
              Roda no seu Windows, funciona offline e é completamente gratuito na beta.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}
            >
              <motion.a
                href="/Papyde Setup 1.0.0.exe"
                download
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(26,20,16,0.25)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 14,
                  background: "var(--text-primary)",
                  color: "var(--bg-primary)",
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(26,20,16,0.18)",
                }}
              >
                <Download size={16} />
                Baixar Beta — Windows
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 24px",
                  borderRadius: 14,
                  border: "1.5px solid var(--border)",
                  background: "var(--bg-secondary)",
                  color: "var(--text-primary)",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Ver recursos
                <ArrowRight size={15} />
              </motion.a>
            </motion.div>

            {/* Meta info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ marginTop: 20, fontSize: 12, color: "var(--text-muted)" }}
            >
              Gratuito durante a beta • Windows 10 / 11 • Sem necessidade de conta
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── STATS ── */}
      <section style={{ padding: "80px 24px", maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {[
            { value: 3200, suffix: "+", label: "Usuários beta" },
            { value: 120, suffix: "M+", label: "Blocos criados" },
            { value: 99, suffix: ".9%", label: "Uptime garantido" },
            { value: 4.9, suffix: "★", label: "Avaliação média" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ padding: "40px 24px", background: "var(--bg-primary)", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  color: "var(--text-primary)",
                  marginBottom: 6,
                }}
              >
                <AnimCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "80px 24px 120px", maxWidth: 1080, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span
            style={{
              fontSize: 12, fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "var(--accent-warm)",
              display: "block", marginBottom: 12,
            }}
          >
            Recursos
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
            Tudo que você precisa,{" "}
            <span className="gradient-text">em pastas bonitinhas</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {featureCards.map((card) => (
            <FolderCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <div style={{ background: "var(--bg-secondary)" }}>
        <HowItWorks />
      </div>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── DOWNLOAD ── */}
      <DownloadSection />

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
