import React, { useEffect, useState } from "react";
import "./Login.css";
import auth from "./Auth";
import { withRouter } from "react-router";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([]);

  async function loginUser(credentials) {
    return fetch("https://rental-house-server.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
  }

  async function checkUser() {
    const user = await fetch("https://rental-house-server.vercel.app/users", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setUsers(user);
  }

  useEffect(() => {
    checkUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    users.map((req) => {
      if (req.emai && req.password === email && password) {
        return loginUser({ email, password });
      } else {
        return "User does not Exist. Sign Up !";
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="col-lg-12 login-title">ADMIN PANEL</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-control-label">EMAIL</label>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text"></div>
                  <div className="col-lg-6 login-btm login-button">
                    <button
                      onClick={() => {
                        auth.login(() => {
                          props.history.push("/Home");
                        });
                      }}
                      type="button"
                      className="btn btn-outline-primary m-3"
                    >
                      LOGIN
                    </button>
                  </div>
                  <div className="col-lg-6 login-btm login-button"></div>
                  <div className="col-lg-6 login-btm login-button">
                    <button className="btn btn-outline-primary m-3">
                      <a href="/">BACK</a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
