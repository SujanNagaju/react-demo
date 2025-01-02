import logo from './logo.svg';
import './App.css';

let name="Hary";
function App() {
  return (
    <>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className="container">
      <h1>Hello {name} </h1>
      <p>Lorem ipsum</p>
    </div>
    </>
  );
}

export default App;
