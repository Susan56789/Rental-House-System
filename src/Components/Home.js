import React, { Component } from "react";
import "./styles.css";
import Navbar from "./Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="containe-fluid">
          <div className="row mt-3 ml-3 mr-3">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  {/**<?php echo "Welcome back ". $_SESSION['login_name']."!"  ?> */}
                  <hr />
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card border-primary">
                        <div className="card-body bg-primary">
                          <div className="card-body text-white">
                            <span className="float-right summary_icon">
                              {" "}
                              <i className="fa fa-home "></i>
                            </span>
                            <h4>
                              <b>
                                {/**<?php echo $conn->query("SELECT * FROM houses")->num_rows ?> */}
                              </b>
                            </h4>
                            <p>
                              <b>Total Houses</b>
                            </p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col-lg-12">
                              <a
                                href="/Houses"
                                className="text-primary float-right"
                              >
                                View Houses{" "}
                                <span className="fa fa-angle-right"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-3">
                      <div className="card border-danger">
                        <div className="card-body bg-danger">
                          <div className="card-body text-white">
                            <span className="float-right summary_icon">
                              {" "}
                              <i className="fa fa-file-invoice"></i>
                            </span>
                            <h4>
                              <b>
                                {/**<?php echo $conn->query("SELECT * FROM houses")->num_rows ?> */}
                              </b>
                            </h4>
                            <p>
                              <b>Payment Reports</b>
                            </p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col-lg-12">
                              <a
                                href="/Reports"
                                className="text-primary float-right"
                              >
                                View Reports{" "}
                                <span className="fa fa-angle-right"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-3">
                      <div className="card border-warning">
                        <div className="card-body bg-warning">
                          <div className="card-body text-white">
                            <span className="float-right summary_icon">
                              {" "}
                              <i className="fa fa-user-friends"></i>
                            </span>
                            <h4>
                              <b>
                                {/**<?php echo $conn->query("SELECT * FROM houses")->num_rows ?> */}
                              </b>
                            </h4>
                            <p>
                              <b>View All Payments</b>
                            </p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col-lg-12">
                              <a
                                href="/AllPayments"
                                className="text-primary float-right"
                              >
                                View Payments{" "}
                                <span className="fa fa-angle-right"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-3">
                      <div className="card border-success">
                        <div className="card-body bg-success">
                          <div className="card-body text-white">
                            <span className="float-right summary_icon">
                              {" "}
                              <i className="fa fa-user-friends"></i>
                            </span>
                            <h4>
                              <b>
                                {/**<?php echo $conn->query("SELECT * FROM houses")->num_rows ?> */}
                              </b>
                            </h4>
                            <p>
                              <b>Total Users</b>
                            </p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col-lg-12">
                              <a
                                href="/Users"
                                className="text-primary float-right"
                              >
                                View Users{" "}
                                <span className="fa fa-angle-right"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-3">
                      <div className="card border-warning">
                        <div className="card-body bg-warning">
                          <div className="card-body text-white">
                            <span className="float-right summary_icon">
                              {" "}
                              <i className="fa fa-user-friends "></i>
                            </span>
                            <h4>
                              <b>
                                {/** <?php echo $conn->query("SELECT * FROM tenants where status = 1 ")->num_rows ?> */}
                              </b>
                            </h4>
                            <p>
                              <b>Total Tenants</b>
                            </p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col-lg-12">
                              <a
                                href="/Tenants"
                                className="text-primary float-right"
                              >
                                View Tenants{" "}
                                <span className="fa fa-angle-right"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card border-success">
                        <div className="card-body bg-success">
                          <div className="card-body text-white">
                            <span className="float-right summary_icon">
                              {" "}
                              <i className="fa fa-file-invoice "></i>
                            </span>
                            <h4>
                              <b>
                                {/**  
                                            <?php 
                                             $payment = $conn->query("SELECT sum(amount) as paid FROM payments where date(date_created) = '".date('Y-m-d')."' "); 
                                             echo $payment->num_rows > 0 ? number_format($payment->fetch_array()['paid'],2) : 0;
                                             ?>
                                             */}
                              </b>
                            </h4>
                            <p>
                              <b>Payments This Month</b>
                            </p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col-lg-12">
                              <a
                                href="/Invoices"
                                className="text-primary float-right"
                              >
                                View Payments{" "}
                                <span className="fa fa-angle-right"></span>
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
      </div>
    );
  }
}
