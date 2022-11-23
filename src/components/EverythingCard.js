import Smiley from "./img/Smiley.svg";
import sheildzap from "./img/shieldzap.svg";
import Timer from "./img/Timer.svg";
import Card from "./Card";
import "./styles/EverythingCard.css";
const EverythingCards = () => {
  return (
    <div className="everythingcards">
      <Card
        bgcolor="white"
        icn={Smiley}
        title="Free"
        text="The weatherly app is free to use on all platforms. It is easy to navigate and use."
      />
      <Card
        bgcolor="white"
        icn={Timer}
        title="Minutes forecasts"
        text="Get real-time precipitation forecasts with detailed information, as well as start and end times for precipitation for up to the next four hours."
      />
      <Card
        bgcolor="white"
        icn={sheildzap}
        title="Safety alerts"
        text="Weatherly precise alert notifications and warnings on potential hazardous weather threats, help users plan their day and make the best decisions for greater safety."
      />
    </div>
  );
};

export default EverythingCards;
