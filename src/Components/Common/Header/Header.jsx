import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="container my-3 mx-3">
        <div className="row">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/Home/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" Link to="/About/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
