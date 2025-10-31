import React, { useState } from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Slider,
    Chip,
} from "@mui/material";

const initialSkills = [
    // CLOUD
    { category: "CLOUD", name: "AWS (EC2, S3, RDS, Route53, CloudFront, EKS)", level: 4 },
    { category: "CLOUD", name: "IAM", level: 4 },
    { category: "CLOUD", name: "VPCs", level: 3 },

    // INFRASTRUCTURE-AS-CODE
    { category: "INFRASTRUCTURE-AS-CODE", name: "Terraform", level: 4 },
    { category: "INFRASTRUCTURE-AS-CODE", name: "Jsonnet", level: 3 },

    // CONTAINERS & ORCHESTRATION
    { category: "CONTAINERS & ORCHESTRATION", name: "Docker", level: 5 },
    { category: "CONTAINERS & ORCHESTRATION", name: "Kubernetes", level: 4 },
    { category: "CONTAINERS & ORCHESTRATION", name: "ArgoCD", level: 3 },

    // MONITORING & ALERTING
    { category: "MONITORING & ALERTING", name: "Prometheus", level: 4 },
    { category: "MONITORING & ALERTING", name: "Alertmanager", level: 3 },
    { category: "MONITORING & ALERTING", name: "Grafana", level: 5 },
    { category: "MONITORING & ALERTING", name: "Datadog", level: 3 },
    { category: "MONITORING & ALERTING", name: "CloudWatch", level: 4 },

    // CI/CD & AUTOMATION
    { category: "CI/CD & AUTOMATION", name: "Jenkins", level: 4 },
    { category: "CI/CD & AUTOMATION", name: "Bitbucket Pipelines", level: 3 },
    { category: "CI/CD & AUTOMATION", name: "GitHub Actions", level: 4 },

    // PROGRAMMING LANGUAGES
    { category: "PROGRAMMING LANGUAGES", name: "Java", level: 4 },
    { category: "PROGRAMMING LANGUAGES", name: "Python", level: 4 },
    { category: "PROGRAMMING LANGUAGES", name: "Bash", level: 3 },
    { category: "PROGRAMMING LANGUAGES", name: "YAML", level: 5 },
    { category: "PROGRAMMING LANGUAGES", name: "JSON", level: 5 },

    // VERSION CONTROL
    { category: "VERSION CONTROL", name: "Git", level: 5 },
    { category: "VERSION CONTROL", name: "Bitbucket", level: 4 },

    // OS & ENVIRONMENTS
    { category: "OS & ENVIRONMENTS", name: "Linux", level: 5 },
    { category: "OS & ENVIRONMENTS", name: "macOS", level: 4 },
    { category: "OS & ENVIRONMENTS", name: "Windows", level: 4 },
];

const marks = [
    { value: 1, label: "" },
    { value: 2, label: "" },
    { value: 3, label: "" },
    { value: 4, label: "" },
    { value: 5, label: "" },
];

const SkillMatrix = () => {
    const [skills, setSkills] = useState(initialSkills);

    const handleChange = (index, newValue) => {
        const updated = [...skills];
        updated[index].level = newValue;
        setSkills(updated);
    };

    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
        acc[skill.category] = acc[skill.category] || [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <Box
            p={4}
            sx={{
                backgroundColor: "transparent",
                color: "#fff",
            }}
        >
            <Typography variant="h5" align="center" gutterBottom sx={{ mb: 3, fontWeight: "bold" }}>
                💼 DevOps Skill Matrix
            </Typography>

            <TableContainer
                component={Paper}
                elevation={3}
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "10px",
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <Table size="small">
                    <TableBody>
                        {Object.keys(groupedSkills).map((category) => (
                            <React.Fragment key={category}>
                                {/* Category Header Row */}
                                <TableRow>
                                    <TableCell
                                        colSpan={2}
                                        sx={{
                                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                                            color: "#90caf9",
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        <Chip
                                            label={category}
                                            color="primary"
                                            size="small"
                                            sx={{ fontWeight: "bold", backgroundColor: "rgba(25,118,210,0.3)" }}
                                        />
                                    </TableCell>
                                </TableRow>

                                {/* Skill Rows */}
                                {groupedSkills[category].map((skill, index) => (
                                    <TableRow key={skill.name} hover>
                                        <TableCell sx={{ pl: 4, color: "#fff", fontSize: "0.9rem" }}>
                                            {skill.name}
                                        </TableCell>
                                        <TableCell align="right" sx={{ pr: 4 }}>
                                            <Slider
                                                value={skill.level}
                                                step={1}
                                                marks={marks}
                                                min={1}
                                                max={5}
                                                onChange={(_, newValue) => handleChange(index, newValue)}
                                                sx={{
                                                    width: "150px",
                                                    color: "#64b5f6",
                                                    "& .MuiSlider-thumb": { height: 10, width: 10 },
                                                    "& .MuiSlider-track": { height: 6 },
                                                    "& .MuiSlider-rail": { height: 6 },
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default SkillMatrix;