import "./App.css";
import Navbar from "./components/Navbar";
import { Home, About, Skills } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
