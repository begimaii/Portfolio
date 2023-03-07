import "./App.css";
import Navbar from "./components/Navbar";
import { Home, About, Skills, Projects } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
