import React from "react";
import "./styles.css";
import auth from "./Auth";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-light fixed-top bg-dark"
        style={{ padding: 0, display: "flex" }}
      >
        <a className="nabvar-item" href="/Settings" id="manage_my_account">
          <i className="fa fa-cog"></i> Manage Account
        </a>
        <a href="/" className="navbar-item">
          <i className="fa fa-power-off"></i> Logout
        </a>
      </nav>
    </>
  );
};

export default Navbar;
