import React, {useState} from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const 

  return (
    <div>
      <h2>{props.heading} - {text}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="textBox" value="{text}" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
  )
}
