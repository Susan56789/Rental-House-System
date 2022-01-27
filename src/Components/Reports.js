import React, { Component } from "react";
import "./styles.css";

export default class Reports extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <a href="/Home" className="btn btn-primary m-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </div>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="card border-primary">
                        <div className="card-body bg-light">
                          <h4>
                            <b>Monthly Payments Report</b>
                          </h4>
                        </div>
                        <div className="card-footer">
                          <div className="col-md-12">
                            <a
                              href="/PaymentReports"
                              className="d-flex justify-content-between"
                            >
                              {" "}
                              <span>View Report</span>{" "}
                              <span className="fa fa-chevron-circle-right"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="card border-primary">
                        <div className="card-body bg-light">
                          <h4>
                            <b>Rental Balances Report</b>
                          </h4>
                        </div>
                        <div className="card-footer">
                          <div className="col-md-12">
                            <a
                              href="/BalanceReports"
                              className="d-flex justify-content-between"
                            >
                              {" "}
                              <span>View Report</span>{" "}
                              <span className="fa fa-chevron-circle-right"></span>
                            </a>
                          </div>
                        </div>
                      </div>
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
