import React from 'react'
import "./moviecard.css"
import MovieRating from './MovieRating'
import { Link } from 'react-router-dom';
// movie card 
const MovieCard = ({movie}) => {
  return (
    
      <div>
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_datails">
                <h1> {movie.title} </h1>
                <MovieRating />
                <div className="card_cat">
                  {/* <p className="PG">PG - 13</p> */}
                  <p className="year">{movie.year}</p>
                  <p className="genre"> {movie.genre} </p>
                  <p className="time">{movie.time}</p>
                </div>
                <p className="disc">{movie.description}</p>
                {/* <a href="'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg'https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a> */}
                <div className="social-btn">
                  {/* WATCH TRAILER*/}
                  <Link to={`/movies/${movie.id}`}>  <h3 className="TRAILER">WATCH TRAILER </h3></Link>
                </div>	
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img src={movie.posterUrl} alt="pic" />
              </div>
              <div className="play_btn">
              </div>
            </div>
          </div>
        </div>
        {/* FOLLOW */}
        {/* <a className="Follow" href="https://codepen.io/ZaynAlaoudi/" target="blank_" /> */}
      </div>
    );
  }


export default MovieCard
