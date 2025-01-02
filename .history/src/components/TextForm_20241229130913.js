import React from 'react'

export default function TextForm() {
  return (
    <div classsName="container">
        <div className="mb-3">
            <label for="textBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="textBox" rows="3"></textarea>
        </div>
    </div>
  )
}
