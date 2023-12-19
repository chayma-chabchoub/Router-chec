import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  const handleToggleAdd = () => {
    setIsAdding(!isAdding);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    // Validate if all fields are filled before adding the movie
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      onAddMovie(newMovie);
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
      setIsAdding(false);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="add-movie">
      <button onClick={handleToggleAdd}>{isAdding ? 'Cancel' : 'Add Film'}</button>
      {isAdding && (
        <div>
          <label htmlFor="title-input">Title:</label>
          <input type="text" id="title-input" name="title" value={newMovie.title} onChange={handleInputChange} />

          <label htmlFor="description-input">Description:</label>
          <input
            type="text"
            id="description-input"
            name="description"
            value={newMovie.description}
            onChange={handleInputChange}
          />

          <label htmlFor="poster-url-input">Poster URL:</label>
          <input
            type="text"
            id="poster-url-input"
            name="posterURL"
            value={newMovie.posterURL}
            onChange={handleInputChange}
          />

          <label htmlFor="rating-input">Rating:</label>
          <input type="text" id="rating-input" name="rating" value={newMovie.rating} onChange={handleInputChange} />

          <button className='add' onClick={handleAddMovie}>Add</button>
        </div>
      )}
    </div>
  );
};

export default AddMovie;
