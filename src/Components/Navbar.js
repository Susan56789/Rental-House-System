import React, { Component } from "react";
import "./styles.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-light fixed-top bg-dark"
          style={{ padding: 0, display: "flex" }}
        >
          <a className="nabvar-item" href="/Settings" id="manage_my_account">
            <i className="fa fa-cog"></i> Manage Account
          </a>
          <a className="navbar-item" href="/">
            <i className="fa fa-power-off"></i> Logout
          </a>
        </nav>
      </>
    );
  }
}
