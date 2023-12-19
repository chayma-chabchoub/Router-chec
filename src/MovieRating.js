import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
// this a rate star
// Functional component for displaying and setting movie ratings
function MovieRating() {

  // State to manage the current rating
  const [rating, setRating] = useState(0);

  // Callback function triggered when a star is clicked
  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  return (
    <div style={{ padding: '10px', textAlign: 'lefet' }}>

      {/* Displaying the current movie rating */}
      {/* <h4>Rating: {rating}</h4> */}
      <StarRatingComponent
        name="star-rating"
        value={rating}
        onStarClick={onStarClick}
      />
    </div>
  );
}

// Exporting the MovieRating component as the default export
export default MovieRating;