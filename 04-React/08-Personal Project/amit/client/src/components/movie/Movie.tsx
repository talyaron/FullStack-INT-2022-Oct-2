import { FC, SetStateAction, } from "react";
import "./Movie.scss";
import { Link } from "react-router-dom";

export interface MovieInterface {
  _id: string;
  name: string;
  genre: string;
  minutes: number;
  img: string;
}

interface MovieProps {
  movieId: string;
  setMovies: SetStateAction<any>;
  name: string;
  genre: string;
  minutes: number;
  img: string;
}

const Movie: FC<MovieProps> = ({ name, genre, minutes, img, movieId }) => {
  try {
    return (
      <Link to={`/theatre/${movieId}`} className="movie">
        <h2>{name}</h2>
        <p>{genre}</p>
        <p>{minutes} minutes</p>
        <img src={img}></img>
      </Link>
    );
  } catch (error) {
    console.error(error)
    return null
  }

};

export default Movie;
