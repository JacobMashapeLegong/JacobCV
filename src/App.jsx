import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import SkillMatrix from "./components/SkillMatrix";

export default function App() {
    return (
        <div className="container">
            <div className="card">
                <Header />
                <div className="row section">
                    <div className="col">
                        <Hero />
                        <Experience />
                        <Education />
                        <Projects />
                        <div
                            style={{
                                background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                                minHeight: "100vh",
                                padding: "30px",
                            }}
                        >
                            <SkillMatrix />
                        </div>
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
}
