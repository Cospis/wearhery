import "./styles/Everything.css";
import Dashboard from "./img/Dashboard.svg";
const DefaultEverything = () => {
  return (
    <div className="everything-container">
      <div className="everything">
        <div className="zero">
          <h1>02</h1>
          <h3>Everything you need</h3>
        </div>
        <div className="start">
          <div className="txt">
            <p>
              Get all the infos you need to make living safer, easier and
              better. We aim at making life easier and better for our users
            </p>
            <div className="btn">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="divacesimg">
        <div className="e-image">
          <img src={Dashboard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DefaultEverything;
