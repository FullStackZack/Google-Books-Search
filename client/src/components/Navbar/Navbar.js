import React from 'react';
import { Link } from "react-router-dom";

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Google Books Search</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={'/'}><a className="nav-link" href="google.com">Search <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item">
            <Link to={'/saved'}><a className="nav-link" href="google.com">Saved</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;