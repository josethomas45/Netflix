import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
    const { setHoveredMovie, setSelectedMovie } = useContext(MovieContext);

    return (
        <div
            className="movie-card"
            onMouseEnter={() => setHoveredMovie(movie)}
            onMouseLeave={() => setHoveredMovie(null)}
            onClick={() => setSelectedMovie(movie)}
            title={movie.title}
        >
            {/* Poster */}
            <img src={movie.poster} alt={movie.title} loading="lazy" />

            {/* Centered play icon shown on hover */}
            <div className="card-play-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="5,3 19,12 5,21" />
                </svg>
            </div>

            {/* Bottom overlay with info */}
            <div className="card-overlay">
                {/* Genre chips */}
                <div className="card-genres">
                    {movie.genres.slice(0, 2).map((g) => (
                        <span key={g} className="card-genre-chip">
                            {g}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <div className="card-title">{movie.title}</div>

                {/* Meta */}
                <div className="card-meta">
                    <span style={{ color: "#f5c518" }}>★ {movie.score}</span>
                    <span>•</span>
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.duration}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;