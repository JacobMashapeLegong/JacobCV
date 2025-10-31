// src/components/SkillMatrix.jsx
import React, { useState } from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Paper,
    Slider,
    Chip,
} from "@mui/material";
import { motion } from "framer-motion";

const initialSkills = [
    { category: "CLOUD", name: "AWS (EC2, S3, RDS, Route53, CloudFront, EKS)", level: 4 },
    { category: "CLOUD", name: "IAM", level: 4 },
    { category: "CLOUD", name: "VPCs", level: 3 },
    { category: "INFRASTRUCTURE-AS-CODE", name: "Terraform", level: 4 },
    { category: "INFRASTRUCTURE-AS-CODE", name: "Jsonnet", level: 3 },
    { category: "CONTAINERS & ORCHESTRATION", name: "Docker", level: 5 },
    { category: "CONTAINERS & ORCHESTRATION", name: "Kubernetes", level: 4 },
    { category: "CI/CD & AUTOMATION", name: "GitHub Actions", level: 4 },
    { category: "PROGRAMMING LANGUAGES", name: "Java", level: 4 },
    { category: "PROGRAMMING LANGUAGES", name: "Python", level: 4 },
    { category: "VERSION CONTROL", name: "Git", level: 5 },
    { category: "OS & ENVIRONMENTS", name: "Linux", level: 5 },
];

const marks = Array.from({ length: 5 }, (_, i) => ({ value: i + 1, label: "" }));

const SkillMatrix = () => {
    const [skills, setSkills] = useState(initialSkills);

    const handleChange = (index, newValue) => {
        const updated = [...skills];
        updated[index].level = newValue;
        setSkills(updated);
    };

    const groupedSkills = skills.reduce((acc, skill) => {
        acc[skill.category] = acc[skill.category] || [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    const fadeVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
        }),
    };

    return (
        <Box
            p={4}
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
                background: "linear-gradient(145deg, #232526, #414345)",
                borderRadius: "14px",
                boxShadow: "inset 0 0 10px #666, 0 6px 20px rgba(0,0,0,0.5)",
                color: "#fff",
            }}
        >
            <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ mb: 3, fontWeight: "bold", color: "#06b6d4" }}
            >
                💼 DevOps Skill Matrix
            </Typography>

            <TableContainer
                component={Paper}
                elevation={3}
                sx={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <Table size="small">
                    <TableBody>
                        {Object.keys(groupedSkills).map((category, catIdx) => (
                            <motion.tbody
                                key={category}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1 } },
                                }}
                            >
                                <motion.tr variants={fadeVariant} custom={catIdx}>
                                    <TableCell
                                        colSpan={2}
                                        sx={{
                                            backgroundColor: "rgba(255,255,255,0.08)",
                                            color: "#90caf9",
                                            fontWeight: "bold",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        <Chip
                                            label={category}
                                            size="small"
                                            sx={{
                                                fontWeight: "bold",
                                                backgroundColor: "rgba(25,118,210,0.3)",
                                                color: "#90caf9",
                                            }}
                                        />
                                    </TableCell>
                                </motion.tr>

                                {groupedSkills[category].map((skill, i) => (
                                    <motion.tr key={skill.name} variants={fadeVariant} custom={i}>
                                        <TableCell sx={{ pl: 4, color: "#fff", fontSize: "0.9rem" }}>
                                            {skill.name}
                                        </TableCell>
                                        <TableCell align="right" sx={{ pr: 4 }}>
                                            <Slider
                                                value={skill.level}
                                                onChange={(_, newValue) =>
                                                    handleChange(
                                                        skills.findIndex((s) => s.name === skill.name),
                                                        newValue
                                                    )
                                                }
                                                min={1}
                                                max={5}
                                                marks={marks}
                                                sx={{
                                                    width: "150px",
                                                    color: "#06b6d4",
                                                    "& .MuiSlider-thumb": { height: 10, width: 10 },
                                                    "& .MuiSlider-track": { height: 6 },
                                                    "& .MuiSlider-rail": { height: 6 },
                                                }}
                                            />
                                        </TableCell>
                                    </motion.tr>
                                ))}
                            </motion.tbody>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default SkillMatrix;