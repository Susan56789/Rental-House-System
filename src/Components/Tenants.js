import React, { Component } from "react";
import "./styles.css";

export default class Tenants extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="row mb-4 mt-4">
              <div className="col-md-12"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <b>List of Tenant</b>
                    <span className="float:right">
                      <a
                        className="btn btn-primary btn-block btn-sm col-sm-2 float-right"
                        href="javascript"
                        id="new_tenant"
                      >
                        <i className="fa fa-plus"></i> New Tenant
                      </a>
                    </span>
                  </div>
                  <div className="card-body">
                    <table className="table table-condensed table-bordered table-hover">
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th className="">Name</th>
                          <th className="">House Rented</th>
                          <th className="">Monthly Rate</th>
                          <th className="">Outstanding Balance</th>
                          <th className="">Last Payment</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center"></td>
                          <td></td>
                          <td className="">
                            <p>
                              {" "}
                              <b></b>
                            </p>
                          </td>
                          <td className="">
                            <p>
                              {" "}
                              <b></b>
                            </p>
                          </td>
                          <td className="text-right">
                            <p>
                              {" "}
                              <b></b>
                            </p>
                          </td>
                          <td className="">
                            <p>
                              <b></b>
                            </p>
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-sm btn-outline-primary view_tenant m-3"
                              type="button"
                              data-id=""
                            >
                              View
                            </button>
                            <button
                              className="btn btn-sm btn-outline-primary edit_tenant m-3"
                              type="button"
                              data-id=""
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger delete_tenant m-3"
                              type="button"
                              data-id=""
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
