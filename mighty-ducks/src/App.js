//import './App.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import AirNavBar from './components/AirNavBar';
function App() {
  return (
    <div className="App">
      <AirNavBar />
      <Header />
      <Content />
      <Footer />
    
    </div>
  );
}


export default App;

