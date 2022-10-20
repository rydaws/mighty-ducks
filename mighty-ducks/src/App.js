
import AirNavBar from './components/AirNavBar';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import History from './pages/History'
import Bookings from './pages/Bookings'




import Login from './components/Login'

import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <AirNavBar />
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Record" element={<RecordList />} />
            <Route path="/About" element={<About />} />
            <Route path="/History" element={<History />} />
            <Route path="/Bookings" element={<Bookings />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/edit/:id" element={<Edit />} />
      </Routes>   
    </div>
  );
}


export default App;

