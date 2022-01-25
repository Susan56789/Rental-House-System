import React, { Component } from "react";

export default class PaymentReport extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="col-md-12">
                  <form id="filter-report">
                    <div class="row form-group">
                      <label class="control-label col-md-2 offset-md-2 text-right">
                        Month of:{" "}
                      </label>
                      <input
                        type="month"
                        name="month_of"
                        class="from-control col-md-4"
                      />
                      <button class="btn btn-sm btn-block btn-primary col-md-2 ml-1">
                        Filter
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div class="row">
                    <div class="col-md-12 mb-2">
                      <button
                        class="btn btn-sm btn-block btn-success col-md-2 ml-1 float-right"
                        type="button"
                        id="print"
                      >
                        <i class="fa fa-print"></i> Print
                      </button>
                      <button type="button" className="btn btn-primary m-3">
                        <a href="/Home">Back</a>
                      </button>
                    </div>
                  </div>
                  <div id="report">
                    <div class="on-print">
                      <p>
                        <center>Rental Payments Report</center>
                      </p>
                      <p>
                        <center>
                          for the Month of{" "}
                          <b>
                            {/**<?php echo date('F ,Y',strtotime($month_of.'-1')) ?> */}
                          </b>
                        </center>
                      </p>
                    </div>
                    <div class="row">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Tenant</th>
                            <th>House #</th>
                            <th>Invoice</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-right"></td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th colspan="5">Total Amount</th>
                            <th class="text-right">
                              {/**<?php echo number_format($tamount,2) ?> */}
                            </th>
                          </tr>
                        </tfoot>
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
