import "./styles/Accessible.css";
import acesimg from "./img/acesimg.svg";
const DefaultAccessible = () => {
  return (
    <div className="accessible-container">
      <div className="accessible">
        <div className="zero">
          <h1>01</h1>
          <h3>Accessible for everyone</h3>
        </div>
        <div className="start">
          <div className="txt">
            <p>
              Our product is designed to serve all users with interactive and
              customized experirence, Users get to personalize the product
              however they like
            </p>
            <div className="btn">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="divacesimg">
        <div className="image">
          <img src={acesimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DefaultAccessible;
