import Intro from "./Components/Intro/Intro.js"
import Menu from "./Components/Menu/Menu.js"
import About from "./Components/About/About.js";
import "./App(import)";

const App = () => {
  return (
    // parent
    <div>
      {/* intro */}
      <Intro />
      {/* menu */}
      <Menu />
      {/* about */}
      <About />
      {/* contact */}
    </div>
  );
};

export default App;
