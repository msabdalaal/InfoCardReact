import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interestes from "./components/Interestes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Main">
      <Info />
      <About />
      <Interestes />
      <Footer />
    </div>
  );
}

export default App;
