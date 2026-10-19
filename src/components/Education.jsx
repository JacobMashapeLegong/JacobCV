import React from "react";
import { motion } from "framer-motion";

const courses = [
    {
        school:"University of Cape Town",
        course_name:"Bachelor of Science (Computer Science)",
        period:"2014 - 2019",
    }
];

export default function Education() {
    return (
        <section className="section">
            <h3 style={{ margin: 0 }}>Education</h3>
            <div style={{ marginTop: 10 }}>
                {courses.map((j, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <strong>{j.course_name} — {j.school}</strong>
                            <span className="small">{j.period}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
