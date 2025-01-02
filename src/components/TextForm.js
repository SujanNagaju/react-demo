import React, {useState} from 'react';
import Button from './Button';

export default function TextForm(props) {
  const handleUpClick = ()=> {
    // console.log( "Uppercase was clicked" );
    let newText = text.toUpperCase();
    setText( newText );
    props.showAlert( 'Converted to upper case', 'success' );
  }

  const handleLowerClick = ()=> {
    // console.log( "Uppercase was clicked" );
    let newText = text.toLowerCase();
    setText( newText );
    props.showAlert("Converted to lower case", "success");
  }

  /* const handleUpdateWordsClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.replace(/chamatkar/gi, "balatkar");
    setText(newText);
  }; */

  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
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
    const element= document.getElementById("blinkPreview");
    let blinkCount = 0; // Counter for the number of blinks
    const maxBlinks = 5; // Total number of blinks (on + off = 1 blink)

    const interval = setInterval(() => {
      // Toggle visibility
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
      element.style.color = 'red';

      // Increment blink count only when the element is hidden
      if (element.style.display === 'none') {
        blinkCount++;
      }

      // Stop blinking after the desired number of blinks
      if (blinkCount === maxBlinks) {
        clearInterval(interval);
        element.style.display = 'block'; // Ensure the element remains visible
        element.style.color = props.mode === 'light' ? 'black' : 'white';
      }
    }, 200); // Blink interval (500ms = half a second)
  }
  
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.contentColor }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textBox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode,
              color: props.contentColor,
            }}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <Button
          className={`btn btn-${props.buttonType} mx-2`}
          onClick={handleUpClick}
          buttonLabel=" Convert to upper case"
          id="uppercase-convert"
        />
        <Button
          className={`btn btn-${props.buttonType} mx-2`}
          onClick={handleLowerClick}
          buttonLabel=" Convert to Lower case"
        />
        {/* <Button className="btn btn-primary mx-2" onClick={handleUpdateWordsClick}>Update Words</button> */}
        <Button
          className={`btn btn-${props.buttonType} mx-2`}
          onClick={handleTextToSpeechClick}
          buttonLabel=" Text to Speech"
        />
        <Button
          className={`btn btn-${props.buttonType} mx-2`}
          onClick={handleBlinkPreviewClick}
          buttonLabel=" Blink Preview"
        />
        <Button
          className={`btn btn-${props.buttonType} mx-2`}
          onClick={handleClearClick}
          buttonLabel=" Clear"
        />
          
      </div>
      <div className="container" style={{ color: props.contentColor }}>
        <h2>Your text summary</h2>
        <p>{props.mode}</p>
        <p>
          {text.split(" ").length - 1} words, {text.length} characters
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} minutes read</p>
        <h3>Preview</h3>
        <p id="blinkPreview" style={{ color: props.contentColor }}>
          {text !== "" ? text : props.previewText}
        </p>
      </div>
    </>
  );
}
