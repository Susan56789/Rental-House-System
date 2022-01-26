import React from "react";
import "./styles.css";

import { removeUserSession, getUser } from "./Common";

import { withRouter } from "react-router";

const Navbar = (props) => {
  const handleLogout = () => {
    removeUserSession();

    props.history.push("/Login");
  };

  const user = getUser();

  return (
    <>
      <nav
        className="navbar navbar-light fixed-top bg-dark"
        style={{ padding: 0, display: "flex" }}
      >
        <button className="btn btn-light">
          <a className="nabvar-item" href="/Settings" id="manage_my_account">
            <i className="fa fa-cog"></i> Manage Account
          </a>
        </button>

        <h5>
          <span>Welcome {user}!</span>
        </h5>

        <button onClick={handleLogout} className="btn btn-light navbar-item">
          <i className="fa fa-power-off"></i> Logout
        </button>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
