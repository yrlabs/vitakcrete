import React from "react";
import PortfolioCSS from "../css/Portfolio.module.css";
import { motion } from "framer-motion";

const mediaModules = import.meta.glob(
  "../assets/images/*.{webp,png,jpg,jpeg,gif,mp4}",
  {
    eager: true,
    import: "default",
  },
);

const mediaItems = Object.values(mediaModules);

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.975,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Portfolio() {
  return (
    <div className={PortfolioCSS.gridContainer}>
      {mediaItems.map((src, index) => (
        <MediaWrapper key={index} src={src} index={index} />
      ))}
    </div>
  );
}

function MediaWrapper({ src, index }) {
  const isVideo = typeof src === "string" && src.toLowerCase().endsWith(".mp4");

  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      style={{ willChange: "opacity, transform" }}
      className={PortfolioCSS.imageWrapper}
    >
      {isVideo ? (
        <video
          src={src}
          className={PortfolioCSS.image}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={src}
          alt={`Portfolio ${index + 1}`}
          className={PortfolioCSS.image}
          draggable="false"
          decoding="async"
        />
      )}
    </motion.div>
  );
}

export default Portfolio;
