import { useContext, useRef, useEffect, useState } from "react";
import { MovieContext } from "./context/MovieContext";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import FullscreenPlayer from "./components/FullscreenPlayer";
import { movies, rows } from "./data/movies";

const DEFAULT_BG = movies.find((m) => m.id === 1)?.preview;

function App() {
  const { hoveredMovie, selectedMovie } = useContext(MovieContext);
  const bgVideoRef = useRef(null);
  const [bgOpacity, setBgOpacity] = useState(0);
  const prevSrcRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const playTimerRef = useRef(null);

  const targetSrc = selectedMovie
    ? null
    : hoveredMovie
      ? hoveredMovie.preview
      : DEFAULT_BG;

  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    clearTimeout(fadeTimerRef.current);
    clearTimeout(playTimerRef.current);

    if (!targetSrc) {
      setBgOpacity(0);
      fadeTimerRef.current = setTimeout(() => {
        video.pause();
        video.src = "";
        prevSrcRef.current = null;
      }, 800);
      return;
    }

    if (prevSrcRef.current === targetSrc) {
      video.play().catch(() => { });
      setBgOpacity(0.3);
      return;
    }

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

      <FullscreenPlayer />

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