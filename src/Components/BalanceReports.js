import React, { useState, useEffect } from "react";
import "./styles.css";

export default function BalanceReports() {
  const [report, setReport] = useState([]);

  const getReport = async () => {
    const url = "https://rental-house-server.vercel.app/payments";

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
      setReport(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getReport();
  }, []);

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
                        As of <b>{new Date().toLocaleString() + ""}</b>
                      </center>
                    </p>
                  </div>
                  <div className="row">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Tenant ID</th>
                          <th>Monthly Rate</th>
                          <th>Payable Months</th>
                          <th>Payable Amount</th>
                          <th>Paid</th>
                          <th>Outstanding Balance</th>
                          <th>Last Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {report.map((reports) => (
                          <tr>
                            <td>{reports.id}</td>
                            <td>{reports.tenant_id}</td>
                            <td>{reports.amount}</td>
                            <td>{reports.payable_months}</td>
                            <td>{reports.amount * reports.payable_months}</td>

                            <td>{reports.amount * reports.payable_months}</td>

                            <td>{reports.outstanding_balance}</td>
                            <td>{reports.date_created}</td>
                          </tr>
                        ))}
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
