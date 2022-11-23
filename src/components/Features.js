import "./styles/Features.css";
import screen from "./img/screen.png";
const DefaultFeature = () => {
  return (
    <div className="feature">
      <div className="text">
        <h3>FEATURES</h3>
        <h1>Explore features of Weatherly </h1>
        <div className="content">
          <p>
            Stay informed about weather events and protected with Weathery
            forecasts in real-time.
          </p>
        </div>
        <div className="btn">
          <div className="start">
            <button id="start">Get started</button>
          </div>
          <div className="view">
            <button id="view">View all features</button>
          </div>
        </div>
      </div>
      <div className="imgs">
        <img src={screen} alt="screen" id="screen" />
      </div>
    </div>
  );
};

export default DefaultFeature;
