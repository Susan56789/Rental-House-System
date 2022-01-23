import React, { Component } from "react";
import "./styles.css";

export default class Login extends Component {
  render() {
    return (
      <>
        <main id="main" className=" bg-light">
          <div className="w-100">
            <h4 className="text-white text-center">
              <b>{/**<?php echo $_SESSION['system']['name'] ?> */}</b>
            </h4>
            <br />
            <br />
            <div className="card col-md-8">
              <div className="card-body">
                <form id="login-form">
                  <div className="form-group">
                    <label for="username" className="control-label">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label for="password" className="control-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                  <center>
                    <button className="btn-sm btn-block btn-wave col-md-4 btn-primary">
                      Login
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </main>

        <a href="#top" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
      </>
    );
  }
}
