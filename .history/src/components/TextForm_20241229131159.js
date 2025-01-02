import React from 'react'

export default function TextForm(props) {
  return (
    <div>
      <h2>{props.heading}</h2>
        <div className="mb-3">
            <label for="textBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="textBox" rows="3"></textarea>
        </div>
    </div>
  )
}
