import DefaultAccessible from "./components/Accessible";
import DefaultFeature from "./components/Features";
import DefaultHeader from "./components/Header";
import AnythingCards from "./components/AnythingCards";

function App() {
  return (
    <div className="App">
      <DefaultHeader />
      <DefaultFeature />
      <DefaultAccessible />
      <AnythingCards />
    </div>
  );
}

export default App;
