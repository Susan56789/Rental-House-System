import React, { useState, useEffect } from "react";
import "./styles.css";

const Tenants = () => {
  const [tenant, setTenant] = useState([]);

  const getTenants = async () => {
    const url = "https://rental-house-server.vercel.app/tenants";

    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          return data;
        });
      setTenant(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTenants();
  }, []);

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
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a href="/Home" className="btn btn-primary m-3">
                    <i className="fas fa-arrow-left"></i>
                  </a>
                </div>
                <div className="card-body">
                  <table className="table table-bordered ">
                    <thead>
                      <tr className="col">
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>House ID</th>
                        <th>Monthly Rate</th>
                        <th>Outstanding Balance</th>
                        <th>Last Payment</th>
                        <th>Date In</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {tenant.map((tenants) => (
                        <tr
                          className="col"
                          key={Math.floor(Math.random() * 1000)}
                        >
                          <td>{tenants.id}</td>
                          <td>{tenants.firstname}</td>
                          <td>{tenants.lastname}</td>
                          <td>{tenants.email}</td>
                          <td>{tenants.contact}</td>
                          <td>{tenants.house_id}</td>
                          <td>{tenants.monthly_rate}</td>
                          <td>{tenants.outstanding_balance}l</td>
                          <td>{tenants.last_payment}</td>
                          <td>{tenants.date_in}</td>
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
                      ))}
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
};

export default Tenants;
