import React from 'react'
import PropTypes from 'prop-types';


// export default function Navbar({title="TextUtils", aboutText="About"}) {
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-secondary bg-${props.mode}`}
      style={{
        backgroundColor: props.navBarBackground,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: props.contentColor }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                style={{ color: props.contentColor }}
              >
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          {props.colorData.map((item, key) => {
            return (
              <div className="form-check form-switch text" key={key}>
                <input
                  className="form-check-input"
                  onClick={() => props.toggleMode(item)}
                  type="checkbox"
                  role="switch"
                  id={`redMode-${key}`}
                  checked={props.mode === item.value ? "checked" : false}
                />
                <label
                  className="form-check-label"
                  htmlFor={`redMode-${key}`}
                  style={{ color: props.contentColor }}
                >
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
