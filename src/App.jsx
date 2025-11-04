import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import SkillMatrix from "./components/SkillMatrix";
import Contact from "./components/Contact";
import AnimatedSection from "./components/AnimatedSection";
import ThemeToggle from "./components/ThemeToggle";


export default function App() {
    return (
        <div className="App">
            <ThemeToggle />
            <div className="container">
                <div className="card metallic">
                    <AnimatedSection delay={0.1}><Header /></AnimatedSection>
                    <AnimatedSection delay={0.02}><Hero /></AnimatedSection>
                    <AnimatedSection delay={0.03}><Experience /></AnimatedSection>
                    <AnimatedSection delay={0.04}><Education /></AnimatedSection>
                    <AnimatedSection delay={0.05}><Projects /></AnimatedSection>
                    <AnimatedSection delay={0.06}><SkillMatrix /></AnimatedSection>
                    <AnimatedSection delay={0.07}><Contact /></AnimatedSection>
                </div>
            </div>
        </div>
    );
}