import React from "react";
import { motion } from "framer-motion";

const jobs = [
];

export default function Experience() {
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
        }),
    };

    return (
        <section className="section">
            <h3 style={{ margin: 0 }}>Experience</h3>
            <div style={{ marginTop: 10 }}>
                {jobs.map((j, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        style={{ marginBottom: 20 }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <strong>{j.course_name} — {j.school}</strong>
                            <span className="small">{j.period}</span>
                        </div>
                        <ul className="list small">
                            {j.bullets.map((b, idx) => (
                                <motion.li key={idx} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
                                    {b}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
