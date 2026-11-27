import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import projectsData, { getAsset } from "../data/projectsData";
import styles from "../css/ProjectDetail.module.css";

const parseCategories = (categoryString) => {
  if (!categoryString) return [];
  return categoryString
    .split("/")
    .map((c) => c.trim())
    .filter(Boolean);
};

const getCategoryCount = (targetCat) => {
  return projectsData.filter((p) =>
    parseCategories(p.category).some(
      (cat) => cat.toLowerCase() === targetCat.toLowerCase()
    )
  ).length;
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.slug === slug);
  const sheetRef = useRef(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Tracks the frosted sheet rising from the bottom of the screen to the top
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

  const categories = parseCategories(project.category);

  const isCoverVideo =
    typeof project.cover === "string" &&
    project.cover.toLowerCase().endsWith(".mp4");

  const resolveMediaSrc = (src) => {
    if (!src) return "";
    if (
      src.startsWith("http") ||
      src.startsWith("/") ||
      src.startsWith("data:")
    ) {
      return src;
    }
    return getAsset(src) || src;
  };

  const renderMediaItem = (item, key, extraClass = "") => {
    const rawSrc = typeof item === "string" ? item : item.src;
    const altText =
      (typeof item === "object" && item.alt) ||
      `${project.fullTitle} visual`;
    const isExternalEmbed =
      typeof rawSrc === "string" && rawSrc.startsWith("http");
    const resolvedSrc = resolveMediaSrc(rawSrc);
    const isVideoFile =
      (typeof item === "object" && item.kind === "video") ||
      (typeof resolvedSrc === "string" &&
        resolvedSrc.toLowerCase().endsWith(".mp4"));

    if (isExternalEmbed) {
      return (
        <div key={key} className={`${styles.embedWrapper} ${extraClass}`}>
          <iframe
            src={resolvedSrc}
            title={altText}
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
          key={key}
          src={resolvedSrc}
          className={`${styles.blockMedia} ${extraClass}`}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }

    return (
      <button
        key={key}
        type="button"
        className={`${styles.imageButton} ${extraClass}`}
        onClick={() => setLightboxImage({ src: resolvedSrc, alt: altText })}
        aria-label={`Enlarge ${altText}`}
      >
        <img
          src={resolvedSrc}
          alt={altText}
          className={styles.blockMedia}
          loading="lazy"
          draggable="false"
        />
      </button>
    );
  };

  const renderCategoryStack = () => {
    if (categories.length === 0) return null;
    return (
      <div className={styles.categoryStack}>
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/?category=${encodeURIComponent(cat)}`}
            className={styles.categoryTag}
          >
            <span>{cat}</span>
            <span className={styles.categoryCount}>
              {getCategoryCount(cat)}
            </span>
          </Link>
        ))}
      </div>
    );
  };

  const hasBlocks = Array.isArray(project.blocks) && project.blocks.length > 0;

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

      {/* 2. Frosted editorial sheet that slides up over the pinned hero */}
      <main ref={sheetRef} className={styles.whiteSheet}>
        <div className={styles.sheetInner}>
          <Link to="/" className={styles.backLink}>
            ← Back to Works
          </Link>

          {hasBlocks ? (
            <div className={styles.modularLayout}>
              {/* Project Header: Year + Stacked Categories, then Full Title */}
              <header className={styles.projectHeader}>
                <div className={styles.metaBar}>
                  <p className={styles.metaYear}>
                    <span className={styles.metaYearLabel}>YEAR</span>{" "}
                    {project.year}
                  </p>
                  {renderCategoryStack()}
                </div>
                <h1 className={styles.title}>{project.fullTitle}</h1>
              </header>

              {/* Modular Content Blocks */}
              <div className={styles.blocksStack}>
                {project.blocks.map((block, index) => {
                  // 1. Editorial Text Block (e.g. Brief, Method)
                  if (block.type === "text") {
                    const paragraphs = Array.isArray(block.body)
                      ? block.body
                      : [block.body];
                    return (
                      <section key={index} className={styles.textBlock}>
                        {block.label && (
                          <h2 className={styles.blockLabel}>{block.label}</h2>
                        )}
                        <div className={styles.blockBody}>
                          {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </section>
                    );
                  }

                  // 2. Split Block (Text next to a single vertical video/image)
                  if (block.type === "split") {
                    const paragraphs = Array.isArray(block.body)
                      ? block.body
                      : [block.body];
                    return (
                      <section key={index} className={styles.splitBlock}>
                        <div className={styles.splitText}>
                          {block.label && (
                            <h2 className={styles.blockLabel}>{block.label}</h2>
                          )}
                          <div className={styles.blockBody}>
                            {paragraphs.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>
                        </div>
                        <div className={styles.splitMedia}>
                          {renderMediaItem(block.media, `split-${index}`)}
                        </div>
                      </section>
                    );
                  }

                  // 3. Media Block (1 full-width padded item OR 2+ side-by-side)
                  if (block.type === "media" && Array.isArray(block.items)) {
                    const count = block.items.length;
                    const gridClass =
                      count === 1
                        ? styles.mediaSingle
                        : count === 2
                        ? styles.mediaPair
                        : styles.mediaMulti;

                    return (
                      <section key={index} className={gridClass}>
                        {block.items.map((item, i) =>
                          renderMediaItem(item, `media-${index}-${i}`)
                        )}
                      </section>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          ) : (
            /* Fallback layout for projects that don't have blocks yet */
            <div
              className={
                project.media && project.media.length > 0
                  ? styles.splitLayout
                  : styles.singleColumnLayout
              }
            >
              <div className={styles.textColumn}>
                <div className={styles.metaBar}>
                  <p className={styles.metaYear}>
                    <span className={styles.metaYearLabel}>YEAR</span>{" "}
                    {project.year}
                  </p>
                  {renderCategoryStack()}
                </div>
                <h1 className={styles.title}>{project.fullTitle}</h1>
                <div className={styles.description}>
                  {project.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {project.media && project.media.length > 0 && (
                <div className={styles.mediaColumn}>
                  {project.media.map((item, index) =>
                    renderMediaItem(item, `legacy-${index}`, styles.sideMedia)
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Click-to-enlarge Image Lightbox */}
      {lightboxImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxImage(null)}
            aria-label="Close preview"
          >
            ✕
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProjectDetail;
