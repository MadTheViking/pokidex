
import './App.css';
import {Home} from "./PokimonNav/Pokihome";
import {Pokidex} from "./PokimonNav/Pokidex";
import{ BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";


const App = ()  => {
  return (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Pokidex">Pokimon</Link>
        </li> 
      </ul>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Pokidex" element={<Pokidex/>} />
    </Routes>
  </Router>
  );
};
export default App;
