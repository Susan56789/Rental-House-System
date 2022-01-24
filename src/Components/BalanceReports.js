import React, { Component } from "react";
import "./styles.css";

export default class BalanceReports extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="col-md-12">
                  <hr />
                  <div className="row">
                    <div className="col-md-12 mb-2">
                      <button
                        className="btn btn-sm btn-block btn-success col-md-2 ml-1 float-right"
                        type="button"
                        id="print"
                      >
                        <i className="fa fa-print"></i> Print
                      </button>
                      <button type="button" className="btn btn-primary m-3">
                        <a href="/Home">Back</a>
                      </button>
                    </div>
                  </div>
                  <div id="report">
                    <div className="on-print">
                      <p>
                        <center>Rental Balances Report</center>
                      </p>
                      <p>
                        <center>
                          As of <b>{/**<?php echo date('F ,Y') ?> */}</b>
                        </center>
                      </p>
                    </div>
                    <div className="row">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Tenant</th>
                            <th>House #</th>
                            <th>Monthly Rate</th>
                            <th>Payable Months</th>
                            <th>Payable Amount</th>
                            <th>Paid</th>
                            <th>Outstanding Balance</th>
                            <th>Last Payment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-right"></td>
                            <td className="text-right"></td>
                            <td className="text-right"></td>
                            <td className="text-right"></td>
                            <td className="text-right"></td>
                            <td></td>
                          </tr>

                          <tr>
                            <th colspan="9">
                              <center>No Data.</center>
                            </th>
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
      </div>
    );
  }
}
