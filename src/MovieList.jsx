import React from 'react'
import MovieCard from './MovieCard'

// Functional component for displaying a list of movies
const MovieList = ({ movies }) => {
  return (
    <div className="grid-container">

      {/* Mapping through the array of movies and rendering MovieCard component for each */}
      {movies.map((movie) =>
        (<MovieCard movie={movie} />))}
    </div>
  )
}
// Exporting the MovieList component as the default export
export default MovieList

