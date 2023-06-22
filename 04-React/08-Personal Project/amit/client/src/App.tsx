import { Link } from "react-router-dom";
import "./App.scss"
import NavBar from "./components/navBar/NavBar";


function App() {

  return (
    <div>
      <Link to={`/`}><h1>cinema express</h1></Link>
      <NavBar />
    </div>
  )
}
export default App















  // const matrix: MovieInterface = {
  //   name: "The Matrix",
  //   genre: "action",
  //   minutes: 136,
  //   img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  // }

  // const fightClub: MovieInterface = {
  //   name: "fight club",
  //   genre: "action",
  //   minutes: 139,
  //   img: "https://resizing.flixster.com/0kbkzWG-fGf5yEZSmLw4VB_SpnQ=/206x305/v2/https://flxt.tmsimg.com/assets/p23069_p_v8_aa.jpg",
  // }

  // const theShawshankRedemption: MovieInterface = {
  //   name: "the Shawshank Redemption",
  //   genre: "drama",
  //   minutes: 142,
  //   img: "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg",
  // }

  // const theGuardiansOfTheGalaxy3: MovieInterface = {
  //   name: "the Guardians of the Galaxy 3",
  //   genre: "sci-fi",
  //   minutes: 150,
  //   img: "https://cdn.marvel.com/content/1x/guardians_3.jpg",
  // }

  // const intoTheSpiderverse: MovieInterface = {
  //   name: "into the Spiderverse",
  //   genre: "animated",
  //   minutes: 117,
  //   img: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg",
  // }

  // const movies:MovieInterface[] = [matrix, fightClub, theShawshankRedemption, theGuardiansOfTheGalaxy3, intoTheSpiderverse]

