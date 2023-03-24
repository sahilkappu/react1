import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link
            className={`navbar-brand ${
              props.mode === "light" ? "text-dark" : "text-light"
            }`}
            to="/"
          >
            {props.tittle}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active ${
                    props.mode === "light" ? "text-dark" : "text-light"
                  }`}
                  to="/about"
                >
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label ${
                  props.mode === "light" ? "text-dark" : "text-light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.prototype = { tittle: PropTypes.string, about: PropTypes.string };
Navbar.defaultProps = { tittle: "default tittle", about: "write here" };
