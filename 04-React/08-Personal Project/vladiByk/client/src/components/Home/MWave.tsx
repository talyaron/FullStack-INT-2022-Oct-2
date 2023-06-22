import { NavLink } from "react-router-dom";

const MWave = () => {
  return (
    <div className="MWave">
      <div className="img"></div>
      <div className="content">
        <h3>The M-Wave</h3>
        <div>
          <p>More stability</p>
          <p>Improve control</p>
          <p>Higher speeds</p>
        </div>
        <NavLink className="navLink" to="/products">
          <button className="button-6">Read more</button>
        </NavLink>
      </div>
    </div>
  );
};

export default MWave;
