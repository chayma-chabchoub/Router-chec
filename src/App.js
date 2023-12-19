import React, { useState } from 'react'
import MovieList from './MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';
import { Routes, Route } from 'react-router-dom';
import MovieDetail from "./MovieDetail";
import Filter from './Filter';



// the list of movie
function App() {
  const [movies, setMovie] = useState([
    {
      id:"1",
      title: 'Doctor strange',
      year: '2016',
      genre: 'Action/fantasy',
      description: ' Doctor Strange suit lhistoire du Docteur Stephen Strange, un monde caché de mysticisme et de dimensions alternatives.',
      time: '2h',
      rating: 4,
      posterUrl: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      trailer:"https://www.youtube.com/embed/aWzlQ2N6qqg?si=3mTCliTB7JBavgnV"

    },
    {
      id:"2",
      title: 'Venom',
      year: '2018',
      genre: 'Action/SFy',
      description: 'Après avoir fusionné avec un symbiote extraterrestre qui lui confère dincroyables super-pouvoirs. ',
      time: '1h52m',
      rating: 4,
      posterUrl: 'https://upload.wikimedia.org/wikipedia/en/1/10/Venom_%282018_film%29_poster.png',
      trailer:"https://www.youtube.com/embed/u9Mv98Gr5pY?si=uZhy6Hgdr7ugtmob"
    },
    {
      id:"3",
      title: 'Spider-man: No way home',
      year: '2021',
      time: '2h28m',
      genre: 'Action/SF',
      description: 'Pour la première fois dans son histoire cinématographique, Spider-Man. ',
      rating: 5,
      posterUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg/210px-Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg',
      trailer:"https://www.youtube.com/embed/o-qvJ2iUqvA?si=3AhJ93GAXSQ0M1Wj"
    },
    {
      id:"4",
      title: 'Iron-man ',
      year: '2008',
      time: '2h',
      genre: 'Action/fantasy',
      description: 'Tony Stark, inventeur de génie, vendeur darmes et playboy milliardaire.',
      rating: 4,
      posterUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg',
      trailer:"https://www.youtube.com/embed/8ugaeA-nMTc?si=jF_ROnWx9YCkQP8_"
    },
    // {
    //   title:'joker',
    //   year:'2019',
    //   time:'1h40m',
    //   genre :'Action/fantasy' ,
    //   description :'En 1981 à Gotham City, un clown atteint de troubles mentaux et en mal de reconnaissance .',
    //   rating:4,
    //   posterUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg' ,
    //   },



  ])

  // State for filtering movies based on title and rating
  const [filter, setFilter] = useState({ title: '', rating: '' });

  // Function to handle changes in filter values
  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  // Filtering movies based on title and rating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating.toString().includes(filter.rating))
  );

  // Function to add a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovie([...movies, newMovie]);
  };

  return (
    <div className='App'>
      <Filter onFilterChange={handleFilterChange} />
      <AddMovie onAddMovie={handleAddMovie} />

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<> <MovieList movies={filteredMovies} /></>} />
        <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  )
}




export default App
