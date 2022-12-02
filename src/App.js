import "./App.css";
import ResponsiveAppBar from "./Components/Menu";
import Banner from "./Components/Banner";
import Service from "./Components/Service";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Banner />
      <Service />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
