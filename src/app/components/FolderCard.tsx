"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface FolderCardProps {
    color: string;
    tabColor: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    tag: string;
    tagColor: string;
    delay?: number;
}

export default function FolderCard({
    color,
    tabColor,
    title,
    description,
    icon,
    tag,
    tagColor,
    delay = 0,
}: FolderCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    }
    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000, rotateX, rotateY, transformStyle: "preserve-3d", cursor: "pointer" }}
        >
            {/* Folder Tab */}
            <div
                style={{
                    marginLeft: 20,
                    marginBottom: -2,
                    width: 80,
                    height: 16,
                    borderRadius: "8px 8px 0 0",
                    background: tabColor,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "var(--tab-shadow)",
                }}
            />

            {/* Card Body */}
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                style={{
                    background: color,
                    borderRadius: "0 12px 12px 12px",
                    border: "1px solid var(--border)",
                    padding: "24px 24px 28px",
                    boxShadow: "var(--card-shadow)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Top gradient tint */}
                <div
                    style={{
                        position: "absolute",
                        top: 0, left: 0, right: 0,
                        height: 80,
                        background: `linear-gradient(180deg, ${tabColor}14 0%, transparent 100%)`,
                        pointerEvents: "none",
                    }}
                />

                {/* Icon */}
                <div
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${tabColor}22`,
                        border: `1.5px solid ${tabColor}55`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                        color: tabColor,
                    }}
                >
                    {icon}
                </div>

                {/* Tag */}
                <div style={{ marginBottom: 10 }}>
                    <span
                        style={{
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: tagColor,
                            background: `${tagColor}22`,
                            padding: "3px 8px",
                            borderRadius: 6,
                        }}
                    >
                        {tag}
                    </span>
                </div>

                {/* Title */}
                <h3
                    style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 8,
                        letterSpacing: "-0.3px",
                        lineHeight: 1.3,
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {description}
                </p>

                {/* Bottom accent line */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0, left: 0, right: 0,
                        height: 3,
                        background: `linear-gradient(90deg, ${tabColor} 0%, transparent 100%)`,
                        borderRadius: "0 0 12px 12px",
                        opacity: 0.5,
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
