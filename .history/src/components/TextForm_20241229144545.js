import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=> {
    // console.log( "Uppercase was clicked" );
    let newText = text.toUpperCase();
    setText( newText );
  }

  const handleLowerClick = ()=> {
    // console.log( "Uppercase was clicked" );
    let newText = text.toLowerCase();
    setText( newText );
  }

  const handleUpdateWordsClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.replace(/chamatkar/gi, "balatkar");
    setText(newText);
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event)=> {
    // console.log( "handle text change" );
    setText(event.target.value);
  }

  const handleTextToSpeechClick =() =>{
    const Speech = new SpeechSynthesisUtterance();
    const message= document.getElementById("textBox").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
  }
  
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" id="textBox" onChange={handleOnChange} value={text} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
          <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lower case</button>
          <button className="btn btn-primary mx-2" onClick={handleUpdateWordsClick}>Update Words</button>
          <button className="btn btn-primary mx-2" onClick={handleTextToSpeechClick}>Text to Speech</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      </div>

      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{(90.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
