// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const projects = [
    { name: "Portfolio Site", desc: "Static site (Vite + React) with CI/CD." },
    { name: "Kubernetes Dashboard", desc: "Visualized workloads with Grafana + Prometheus integration." },
    { name: "AWS Infrastructure Automation", desc: "Provisioned full VPC and EKS using Terraform." },
];

const Card = styled(motion.div)`
  background: linear-gradient(145deg, #2e2e2e, #1b1b1b);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 16px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255, 64, 129, 0.4);
  }

  strong {
    color: #ff4081;
  }

  .small {
    color: #cfd9e1;
  }
`;

const Projects = () => {
    const variants = {
        hidden: { opacity: 0, x: 40 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
        }),
    };

    return (
        <section className="section">
            <h3 style={{ margin: 0, color: "#ff4081" }}>Selected Projects</h3>
            <div style={{ marginTop: 10 }}>
                {projects.map((p, i) => (
                    <Card
                        key={p.name}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                    >
                        <strong>{p.name}</strong>
                        <div className="small">{p.desc}</div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;