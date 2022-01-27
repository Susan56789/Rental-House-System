import axios from "axios";
import React, { useState } from "react";
import "./signup.css";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://rental-house-server.vercel.app/users", {
        id: id,
        email: email,
        name: name,
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("response >>>", response);
        JSON.stringify(response);
      })
      .catch((error) => {
        setLoading(false);

        if (password !== confirmpassword) {
          setError("Passwords do not match !");
        }

        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <h2 className="card-title text-center">Register</h2>
              <div className="card-body py-md-4">
                <form>
                  <div className="form-group">
                    <input
                      type="integers"
                      className="form-control"
                      name={id}
                      onChange={(e) => setId(e.target.value)}
                      placeholder="Enter Your ID Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Names"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Your username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="confirm-password"
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
                      onSubmit={handleSubmit}
                      disabled={loading}
                      className="btn btn-primary m-3"
                    />

                    <button className="btn btn-primary">
                      <a href="/Login">LOGIN</a>
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
export default SignUp;
