import React from "react";
import { motion } from "framer-motion";

const jobs = [
    {
        school:"Turfsport",
        course_name:"DevOps Team Lead",
        period:"Dec 2023 – Sep 2025",
        bullets:[
            "Led a DevOps team to deliver automated CI/CD workflows, reducing deployment\n" +
            "time by 40%.",
            "Defined and implemented release strategies aligned with business goals.",
            "Enhanced monitoring and reliability across AWS infrastructure with Prometheus\n" +
            "and Grafana."
        ]
    },
    {
        school:"Turfsport",
        course_name:"DevOps Engineer",
        period:"Oct 2022 – Nov 2023",
        bullets:[
            "Built and maintained Kubernetes clusters via AWS EKS and Terraform",
            "Expanded AWS infrastructure (RDS, Route53, CloudFront, IAM) for high availability systems.",
            "Implemented comprehensive monitoring and alerting pipelines using Prometheus and CloudWatch"
        ]
    },
    {
        school:"Entelect (Client: Standard Bank South Africa)",
        course_name:"Intermediate Software Engineer ",
        period:"Oct 2022 – Nov 2023",
        bullets:[
            "Developed and supported backend payment services using Java and Spring Boot.",
            "Delivered features for Inter-account Transfers and Bulk Payments systems.",
            "Worked on DevOps integration into payment pipelines to improve deployment consistency."
        ]
    },
    {
        school:"Psybergate (Pty) Ltd ",
        course_name:"Junior Java Developer",
        period:"Jan 2019 – Nov 2020",
        bullets:[
            "Contributed to enterprise-grade applications through full SDLC using Java EE and Spring.",
            "Improved build automation processes using Maven and Gradle.",
            "Supported development of internal tooling and environment automation."
        ]
    },
    {
        school:"Accenture",
        course_name:"Graduate",
        period:"Feb 2018 – Dec 2018",
        bullets:[
            "Collaborated on prototype business solutions involving automation technologies.",
            "Assisted with internal software testing and support initiatives."
        ]
    },
    {
        school:"Oracle",
        course_name:"Software Developer Intern",
        period:"Oct 2022 – Nov 2023",
        bullets:[
            "Supported development and QA processes for Oracle-based systems.",
            "Gained exposure to enterprise application lifecycle and database integration."
        ]
    }
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
