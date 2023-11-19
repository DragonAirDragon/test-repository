import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Ищенко Никита Николаевич PRequest";
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
      </header>
    </div>
  );
}

export default App;
