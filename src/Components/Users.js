import React, { useEffect, useState } from "react";
import "./styles.css";

const Users = () => {
  const [user, SetUser] = useState([]);

  const getUser = async () => {
    let url = "https://rental-house-server.vercel.app/users";

    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        });
      SetUser(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <button
              className="btn btn-primary float-right btn-sm"
              id="new_user"
            >
              <i className="fa fa-plus"></i> New user
            </button>
          </div>
        </div>
        <br />
        <div className="d-flex flex-row align-items-center justify-content-between">
          <a href="/Home" className="btn btn-primary m-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </div>
        <div className="row">
          <div className="card col-lg-12">
            <div className="card-body">
              <table className="table-striped table-bordered col-md-12">
                <thead>
                  <tr className="col">
                    <th className="text-center">#</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Username</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((users) => (
                    <tr className="col" key={Math.floor(Math.random() * 1000)}>
                      <td>{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.username}</td>
                      <td>{users.email}</td>

                      <td>
                        <center>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Action
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item edit_user"
                                href="Edit"
                                data-id=""
                              >
                                Edit
                              </a>
                              <div className="dropdown-divider"></div>
                              <a
                                className="dropdown-item delete_user"
                                href="Delete"
                                data-id=""
                              >
                                Delete
                              </a>
                            </div>
                          </div>

                          <button type="button" className="btn btn-primary m-3">
                            <a href="/Home">Back</a>
                          </button>
                        </center>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
