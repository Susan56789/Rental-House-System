import React, { Component } from "react";
import "./signup.css";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <h2 className="card-title text-center">Register</h2>
                <div className="card-body py-md-4">
                  <form _lpchecked="1">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="confirm-password"
                        placeholder="confirm-password"
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <button className="btn btn-primary">
                        <a href="/Login">Login</a>
                      </button>
                      <button className="btn btn-primary">
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
