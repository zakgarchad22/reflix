import React from 'react';
import { useParams} from 'react-router-dom';

const MovieDetail = ({ movies }) => 
{
  const { id } = useParams()

  const movie = movies.find(m => m.id === parseInt(id))


  return (
    <div className="movie-detail-container">
      <h2>{movie.title}</h2>
      <img src={movie.img} alt={`${movie.title} cover`}/>
      <p>{movie.descrShort}</p>
    </div>
  )
}

export default MovieDetail;
