import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Invoices() {
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
                        <th className="">Date created</th>
                        <th className="">Tenant ID</th>
                        <th className="">Invoice NO.</th>
                        <th className="">Amount Paid</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.map((reports) => (
                        <tr>
                          <td className="text-center">{reports.id}</td>
                          <td>{reports.date_created}</td>
                          <td className="">
                            <p>
                              {" "}
                              <b>{reports.tenant_id}</b>
                            </p>
                          </td>
                          <td className="">
                            <p>
                              {" "}
                              <b>{reports.invoice}</b>
                            </p>
                          </td>
                          <td className="text-right">
                            <p>
                              {" "}
                              <b>{reports.amount}</b>
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
  );
}
