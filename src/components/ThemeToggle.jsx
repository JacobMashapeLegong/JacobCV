// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [light, setLight] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("light", light);
    }, [light]);

    return (
        <button
            onClick={() => setLight(!light)}
            style={{
                position: "fixed",
                top: 20,
                right: 20,
                background: light ? "#ff4081" : "#06b6d4",
                border: "none",
                color: "#fff",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
            }}
            title={light ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
            {light ? "🌞" : "🌙"}
        </button>
    );
}