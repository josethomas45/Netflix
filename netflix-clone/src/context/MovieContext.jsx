import { createContext, useState, useCallback, useRef } from "react";
import { movies } from "../data/movies";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [hoveredMovie, setHoveredMovieRaw] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const hoverTimerRef = useRef(null);

    // Debounce hover to avoid flickering when moving between cards
    const setHoveredMovie = useCallback((movie) => {
        if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
        if (movie === null) {
            hoverTimerRef.current = setTimeout(() => setHoveredMovieRaw(null), 150);
        } else {
            setHoveredMovieRaw(movie);
        }
    }, []);

    const heroMovie = movies.find((m) => m.featured) || movies[0];

    return (
        <MovieContext.Provider
            value={{
                hoveredMovie,
                setHoveredMovie,
                selectedMovie,
                setSelectedMovie,
                heroMovie,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};