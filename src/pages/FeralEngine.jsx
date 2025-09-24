// src/pages/FeralEngine.jsx
import React, { useEffect, useState } from "react";
import "../styles/FeralEngine.css";

const FeralEngine = () => {
  useEffect(() => {}, []);

  const scrollToDownloads = (e) => {
    e.preventDefault();
    document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // --- Gallery data (edit paths/captions as you like) ---
  const shots = [
    { src: "gallery/shot1.png",  title: "Overview / Workspace",              caption: "Clean, modular workspace with dockable panels and the Feral theme." },
    { src: "gallery/shot2.png",  title: "Scene View (3D)",                   caption: "Real-time 3D viewport with transform gizmos, grid, and PBR lighting." },
    { src: "gallery/shot3.png",  title: "Scene View (2D / Tilemap)",         caption: "2D tilemap tools with palette, layers, and smart painting." },
    { src: "gallery/shot4.png",  title: "Entities & Components",             caption: "Entity-component workflow: stack components to build behavior." },
    { src: "gallery/shot5.png",  title: "Material / Shader Graph",           caption: "Node-based material editor for fast PBR look-dev." },
    { src: "gallery/shot6.png",  title: "Animation Timeline",                caption: "Non-linear animation with keyframes and curve editing." },
    { src: "gallery/shot7.png",  title: "Particles / VFX",                   caption: "GPU-friendly particle system with live tweaking." },
    { src: "gallery/shot8.png",  title: "Profiler",                          caption: "Built-in profiler: frame timings, GPU/CPU breakdown, and hotspots." },
    { src: "gallery/shot9.png",  title: "Physics Debug",                     caption: "Physics debug draw for colliders, joints, and contacts." },
    { src: "gallery/shot10.png", title: "Input & Actions",                   caption: "Action-based input mapping across devices." },
    { src: "gallery/shot11.png", title: "Export / Build",                    caption: "One-click export to desktop, mobile, web, and consoles." },
    { src: "gallery/shot12.png", title: "Steam Module (Settings)",           caption: "Steam module: app config, overlay, achievements." },
    { src: "gallery/shot13.png", title: "Steam Multiplayer (Peer / Lobby)",  caption: "Steam P2P multiplayer with lobbies and live session info." },
    { src: "gallery/shot14.png", title: "Console & Logger",                  caption: "Structured logging with filters and search." },
    { src: "gallery/shot15.png", title: "Asset Importer / Browser",          caption: "Asset pipeline with import presets and previews." },
    { src: "gallery/shot16.png", title: "Navigation / Bake",                 caption: "Navigation baking with live preview." },
  ];

  // --- Lightbox state/handlers ---
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const prev = (e) => { e?.stopPropagation(); setLightbox(l => ({ open: true, index: (l.index - 1 + shots.length) % shots.length })); };
  const next = (e) => { e?.stopPropagation(); setLightbox(l => ({ open: true, index: (l.index + 1) % shots.length })); };

  // Lock body scroll & keyboard shortcuts while open
  useEffect(() => {
    if (!lightbox.open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox.open]);

  return (
    <div className="feral-engine">
      <header className="fe-hero">
        <div className="fe-hero-inner">
          <img className="fe-logo" src="splash.png" alt="Feral Engine logo" />

          <p className="fe-subtitle">
            Feral Engine is a feature-packed, cross-platform game engine to create 2D and 3D games from a unified interface.
            It provides a comprehensive set of common tools, so that users can focus on making games without having to reinvent the wheel.
            Games can be exported with one click to desktop (Linux, macOS, Windows), mobile (Android, iOS), web, and consoles.
          </p>

          <div className="fe-actions">
            <a
              className="fe-button fe-button--primary"
              href="https://github.com/BP-Feral/FeralEngine"
              target="_blank" rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              className="fe-button fe-button--ghost"
              href="https://discord.gg/U5vz9Myn6F"
              target="_blank" rel="noopener noreferrer"
            >
              Join Discord Server
            </a>
            <a className="fe-button fe-button--primary" href="#downloads" onClick={scrollToDownloads}>
              Downloads
            </a>
          </div>
        </div>
      </header>

      <main className="fe-main">
        {/* === Gallery === */}
        <section className="fe-section" id="gallery">
          <h2 className="fe-section-title">Gallery</h2>

          <div className="fe-gallery-grid">
            {shots.map((s, idx) => (
              <figure
                key={s.src}
                className="fe-shot"
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(idx)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openLightbox(idx)}
              >
                <img src={s.src} alt={s.title} loading="lazy" decoding="async" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* === Downloads === */}
        <section className="fe-section">
          <h2 id="downloads" className="fe-section-title">Downloads</h2>

          <div className="fe-subsection">
            <h3 className="fe-subsection-title">Precompiled Engines</h3>
            <div className="fe-grid">
              <article className="fe-card">
                <div className="fe-card-head">
                  <h4 className="fe-card-title">Standard Engine 4.6</h4>
                  <span className="fe-pill">Core</span>
                </div>
                <p className="fe-card-desc">Stable build with the core feature set. Great starting point for most projects.</p>
                <div className="fe-card-actions">
                  <a className="fe-button fe-button--primary" href="downloads/feral-engine-standard.rar" download>
                    Download Latest
                  </a>
                  <details className="fe-details">
                    <summary>Checksums</summary>
                    <code>SHA256: (Not available yet)</code>
                  </details>
                </div>
              </article>

              <article className="fe-card">
                <div className="fe-card-head">
                  <h4 className="fe-card-title">Steam Module Engine 4.6</h4>
                  <span className="fe-pill">Steam</span>
                </div>
                <p className="fe-card-desc">Precompiled with the Steam module integrated for API access and features.</p>
                <div className="fe-card-actions">
                  <a className="fe-button fe-button--primary" href="downloads/feral-engine-steam-module.zip" download>
                    Download Latest
                  </a>
                  <details className="fe-details">
                    <summary>Checksums</summary>
                    <code>SHA256: (Not available yet)</code>
                  </details>
                </div>
              </article>

              <article className="fe-card">
                <div className="fe-card-head">
                  <h4 className="fe-card-title">Steam Multiplayer Peer Engine 4.6</h4>
                  <span className="fe-pill">Multiplayer</span>
                </div>
                <p className="fe-card-desc">Build configured for Steam Peer-to-Peer multiplayer workflows.</p>
                <div className="fe-card-actions">
                  <a className="fe-button fe-button--primary" href="downloads/feral-engine-steam-multiplayer-peer.zip" download>
                    Download Latest
                  </a>
                  <details className="fe-details">
                    <summary>Checksums</summary>
                    <code>SHA256: (Not available yet)</code>
                  </details>
                </div>
              </article>
            </div>
          </div>

          <div className="fe-subsection">
            <h3 className="fe-subsection-title">Templates</h3>
            <div className="fe-grid">
              <article className="fe-card">
                <div className="fe-card-head">
                  <h4 className="fe-card-title">Standard Templates (4.6)</h4>
                  <span className="fe-pill fe-pill--soft">Templates</span>
                </div>
                <p className="fe-card-desc">Boilerplate templates for the Standard Engine (scenes, config, and scripts).</p>
                <div className="fe-card-actions">
                  <a className="fe-button fe-button--outline" href="downloads/templates/standard-templates.zip" download>
                    Download ZIP
                  </a>
                </div>
              </article>

              <article className="fe-card">
                <div className="fe-card-head">
                  <h4 className="fe-card-title">Steam Module Templates (4.6)</h4>
                  <span className="fe-pill fe-pill--soft">Templates</span>
                </div>
                <p className="fe-card-desc">Boilerplate templates configured for the Steam Module Engine.</p>
                <div className="fe-card-actions">
                  <a className="fe-button fe-button--outline" href="downloads/templates/steam-module-templates.zip" download>
                    Download ZIP
                  </a>
                </div>
              </article>

              <article className="fe-card">
                <div className="fe-card-head">
                  <h4 className="fe-card-title">Steam Multiplayer Peer Templates (4.6)</h4>
                  <span className="fe-pill fe-pill--soft">Templates</span>
                </div>
                <p className="fe-card-desc">Starter templates tailored for Steam Peer-to-Peer multiplayer.</p>
                <div className="fe-card-actions">
                  <a className="fe-button fe-button--outline" href="downloads/templates/steam-multiplayer-peer-templates.zip" download>
                    Download ZIP
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="fe-footer">
        <p>&copy; 2025 Feral Works</p>
      </footer>

      {/* --- Lightbox --- */}
      {lightbox.open && (
        <div
          className="fe-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={shots[lightbox.index].title}
          onClick={closeLightbox}
        >
          <div className="fe-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="fe-lightbox-close" onClick={closeLightbox} aria-label="Close image">×</button>
            <img src={shots[lightbox.index].src} alt={shots[lightbox.index].title} />
            <div className="fe-lightbox-caption">{shots[lightbox.index].caption}</div>
            {shots.length > 1 && (
              <>
                <button className="fe-lightbox-nav fe-prev" onClick={prev} aria-label="Previous image">‹</button>
                <button className="fe-lightbox-nav fe-next" onClick={next} aria-label="Next image">›</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeralEngine;
