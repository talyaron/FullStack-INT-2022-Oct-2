import Maple from "../components/About/Maple";
import Evo from "../components/About/Evo";
import SkateTech from "../components/About/SkateTech";
import FounderBio from "../components/About/FounderBio";

const About = () => {
  return (
    <div className="aboutPage">
      <h1>Three Generations of blade making</h1>
      <Maple />
      <Evo />
      <SkateTech />
      <FounderBio />
    </div>
  );
};

export default About;
