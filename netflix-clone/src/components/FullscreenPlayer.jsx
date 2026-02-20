import { useContext, useRef, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";

const FullscreenPlayer = () => {
    const { selectedMovie, setSelectedMovie, setHoveredMovie } = useContext(MovieContext);
    const videoRef = useRef(null);
    const hideTimerRef = useRef(null);
    const [showBtn, setShowBtn] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const resetHideTimer = () => {
        setShowBtn(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => setShowBtn(false), 3000);
    };

    useEffect(() => {
        if (!selectedMovie) return;
        setIsLoading(true);
        setShowBtn(true);
        resetHideTimer();
        return () => {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        };
    }, [selectedMovie]);

    const handleBack = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.src = "";
        }
        setSelectedMovie(null);
        setHoveredMovie(null);
    };

    if (!selectedMovie) return null;

    return (
        <div className="fullscreen-player" onMouseMove={resetHideTimer}>
            {isLoading && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 205,
                    }}
                >
                    <div className="spinner" />
                </div>
            )}

            <video
                ref={videoRef}
                key={selectedMovie.id}
                src={selectedMovie.video}
                autoPlay
                controls
                className="fullscreen-player"
                style={{ position: "relative", zIndex: 201 }}
                onCanPlay={() => setIsLoading(false)}
                onWaiting={() => setIsLoading(true)}
            />

            <div
                style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "6rem",
                    zIndex: 215,
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.7)",
                    transition: "opacity 0.3s",
                    opacity: showBtn ? 1 : 0,
                    pointerEvents: "none",
                }}
            >
                {selectedMovie.title}
            </div>

            <button
                className={`back-btn ${showBtn ? "" : "hidden-btn"}`}
                onClick={handleBack}
                style={{ zIndex: 215 }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15,18 9,12 15,6" />
                </svg>
                Back
            </button>
        </div>
    );
};

export default FullscreenPlayer;