import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.section
            className="section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h3 style={{ margin: 0 }}>Contact</h3>
            <div className="small" style={{ marginTop: 8 }}>
                Email: <a href="mailto:legongjacob@gmail.com">legongjacob@gmail.com</a><br />
                LinkedIn: <a href="https://www.linkedin.com/in/jacob-legong-a988a618a/">linkedin.com/in/jacob-legong</a><br />
                Cellphone: <a href="tel:0609718493">0609718493</a><br />
                GitHub: <a href="https://github.com/JacobMashapeLegong">github.com/JacobMashapeLegong</a>
            </div>
        </motion.section>
    );
}