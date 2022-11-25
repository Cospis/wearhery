import DefaultAccessible from "./components/Accessible";
import DefaultFeature from "./components/Features";
import DefaultHeader from "./components/Header";
import AnythingCards from "./components/AnythingCards";
import DefaultEverything from "./components/Everything";
import EverythingCards from "./components/EverythingCard";
import DefaultExplore from "./components/Explore";
import DefaultQuestions from "./components/FAQs";

function App() {
  return (
    <div className="App">
      <DefaultHeader />
      <DefaultFeature />
      <DefaultAccessible />
      <AnythingCards />
      <DefaultEverything />
      <EverythingCards />
      <DefaultExplore />
      <DefaultQuestions />
    </div>
  );
}

export default App;
