import "../style/style.scss"
import VideoSlide from '../components/VideoSlide'
import HomeCard from '../components/HomeCard'
import { Outlet } from 'react-router-dom'
const Home = () => {

  return (
    <>
      <Outlet />
      <VideoSlide />
      <div className="overview_container">
          <div className="brief">
              <h1>Ecological Safety</h1>
              <p>
                  Ecological safety is a critical concern for our planet, as
                  it directly affects the well-being of all living organisms,
                  including humans. It involves the protection of the natural
                  environment from harmful human activities, such as
                  pollution, deforestation, and climate change. The concept of
                  ecological safety emphasizes the need to maintain a healthy
                  and sustainable environment for the present and future
                  generations. Pollution is one of the most significant
                  threats to ecological safety. It can take many forms,
                  including air pollution, water pollution, and soil
                  contamination. Industrial activities, transportation, and
                  agriculture are among the major sources of pollution. The
                  release of greenhouse gases, such as carbon dioxide and
                  methane, is also contributing to climate change, which poses
                  a severe threat to ecological safety.
              </p>
              <h1>Alternative Home</h1>
              <p>
                  The concept of Mars as an alternative home for humanity has
                  been gaining popularity in recent years, as space
                  exploration and colonization become increasingly feasible.
                  Mars offers a unique set of conditions that make it an
                  attractive option for space colonization, including a
                  similar day/night cycle as Earth, a thin atmosphere that can
                  be adapted for human habitation, and the presence of water
                  in the form of ice. Additionally, Mars exploration missions
                  have revealed a wealth of scientific data about the planet's
                  geology, atmosphere, and potential for supporting microbial
                  life.
              </p>
          </div>
          <div className="cards">
            <HomeCard head="Population" number={8} description="Billion People" />
            <HomeCard head="Waste a year" number={2.12} description="Billion tons" />
            <HomeCard head="Population growth" number={83} description="Million Annually" />
          </div>
      </div>
    </>
  )
}

export default Home