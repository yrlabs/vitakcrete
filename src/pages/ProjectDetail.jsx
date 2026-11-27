import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import projectsData, { getAsset } from "../data/projectsData";
import styles from "../css/ProjectDetail.module.css";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.slug === slug);
  const sheetRef = useRef(null);

  // Tracks the white sheet rising from the bottom of the screen to the top
  const { scrollYProgress } = useScroll({
    target: sheetRef,
    offset: ["start end", "start start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  if (!project) {
    return (
      <div className={styles.notFoundWrapper}>
        <Header />
        <div className={styles.notFoundContent}>
          <h2>Project not found</h2>
          <Link to="/" className={styles.backLinkDark}>
            ← Back to Works
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isCoverVideo =
    typeof project.cover === "string" &&
    project.cover.toLowerCase().endsWith(".mp4");

  return (
    <div className={styles.pageWrapper}>
      {/* Floating transparent header overlaid on top of the full-screen image */}
      <div className={styles.headerOverlay}>
        <Header />
      </div>

      {/* 1. Pinned full-screen hero (100vw x 100vh) */}
      <section className={styles.heroSection}>
        <motion.div
          className={styles.heroInner}
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {isCoverVideo ? (
            <video
              src={project.cover}
              className={styles.heroMedia}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.cover}
              alt={project.fullTitle}
              className={styles.heroMedia}
              draggable="false"
            />
          )}
        </motion.div>
        <div className={styles.topGradient} />
        <div className={styles.scrollCue}>Scroll to explore ↓</div>
      </section>

      {/* 2. White editorial sheet that slides up over the pinned hero */}
      <main ref={sheetRef} className={styles.whiteSheet}>
        <div className={styles.sheetInner}>
          <Link to="/" className={styles.backLink}>
            ← Back to Works
          </Link>

          <div
            className={
              project.media && project.media.length > 0
                ? styles.splitLayout
                : styles.singleColumnLayout
            }
          >
            {/* Left column: Elaborated title, metadata & project description */}
            <div className={styles.textColumn}>
              <p className={styles.meta}>
                {project.year}
                {project.category ? ` · ${project.category}` : ""}
              </p>
              <h1 className={styles.title}>{project.fullTitle}</h1>
              <div className={styles.description}>
                {project.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right column: Space for additional videos & images next to the text */}
            {project.media && project.media.length > 0 && (
              <div className={styles.mediaColumn}>
                {project.media.map((item, index) => {
                  const isExternalEmbed =
                    typeof item === "string" && item.startsWith("http");
                  const resolvedSrc = isExternalEmbed ? item : getAsset(item);
                  const isVideoFile =
                    typeof resolvedSrc === "string" &&
                    resolvedSrc.toLowerCase().endsWith(".mp4");

                  if (isExternalEmbed) {
                    return (
                      <div key={index} className={styles.embedWrapper}>
                        <iframe
                          src={resolvedSrc}
                          title={`${project.fullTitle} video ${index + 1}`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    );
                  }

                  if (isVideoFile) {
                    return (
                      <video
                        key={index}
                        src={resolvedSrc}
                        className={styles.sideMedia}
                        controls
                        playsInline
                      />
                    );
                  }

                  return (
                    <img
                      key={index}
                      src={resolvedSrc}
                      alt={`${project.fullTitle} detail ${index + 1}`}
                      className={styles.sideMedia}
                      draggable="false"
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
