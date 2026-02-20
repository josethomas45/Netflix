import { useRef } from "react";
import { movies } from "../data/movies";
import MovieCard from "./MovieCard";

const MovieRow = ({ row }) => {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        const amount = dir === "left" ? -el.clientWidth * 0.7 : el.clientWidth * 0.7;
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    const rowMovies = row.movieIds
        .map((id) => movies.find((m) => m.id === id))
        .filter(Boolean);

    return (
        <div className="movie-row animate-fade-in">
            <h2 className="row-title">{row.label}</h2>
            <div className="row-scroll-wrapper">
                {/* Left arrow */}
                <button className="scroll-btn left" onClick={() => scroll("left")} aria-label="Scroll left">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="15,18 9,12 15,6" />
                    </svg>
                </button>

                {/* Cards */}
                <div className="row-scroller" ref={scrollRef}>
                    {rowMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

                {/* Right arrow */}
                <button className="scroll-btn right" onClick={() => scroll("right")} aria-label="Scroll right">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MovieRow;
