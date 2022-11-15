import AirNavBar from './components/AirNavBar';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Bookings from './pages/Bookings'
import CityBookings from './pages/CityBookings'
import Login from './components/Login'
import RecordList from "./components/recordList";
import Signup from "./components/signup";
import Logout from "./components/Logout";
import Favorites from './pages/favorites'

function App() {
  return (
    <div className="App">
      <AirNavBar />
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Record" element={<RecordList />} />
            <Route path="/CityBookings" element={<CityBookings />} />
            <Route path="/Bookings" element={<Bookings />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Favorites" element={<Favorites />} />
      </Routes>   
    </div>
  );
}


export default App;

