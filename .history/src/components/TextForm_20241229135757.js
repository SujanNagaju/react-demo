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
    <div>
      <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="textBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
    </>
  )
}
