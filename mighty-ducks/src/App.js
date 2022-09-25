//import './App.css';
/*import { Header } from './components/Header'*/
import AirNavBar from './components/AirNavBar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Bookings from './pages/Bookings'
import History from './pages/History'
function App() {
  return (
    <div className="App">
      <AirNavBar />
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/History" element={<History />} />
            <Route path="/Bookings" element={<Bookings />} />
      </Routes>    
    </div>
  );
}


export default App;

