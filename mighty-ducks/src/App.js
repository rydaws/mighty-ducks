import logo from './logo.svg';
import './App.css';
import thing from './IMG_2570.JPG';

function App() {
  return (
    <div className="App">
      <header className="what-header">
        <img src={thing} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo2" alt="logo2"/>
        <p>
          Mason trying to pick up chicks
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
