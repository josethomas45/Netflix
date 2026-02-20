import { useContext, useRef, useEffect, useState } from "react";
import { MovieContext } from "./context/MovieContext";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import FullscreenPlayer from "./components/FullscreenPlayer";
import { movies, rows } from "./data/movies";

// The default home background is always the Interstellar trailer
const DEFAULT_BG = movies.find((m) => m.id === 1)?.preview;

function App() {
  const { hoveredMovie, selectedMovie } = useContext(MovieContext);
  const bgVideoRef = useRef(null);
  const [bgOpacity, setBgOpacity] = useState(0);
  const prevSrcRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const playTimerRef = useRef(null);

  // Determine which src to show: hovered movie OR default Interstellar
  const targetSrc = selectedMovie
    ? null
    : hoveredMovie
      ? hoveredMovie.preview
      : DEFAULT_BG;

  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    // Clear any pending timers
    clearTimeout(fadeTimerRef.current);
    clearTimeout(playTimerRef.current);

    if (!targetSrc) {
      // Fade out and stop (fullscreen player is open)
      setBgOpacity(0);
      fadeTimerRef.current = setTimeout(() => {
        video.pause();
        video.src = "";
        prevSrcRef.current = null;
      }, 800);
      return;
    }

    if (prevSrcRef.current === targetSrc) {
      // Same src — just make sure it's playing and visible
      video.play().catch(() => { });
      setBgOpacity(0.3);
      return;
    }

    // New src — cross-fade: fade out → swap src → fade in
    setBgOpacity(0);
    playTimerRef.current = setTimeout(() => {
      prevSrcRef.current = targetSrc;
      video.src = targetSrc;
      video.play().catch(() => { });
      setBgOpacity(0.3);
    }, 400);

    return () => {
      clearTimeout(fadeTimerRef.current);
      clearTimeout(playTimerRef.current);
    };
  }, [targetSrc]);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* ── Persistent background video ── */}
      <div className="bg-video-wrapper">
        <video
          ref={bgVideoRef}
          muted
          loop
          playsInline
          style={{
            opacity: bgOpacity,
            transition: "opacity 0.8s ease",
          }}
        />
        <div className="bg-video-overlay" />
      </div>

      {/* ── Fullscreen player ── */}
      <FullscreenPlayer />

      {/* ── Main page ── */}
      {!selectedMovie && (
        <>
          <Navbar />
          <HeroBanner />
          <div className="page-bottom">
            {rows.map((row) => (
              <MovieRow key={row.id} row={row} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;