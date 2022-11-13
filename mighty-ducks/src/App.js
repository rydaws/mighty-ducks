
import AirNavBar from './components/AirNavBar';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import History from './pages/History'
import Bookings from './pages/Bookings'

import Favorites from './pages/Favorites'
import Login from './components/Login'
import Logout from "./components/Logout";


import RecordList from "./components/recordList";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <AirNavBar />
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Record" element={<RecordList />} />
            <Route path="/About" element={<About />} />
            <Route path="/History" element={<History />} />
            <Route path="/Bookings" element={<Bookings />} />
            <Route path="/Favorites" element={<Favorites />}/>
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Logout" element={<Logout />} />
      </Routes>   
    </div>
  );
}


export default App;

