import multilingual from "./img/multilingual.svg";
import customizable from "./img/customizable.svg";
import responsive from "./img/responsive.svg";
import Card from "./Card";
import "./styles/AnythingCards.css";
const AnythingCards = () => {
  return (
    <div className="anythingcards">
      <Card
        bgcolor="white"
        icn={multilingual}
        title="Multilingual"
        text="Available in different languages for all type of users. More languages coming in the future."
      />
      <Card
        bgcolor="white"
        icn={responsive}
        title="Responsive"
        text="This website will respond to the size of its container. It can fit nicely in the main content area or a sidebar, and automatically respond to fit in all devices"
      />
      <Card
        bgcolor="white"
        icn={customizable}
        title="Customizable"
        text="Lots of things are customizable including the colors, forecast days  and labels"
      />
    </div>
  );
};

export default AnythingCards;
