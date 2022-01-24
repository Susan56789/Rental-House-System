import React, { Component } from "react";
import "./styles.css";

export default class ViewPayments extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-4">
                <div id="details">
                  <large>
                    <b>Details</b>
                  </large>
                  <hr />
                  <p>
                    Tenant: <b></b>
                  </p>
                  <p>
                    Monthly Rental Rate: <b></b>
                  </p>
                  <p>
                    Outstanding Balance: <b></b>
                  </p>
                  <p>
                    Total Paid: <b></b>
                  </p>
                  <p>
                    Rent Started: <b></b>
                  </p>
                  <p>
                    Payable Months: <b></b>
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <large>
                  <b>Payment List</b>
                </large>
                <hr />
                <table className="table table-condensed table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Invoice</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="text-right"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
