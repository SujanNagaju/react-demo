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
      document.body.style.backgroundColor = '#201e2e';
      // document.body.style.color = 'white';
    } else {
      setMode( 'light' );
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
    }
  }
  return (
    <>
      
      {/* <Navbar title="TextUtils..." aboutText="About"/> */}
      <Navbar title="TextUtils..." aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter your text to analyze" previewText="Enter text to generate preview" mode={mode}/>
        {/* <About title="About us"/> */}
      </div>
    </>
  );
}

export default App;
