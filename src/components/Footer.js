import "./styles/Footer.css";
import weathery from "./img/w-weathery.svg";
import AP from "./img/AP.svg";
import GP from "./img/GP.svg";
import unitedkingdom from "./img/unitedkingdom.svg";
import personsupport from "./img/personsupport.svg";
import world from "./img/world.svg";
const DefaultFooter = () => {
  return (
    <div className="defaultfooter">
      <div className="footer">
        <div className="f-img">
          <img src={weathery} alt="" />
          <p>Weathery</p>
        </div>
        <div className="f-text">
          <p>Download the mobile App</p>
        </div>
      </div>
      <div className="f-links">
        <div className="ff-links">
          <li>About Us</li>
          <li>Careers</li>
          <li>Weather News</li>
          <li>For Business</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </div>
        <div className="ff-img">
          <div className="ap">
            <img src={AP} alt="AP" />
          </div>
          <div className="gp">
            <img src={GP} alt="GP" />
          </div>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="finaltext">
        <div className="textalone">
          <p> © 2022 Weathery, All rights reserved to Team Gear</p>
        </div>
        <div className="text-img">
          <div className="lang">
            <img src={world} alt="world" />
            <h5> English</h5>
          </div>
          <div className="support">
            <img src={unitedkingdom} alt="unitedkingdom" />
            <h5>United Kingdom</h5>
          </div>
          <div className="world">
            <img src={personsupport} alt="personsupport" />
            <h5>Customer Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultFooter;
