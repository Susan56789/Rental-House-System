import axios from "axios";
import React, { useState } from "react";
import "./signup.css";
import FormData from "form-data";
import { withRouter } from "react-router";

const SignUp = (props) => {
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    alert("Registration Successful! Proceed to Log in.");
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form_data = new FormData();
    form_data.append("name", { onchange });

    let data = {
      id: id,
      email: email,
      name: name,
      username: username,
      password: password,
    };

    await axios
      .post("https://rental-house-server.vercel.app/users", form_data)
      .then((response) => {
        setLoading(false);

        response.data();
      })
      .then((result) => {
        JSON.stringify(result);
        console.log("response >>>", result);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something is wrong. Try again later !");
        console.log(error);
      });

    props.history.push("/Home");
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <h2 className="card-title text-center">Register</h2>
              <div className="card-body py-md-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="integers"
                      className="form-control"
                      name="id"
                      onChange={(e) => setId(e.target.value)}
                      placeholder="Enter Your ID Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Names"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Your username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>

                  {error && (
                    <>
                      <small style={{ color: "red" }}>{error}</small>
                      <br />
                    </>
                  )}
                  <br />
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <input
                      type="submit"
                      value={loading ? "Loading..." : "CREATE"}
                      disabled={loading}
                      className="btn btn-primary m-3"
                    />

                    <button className="btn btn-primary">
                      <a href="/">Cancel</a>
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
};
export default withRouter(SignUp);
