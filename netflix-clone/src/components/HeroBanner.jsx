import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const HeroBanner = () => {
    const { heroMovie, setSelectedMovie } = useContext(MovieContext);

    if (!heroMovie) return null;

    return (
        <section className="hero-section">
            <div className="hero-content animate-fade-in-up">
                {/* Genre badges row */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                    {heroMovie.genres.map((g) => (
                        <span key={g} className="badge badge-genre">
                            {g}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="hero-title animate-fade-in-up delay-100">{heroMovie.title}</h1>

                {/* Meta info */}
                <div className="hero-meta animate-fade-in-up delay-200">
                    <span className="badge-score">★ {heroMovie.score}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>{heroMovie.year}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>{heroMovie.duration}</span>
                    <span className="badge badge-rating">{heroMovie.rating}</span>
                </div>

                {/* Description */}
                <p className="hero-desc animate-fade-in-up delay-200">{heroMovie.description}</p>

                {/* Buttons */}
                <div className="hero-btn-group animate-fade-in-up delay-300">
                    <button className="btn-play" onClick={() => setSelectedMovie(heroMovie)}>
                        {/* Play triangle */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                        Play
                    </button>
                    <button className="btn-info">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="8" />
                            <line x1="12" y1="12" x2="12" y2="16" />
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
