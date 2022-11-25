import message from "./img/message.svg";
import pin from "./img/pin.svg";
import ChartLine from "./img/ChartLine.svg";
import Card from "./Card";
import "./styles/Explore.css";
const DefaultExplore = () => {
  return (
    <div className="explore">
      <h2>Explore more features</h2>
      <div className="explorecards">
        <Card
          bgcolor="#D1FADF"
          icn={ChartLine}
          title="Statistically"
          text="Weatherly is the best friendly user and most accurate weather service, pinpointed to any microclimate."
        />
        <Card
          bgcolor="#FDEAD7"
          icn={pin}
          title="Add multiple location"
          text="Being up to date about the weather condition in other Locations is better."
        />
        <Card
          bgcolor="#D1FADF"
          icn={message}
          title="Daily notification"
          text="Would you like to know how the weather would be in thee next few hours or even through out the day!"
        />
      </div>
    </div>
  );
};

export default DefaultExplore;
