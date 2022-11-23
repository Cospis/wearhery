import DefaultAccessible from "./components/Accessible";
import DefaultFeature from "./components/Features";
import DefaultHeader from "./components/Header";
import AnythingCards from "./components/AnythingCards";
import DefaultEverything from "./components/Everything";

function App() {
  return (
    <div className="App">
      <DefaultHeader />
      <DefaultFeature />
      <DefaultAccessible />
      <AnythingCards />
      <DefaultEverything />
    </div>
  );
}

export default App;
