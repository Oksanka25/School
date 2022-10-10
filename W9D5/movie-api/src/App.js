import { useState, useEffect } from "react";
import './App.css';
import Favorite from "./components/Favorite";
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
// require("dotenv").config();

function App() {
  //variable with your apiKey
  // const apiKey = process.env.API_KEY;
  const apiKey = 'fcf8dbf8';

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (e) {
      console.error(e)
    }
  };

  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form movieSearch={getMovie} />
      <Favorite />
      <MovieDisplay movie={movie} />

    </div>
  );
}

export default App;
