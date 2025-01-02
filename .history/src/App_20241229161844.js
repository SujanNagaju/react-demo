// logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {

  const [mode, setMode] = useState("light");

  return (
    <>
      
      {/* <Navbar title="TextUtils..." aboutText="About"/> */}
      <Navbar title="TextUtils..." mode={mode}/>
      <div className="container">
        <TextForm heading="Enter your text to analyze"/>
        {/* <About title="About us"/> */}
      </div>
    </>
  );
}

export default App;
