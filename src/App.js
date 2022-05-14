import Calc from "./components/Calc";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import './App.css';


//export const AppContext = createContext(null)

const App = () => {
  return (
  
      <div className="app">
        <Nav />
        
        <Calc />
        <Footer />
      </div>

  );
};

export default App;
