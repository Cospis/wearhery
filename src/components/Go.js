import "./styles/Go.css";
import AP from "./img/AP.svg";
import GP from "./img/GP.svg";
const DefaultGoMobile = () => {
  return (
    <div className="defaultgomobile">
      <div className="gomobile">
        <div className="text">
          <h4>GO MOBILE</h4>
          <h2>Use the free Weathery app</h2>
          <p>
            Explore the flexibility and ease that comes with using our Weatherly
            app on the go!
          </p>
          <div className="go-img">
            <div className="ap">
              <img src={AP} alt="AP" id="AP" />
            </div>
            <div className="gp">
              <img src={GP} alt="GP" id="GP" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultGoMobile;
