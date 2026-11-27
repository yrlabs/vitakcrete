import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import PortfolioCSS from "../css/Portfolio.module.css";
import { motion } from "framer-motion";
import projectsData from "../data/projectsData";

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
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const parseCategories = (categoryString) => {
  if (!categoryString) return [];
  return categoryString
    .split("/")
    .map((c) => c.trim())
    .filter(Boolean);
};

function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filteredProjects = activeCategory
    ? projectsData.filter((project) =>
        parseCategories(project.category).some(
          (cat) => cat.toLowerCase() === activeCategory.toLowerCase()
        )
      )
    : projectsData;

  return (
    <>
      {activeCategory && (
        <div className={PortfolioCSS.filterBar}>
          <span className={PortfolioCSS.filterLabel}>
            {activeCategory}{" "}
            <span className={PortfolioCSS.filterCount}>
              ({filteredProjects.length})
            </span>
          </span>
          <button
            type="button"
            className={PortfolioCSS.clearFilter}
            onClick={() => setSearchParams({})}
          >
            Show all works ✕
          </button>
        </div>
      )}

      <div className={PortfolioCSS.gridContainer}>
        {filteredProjects.map((project) => (
          <MediaWrapper key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

function MediaWrapper({ project }) {
  const { slug, cover, hoverTitle } = project;
  const isVideo =
    typeof cover === "string" && cover.toLowerCase().endsWith(".mp4");

  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      style={{ willChange: "opacity, transform" }}
      className={PortfolioCSS.imageWrapper}
    >
      <Link to={`/work/${slug}`} className={PortfolioCSS.cardLink}>
        {isVideo ? (
          <video
            src={cover}
            className={PortfolioCSS.image}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={cover}
            alt={hoverTitle}
            className={PortfolioCSS.image}
            draggable="false"
            decoding="async"
          />
        )}
        <div className={PortfolioCSS.overlay}>
          <h2 className={PortfolioCSS.hoverTitle}>{hoverTitle}</h2>
        </div>
      </Link>
    </motion.div>
  );
}

export default Portfolio;
