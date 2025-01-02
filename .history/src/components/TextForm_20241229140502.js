import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=> {
    // console.log( "Uppercase was clicked" );
    let newText = text.toUpperCase();
    setText( newText );
  }

  const handleOnChange = (event)=> {
    // console.log( "handle text change" );
    setText(event.target.value);
  }
  
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control" id="textBox" onChange={handleOnChange} value={text} rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
      </div>

      <div className="container">
        <h2>Your text summary</h2>
        let textLength = {text.split( " " ).length};

        <p>{textLength} words, {text.length} characters</p>
        <p>{0.46 * text.split(" ").length} minutes read</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
