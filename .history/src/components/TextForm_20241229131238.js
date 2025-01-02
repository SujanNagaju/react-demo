import React from 'react'

export default function TextForm(props) {
  return (
    <div>
      <h2>{props.heading}</h2>
        <div className="mb-3">
            <label for="textBox" className="form-label"></label>
            <textarea className="form-control" id="textBox" rows="8"></textarea>
        </div>
    </div>
  )
}