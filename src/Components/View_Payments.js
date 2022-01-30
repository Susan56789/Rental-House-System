import React, { useEffect, useState } from "react";
import "./styles.css";

const ViewPayments = () => {
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
          console.log(data);
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
      <div className="d-flex flex-row align-items-center justify-content-between">
        <a href="/Home" className="btn btn-primary m-3">
          <i className="fas fa-arrow-left"></i>
        </a>
      </div>
      {tenant.map((tenants) => (
        <div>
          <div className="col-lg-12 bg-light">
            <div className="row">
              <div className="col-md-4 mb-2">
                <div id="details">
                  <b>Details</b>

                  <hr />
                  <p>
                    Tenant: <b>{tenants.firstname + " " + tenants.lastname}</b>
                  </p>
                  <p>
                    Monthly Rental Rate: <b>{tenants.monthly_rate}</b>
                  </p>
                  <p>
                    Outstanding Balance:{" "}
                    <b>
                      {tenants.payable_months * tenants.monthly_rate -
                        tenants.paid_months * tenants.monthly_rate}
                    </b>
                  </p>
                  <p>
                    Total Paid:{" "}
                    <b>{tenants.paid_months * tenants.monthly_rate}</b>
                  </p>
                  <p>
                    Rent Started: <b>{tenants.date_in}</b>
                  </p>
                  <p>
                    Payable Months: <b>{tenants.payable_months}</b>
                  </p>
                  <p>
                    Paid Months: <b>{tenants.paid_months}</b>
                  </p>
                  <p>
                    Unpaid Months:{" "}
                    <b>{tenants.payable_months - tenants.paid_months}</b>
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <b>Payment List</b>

                <hr />
                <table className="table table-condensed table-striped">
                  <thead>
                    <tr className="col">
                      <th>Date</th>
                      <th>Invoice</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="col" key={Math.floor(Math.random() * 1000)}>
                      <td>{tenants.last_payment}</td>
                      <td>{tenants.invoice}</td>
                      <td className="text-right">{tenants.monthly_rate}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewPayments;
