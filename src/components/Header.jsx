// src/components/Header.jsx
import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";

export default function Header() {
    const tags = ["Java", "AWS", "Kubernetes", "Docker", "React"];

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                width: "100%",
            }}
        >
            <motion.img
                src={avatar}
                alt="avatar"
                className="avatar"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    width: 85,
                    height: 85,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 0 15px rgba(6,182,212,0.3)",
                }}
            />

            <div style={{ flexGrow: 1 }}>
                <h1>Jacob Mashape Legong</h1>
                <h2>DevOps / Fullstack Engineer — React, UX, AWS, Kubernetes, Docker, Java</h2>
                <motion.div
                    style={{ marginTop: 8 }}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {tags.map((tag, i) => (
                        <motion.span
                            key={tag}
                            className="tag"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <div style={{ textAlign: "right", minWidth: 180 }}>
                <div className="small">📍 Pretoria, South Africa</div>
                <div style={{ marginTop: 8 }}>
                    <a className="small" href="/resume.pdf" target="_blank" rel="noreferrer">
                        Download resume
                    </a>
                </div>
            </div>
        </motion.div>
    );
}