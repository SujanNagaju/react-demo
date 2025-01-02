// logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {colorData, buttonTypes} from './constants/ButtonCons';

function App() {
  
  // States
  const [mode, setMode] = useState("#ffffff");
  const [alert, setAlert] = useState(null);
  const [contentColor, setContentColor] = useState("black");
  const [navBarBackground, setNavbarBg] = useState("#b1b9c1");

  const[buttonType, setButtonType] = useState('primary');

  // Functions to set state variables
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout( ()=> {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = (colorProperties) => {
    let { value : colorCode, colorName, textColor, navBarBackground } = colorProperties;
    if( colorCode === mode ) {
      setMode( '#ffffff' );
      colorCode = '#ffffff';
      colorName= "Light"
      textColor = 'black';
      navBarBackground = "#b1b9c1";
    }

    setContentColor(textColor);
    setMode(colorCode);
    setNavbarBg( navBarBackground );
    document.body.style.backgroundColor = ( "light" === colorCode ) ? "white" : colorCode;
    showAlert(`Mode : ${colorName} have been enabled`, "success");
    

    setupBtnType(colorName);
    
  };

 

  const setupBtnType = (currentColor) => {

    const buttonTypeObj = buttonTypes.find((type) => type[currentColor]);
    const buttonType = buttonTypeObj ? buttonTypeObj[currentColor] : "primary";
    setButtonType(buttonType);
    
  }


  return (
    <>
      {/* <Navbar title="TextUtils..." aboutText="About"/> */}
      <Navbar
        title="TextUtils..."
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        navBarBackground={navBarBackground}
        colorData={colorData}
        contentColor={contentColor}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter your text to analyze"
          previewText="Enter text to generate new preview"
          mode={mode}
          contentColor={contentColor}
          buttonType={buttonType}
        />
        {/* <About title="About us"/> */}
      </div>
    </>
  );
}

export default App;
