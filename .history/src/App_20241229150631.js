// logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      
      {/* <Navbar title="TextUtils..." aboutText="About"/> */}
      <Navbar title="TextUtils..."/>
      <div className="container">
        {/* <TextForm heading="Enter your text to analyze"/> */}
        <About title="About us"/>
      </div>
    </>
  );
}

export default App;
