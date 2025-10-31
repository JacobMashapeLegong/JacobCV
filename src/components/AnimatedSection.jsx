import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.section)`
  background: linear-gradient(145deg, #2b2b2b, #1e1e1e);
  border-radius: 14px;
  padding: 30px;
  margin: 30px 0;
  box-shadow: inset 0 0 10px #666, 0 6px 20px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.08);
`;

export default function AnimatedSection({ children, delay = 0 }) {
    return (
        <Wrapper
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </Wrapper>
    );
}