import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

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
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
}
