// logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  
  const [mode, setMode] = useState("light");
  const toggleMode = ()=> {
    if( mode === 'light' ) {
      setMode( 'dark' );
      document.body.style.backgroundColor = 'black';
    } else {
      setMode( 'light' );
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      
      {/* <Navbar title="TextUtils..." aboutText="About"/> */}
      <Navbar title="TextUtils..." aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter your text to analyze"/>
        {/* <About title="About us"/> */}
      </div>
    </>
  );
}

export default App;