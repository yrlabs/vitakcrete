import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogCSS from "../css/Log.module.css";
import logEntries from "../data/logData";

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Log() {
  return (
    <div className={LogCSS.container}>
      <Header />
      <main className={LogCSS.main}>
        <h1 className={LogCSS.pageTitle}>Log</h1>
        <div className={LogCSS.list}>
          {logEntries.map((entry) => (
            <motion.div
              key={entry.slug}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              style={{ willChange: "opacity, transform" }}
            >
              <Link to={`/log/${entry.slug}`} className={LogCSS.rowLink}>
                <article className={LogCSS.row}>
                  <div className={LogCSS.meta}>
                    {entry.year} · {entry.context}
                  </div>
                  <h2 className={LogCSS.rowTitle}>{entry.title}</h2>
                  <p className={LogCSS.excerpt}>{entry.summary}</p>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Log;
