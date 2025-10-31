import React from "react";
import avatar from "../assets/avatar.jpg";

export default function Header(){
    return (
        <div style={{display:"flex",alignItems:"center",gap:20}}>
            <img src={avatar} alt="avatar" className="avatar"/>
            <div>
                <h1>Jacob Mashape Legong</h1>
                <h2>Devops/Fullstack Engineer — React, UX, AWS, Kubernetes, Docker, Java</h2>
                <div style={{marginTop:8}}>
                    <span className="tag">Java</span>
                    <span className="tag">AWS</span>
                    <span className="tag">Kubernetes</span>
                    <span className="tag">Docker</span>
                    <span className="tag">React</span>
                </div>
            </div>
            <div style={{marginLeft:"auto",textAlign:"right"}}>
                <div className="small">📍 Pretoria, South Africa</div>
                <div style={{marginTop:8}}>
                    <a className="small" href="/resume.pdf" target="_blank" rel="noreferrer">Download resume</a>
                </div>
            </div>
        </div>
    );
}
