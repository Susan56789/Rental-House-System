import React, { Component } from "react";
import "./header.css";
import image from "../images/building2.jpg";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header-blue">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <a className="navbar-brand" href="/">
                House Management
              </a>
              <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" href="##">
                      Link
                    </a>
                  </li>
                </ul>
                <form className="form-inline mr-auto" target="_self">
                  <div className="form-group">
                    <label for="search-field">
                      <i className="fa fa-search"></i>
                    </label>
                    <input
                      className="form-control search-field"
                      type="search"
                      name="search"
                      id="search-field"
                    />
                  </div>
                </form>
                <span className="navbar-text">
                  {" "}
                  <a href="/Login" className="login">
                    Log In
                  </a>
                </span>
                <a
                  className="btn btn-light action-button"
                  role="button"
                  href="/SignUp"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
          <div className="container hero">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                <h1>Rental House Management System.</h1>
                <p>
                  Manage your tenants at the comfort of your home. Log in to
                  view, update or delete data;
                </p>

                <a
                  className="btn btn-light btn-lg action-button"
                  role="button"
                  href="##"
                >
                  Learn More
                </a>
              </div>
              <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                <div className="iphone-mockup">
                  <img src={image} className="device" alt="" />
                  <div className="screen"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
