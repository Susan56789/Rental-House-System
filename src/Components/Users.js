import React, { Component } from "react";
import "./styles.css";

export default class Users extends Component {
  render() {
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
          <div className="row">
            <div className="card col-lg-12">
              <div className="card-body">
                <table className="table-striped table-bordered col-md-12">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Username</th>
                      <th className="text-center">Type</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center"></td>
                      <td></td>

                      <td></td>
                      <td></td>
                      <td>
                        <center>
                          <div className="btn-group">
                            <button type="button" className="btn btn-primary">
                              Action
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
