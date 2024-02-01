import React, { useState } from 'react';
import Movie from './Movie';
import MovieSearchBar from './MovieSearchBar';

const Catalog = ({ movies, currentUserId, users, handleRentalStatus }) => 
{
    const [searchTerm, setSearchTerm] = useState("")
    const user = users.find(u => u.id === currentUserId)

    const handleSearch = searchValue => {
        setSearchTerm(searchValue.toLowerCase())
    }

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    )

    const rentedMovies = movies.filter(movie => 
        movie.isRented[currentUserId]
    )

    return (
        <div>
            <h2 >Welcome back, {user.name}!</h2>
            <h2>Budget: ${user ? user.budget : 'Select a user to see budget'}</h2>
            <MovieSearchBar onSearch={handleSearch} />
            <h3>Rented Movies:</h3>
            <div className="rented-movies">
                {rentedMovies.length > 0 ? rentedMovies.map(movie => (
                    <Movie 
                    key={movie.id}
                    movie={movie}
                    handleRentalStatus={() => handleRentalStatus(movie.id)}
                    isRented={movie.isRented[currentUserId] || false}
                    />
                )) : <p>No movies rented yet.</p>}
            </div>
            <h3>Catalog:</h3>
            <div className="movie-catalog">
                {filteredMovies.map(movie => (
                    <Movie 
                    key={movie.id}
                    movie={movie}
                    handleRentalStatus={() => handleRentalStatus(movie.id)}
                    isRented={movie.isRented[currentUserId] || false}
                    />
                ))}
            </div>
        </div>
    )
}
export default Catalog;
