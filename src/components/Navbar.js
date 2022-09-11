import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm  navbar-expand-lg light">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          <img
            src="https://o.remove.bg/downloads/fce8ff4b-9aa7-43bd-bdcb-9f7c663faefe/deniz-altindas-t1XLQvDqt_4-unsplash-removebg-preview.png"
            alt="..."
            height="70"
            width="50"
          />
        </Link> */}
        {/* <Link className="navbar-brand " to="/">
          CurrentHappenings
        </Link> */}
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/"
                style={{ color: "purple" }}
              >
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/"
                style={{ color: "purple" }}
              >
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex justify-content-center"
                to="/about"
                style={{ color: "purple" }}
              >
             About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
