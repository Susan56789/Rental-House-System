import React, { Component } from "react";
import "./styles.css";

export default class Reports extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="card border-primary">
                        <div class="card-body bg-light">
                          <h4>
                            <b>Monthly Payments Report</b>
                          </h4>
                        </div>
                        <div class="card-footer">
                          <div class="col-md-12">
                            <a
                              href="/PaymentReports"
                              class="d-flex justify-content-between"
                            >
                              {" "}
                              <span>View Report</span>{" "}
                              <span class="fa fa-chevron-circle-right"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="card border-primary">
                        <div class="card-body bg-light">
                          <h4>
                            <b>Rental Balances Report</b>
                          </h4>
                        </div>
                        <div class="card-footer">
                          <div class="col-md-12">
                            <a
                              href="/BalanceReports"
                              class="d-flex justify-content-between"
                            >
                              {" "}
                              <span>View Report</span>{" "}
                              <span class="fa fa-chevron-circle-right"></span>
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
