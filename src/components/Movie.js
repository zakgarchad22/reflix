import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Movie = ({ movie, handleRentalStatus, isRented }) => {

    return (
        <div className="movie-container" style={{ backgroundImage: `url(${movie.img})` }}>
            <div className="movie-info">
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                <button onClick={() => handleRentalStatus(movie.id)}>
                    {isRented ? "-" : "+"}
                </button>
            </div>
        </div>
    )
}

export default Movie;
