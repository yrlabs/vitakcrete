import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogCSS from "../css/Log.module.css";
import logEntries from "../data/logData";

const articleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function LogDetail() {
  const { slug } = useParams();
  const entry = logEntries.find((item) => item.slug === slug);

  if (!entry) {
    return <Navigate to="/log" replace />;
  }

  return (
    <div className={LogCSS.container}>
      <Header />
      <motion.article
        className={LogCSS.article}
        variants={articleVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/log" className={LogCSS.backLink}>
          ← Back to Log
        </Link>
        <div className={LogCSS.meta}>
          {entry.year} · {entry.context}
        </div>
        <h1 className={LogCSS.articleTitle}>{entry.title}</h1>
        <div className={LogCSS.body}>
          {entry.paragraphs.map((text, index) => (
            <p key={index} className={LogCSS.paragraph}>
              {text}
            </p>
          ))}
        </div>
      </motion.article>
      <Footer />
    </div>
  );
}

export default LogDetail;
