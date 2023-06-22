// import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie, { MovieInterface } from '../components/movie/Movie';

import "./Home.scss"

const Home = () => {
  try {
    const [movies, setMovies] = useState<MovieInterface[]>([])

    useEffect(() => {
      async function getMovies() {
        try {
          const { data } = await axios.get("/api/movies/get-movies")

          const { movies } = data;
          if (!movies) throw new Error("no balloons")
          setMovies(movies)

        } catch (error) {
          console.error(error)
        }
      }
      getMovies();
    }, []);

    return (
      <div className="moviesWrapper">
        {movies.map((movie: MovieInterface) => (
          <Movie
            setMovies={setMovies}
            movieId={movie._id}
            key={movie._id}
            name={movie.name}
            genre={movie.genre}
            minutes={movie.minutes}
            img={movie.img}
          />
        ))}
      </div>
    )
  } catch (error) {
    console.error(error)
    return null
  }


}

export default Home
