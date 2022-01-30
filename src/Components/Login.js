import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { withRouter } from "react-router";
import { setUserSession } from "./Common";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    await axios
      .post("https://rental-house-server.vercel.app/user/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(
          response.data.token,
          response.data.user.name,
          response.data.user.username
        );
        //console.log("response >>>", response);
        props.history.push("/Home");
      })
      .then((res) => {
        JSON.stringify(res);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 400 || error.response.status === 401) {
          setError(error.response.data.message);
        } else {
          setError("Something is wrong. Please try again later !");
        }
        console.error("Error >>>", error);
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
              <form onSubmit={handleSubmit} id="user">
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text"></div>
                  <div className="col-lg-6 login-btm login-button">
                    {error && (
                      <>
                        <small style={{ color: "red" }}>{error}</small>
                        <br />
                      </>
                    )}
                    <br />
                    <input
                      type="submit"
                      value={loading ? "Loading..." : "LOGIN"}
                      onSubmit={handleSubmit}
                      disabled={loading}
                      className="btn btn-outline-primary"
                    />
                  </div>
                  <div className="col-lg-6 login-btm login-button"></div>
                  <div className="col-lg-6 login-btm login-button">
                    <button className="btn btn-outline-primary m-3">
                      <a href="/SignUp">SIGN UP</a>
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
