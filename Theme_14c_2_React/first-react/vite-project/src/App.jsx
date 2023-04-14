import "./App.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import ValueGrid from "./Components/ValueGrid";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Companies />
      <ValueGrid />
    </div>
  );
}

export default App;
