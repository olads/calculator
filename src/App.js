import Calc from "./components/Calc";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

//export const AppContext = createContext(null)

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Calc />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
