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

  const handleBlinkPreviewClick =() =>{
    const Speech = new SpeechSynthesisUtterance();
    const message= document.getElementById("blinkPreview");
    let blinkCount = 0; // Counter for the number of blinks
    const maxBlinks = 5; // Total number of blinks (on + off = 1 blink)

    const interval = setInterval(() => {
      // Toggle visibility
      element.style.display = element.style.display === 'none' ? 'block' : 'none';

      // Increment blink count only when the element is hidden
      if (element.style.display === 'none') {
        blinkCount++;
      }

      // Stop blinking after the desired number of blinks
      if (blinkCount === maxBlinks) {
        clearInterval(interval);
        element.style.display = 'block'; // Ensure the element remains visible
      }
    }, 500); // Blink interval (500ms = half a second)
  }
  
  const [text, setText] = useState("");
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
          <button className="btn btn-primary mx-2" onClick={handleBlinkPreviewClick}>Blink Preview</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
      </div>

      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} minutes read</p>
        <h3>Preview</h3>
        <p id="blinkPreview">{text}</p>
      </div>
    </>
  )
}
