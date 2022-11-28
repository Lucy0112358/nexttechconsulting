import "./App.css";
import ResponsiveAppBar from "./Components/Menu";
import Banner from "./Components/Banner"
import Service from "./Components/Service";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Banner />
      <Service />
    </div>
  );
}

export default App;
