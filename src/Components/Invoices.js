import React, { Component } from "react";
import "./styles.css";

export default class Invoices extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="row mb-4 mt-4">
              <div className="col-md-12"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <b>List of Payments</b>
                    <span className="float:right">
                      <a
                        className="btn btn-primary btn-block btn-sm col-sm-2 float-right"
                        href="#javascript"
                        id="new_invoice"
                      >
                        <i className="fa fa-plus"></i> New Entry
                      </a>
                      <button type="button" className="btn btn-primary m-3">
                        <a href="/Home">Back</a>
                      </button>
                    </span>
                  </div>
                  <div className="card-body">
                    <table className="table table-condensed table-bordered table-hover">
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th className="">Date</th>
                          <th className="">Tenant</th>
                          <th className="">Invoice</th>
                          <th className="">Amount</th>
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
                          <td className="text-center">
                            <button
                              className="btn btn-sm btn-outline-primary edit_invoice m-3"
                              type="button"
                              data-id=""
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger delete_invoice m-3"
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
      </div>
    );
  }
}
