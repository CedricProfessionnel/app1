import logo from './logo.svg';
import './App.css';
import Composante1 from "./components/1"
import Composante2 from "./components/2"
import AzureButton from "./components/AzureButton"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Composante1></Composante1>
        <Composante2/>
        <AzureButton/>
      </header>
    </div>
  );
}

export default App;
