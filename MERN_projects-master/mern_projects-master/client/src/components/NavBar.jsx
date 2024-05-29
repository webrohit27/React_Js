import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "../css/Navbar.css";

const NavBar = () => {
  const { isLoggedIn, isAdmin } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex px-5">
          <h1 className="navbar-brand main-navbar-heading">MERN PROJECT</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {isLoggedIn && isAdmin ? (
                <li className="nav-item ">
                  <NavLink to="/admin/adminHome">
                    <p className="nav-link " aria-current="page">
                      Admin
                    </p>
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              <li className="nav-item ">
                <NavLink to="/about">
                  <p className="nav-link ">Home</p>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/contact">
                  <p className="nav-link ">contact</p>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/service">
                  <p className="nav-link ">services</p>
                </NavLink>
              </li>

              {isLoggedIn ? (
                <>
                  <li className="nav-item ">
                    <NavLink to="/logout">
                      <p className="nav-link  text-danger">logout</p>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <NavLink to="/login">
                      <p className="nav-link ">Login</p>
                    </NavLink>
                  </li>

                  <li className="nav-item ">
                    <NavLink to="/register">
                      <p className="nav-link ">register</p>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
