import React, {useState} from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  console.log( useState("Enter text here") )
  return (
    <div>
      <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="textBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert to upper case</button>
    </div>
  )
}
