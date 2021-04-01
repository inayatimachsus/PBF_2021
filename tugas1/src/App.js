import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Identitas Diri : </h3>
        <p>
          <b> Nama : </b>Inayati Machsus Izza Addin<br></br>
          <b> NIM : </b>1841720202<br></br>
        </p>
        <a
          className="App-link"
          href="https://github.com/inayatimachsus"
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