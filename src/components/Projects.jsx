import React from "react";

const projects = [
    {name:"Portfolio Site", desc:"Static site (Vite + React) with CI/CD."}
];

export default function Projects(){
    return (
        <section className="section">
            <h3 style={{margin:0}}>Selected projects</h3>
            <div style={{marginTop:8}}>
                {projects.map((p,i)=>(
                    <div key={i} style={{marginBottom:8}}>
                        <strong>{p.name}</strong>
                        <div className="small">{p.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
