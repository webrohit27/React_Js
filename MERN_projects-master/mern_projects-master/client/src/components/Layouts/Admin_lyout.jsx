import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

import { useAuth } from "../../store/auth";

const Admin_lyout = () => {
  const { user, isLoading } = useAuth();

  // console.log("admin layout",user);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex px-5">
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
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-5 text-primary">
                <NavLink to={"/admin/adminHome"}>
                  <p className="nav-link">
                    {" "}
                    <FaHome />
                    Home
                  </p>
                </NavLink>
              </li>

              <li className="nav-item mx-5 text-primary">
                <NavLink to={"/admin/adminUsers"}>
                  <p className="nav-link">
                    <FaUser /> users
                  </p>
                </NavLink>
              </li>
              <li className="nav-item mx-5 text-primary">
                <NavLink to={"/admin/admincontacts"}>
                  <p className="nav-link">
                    {" "}
                    <FaRegListAlt /> Contacts
                  </p>
                </NavLink>
              </li>
              <li className="nav-item mx-5 text-primary">
                <NavLink to={"/admin/adminServices"}>
                  <p className="nav-link">
                    {" "}
                    <FaMessage /> Services
                  </p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Admin_lyout;
