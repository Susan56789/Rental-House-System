/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import "./styles.css";

const House = () => {
  const [house, setHouse] = useState([]);
  const [category, SetCategory] = useState([]);

  const getHouses = async () => {
    const url = "https://rental-house-server.vercel.app/houses";

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
      setHouse(response);
    } catch (e) {
      console.log(e);
    }
  };

  const getCateories = async () => {
    const url = "https://rental-house-server.vercel.app/categories";

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
      SetCategory(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getHouses();
    getCateories();
  }, []);

  {
    return (
      <>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <a href="/Home" className="btn btn-primary m-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </div>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-4">
                <form
                  id="manage-house"
                  action="https://rental-house-server.vercel.app/houses"
                  method="POST"
                >
                  <div className="card">
                    <div className="card-header">House Form</div>
                    <div className="card-body">
                      <div className="form-group" id="msg"></div>
                      <input type="hidden" name="id" />
                      <div className="form-group">
                        <label className="control-label">House No</label>
                        <input
                          type="text"
                          className="form-control"
                          name="house_no"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">House Type:</label>
                        <select
                          name="category_id"
                          id=""
                          className="custom-select"
                          required
                        >
                          {category.map((categories) => (
                            <option key={Math.floor(Math.random() * 1000)}>
                              {categories.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="control-label">Description: </label>
                        <textarea
                          name="description"
                          id=""
                          cols="30"
                          rows="4"
                          className="form-control"
                          required
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label className="control-label">Price</label>
                        <input
                          type="number"
                          className="form-control text-right"
                          name="price"
                          step="any"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-md-12">
                          <button className="btn btn-sm btn-primary col-sm-3 offset-md-3 m-3">
                            Save{" "}
                          </button>
                          <button className="btn btn-sm btn-primary col-sm-3">
                            <a href="/Home">Cancel</a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <b>House List</b>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr className="col">
                          <th className="text-center">House</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {house.map((houses) => (
                          <tr className="col">
                            <td className="" key={Math.random() * 10000}>
                              <p>
                                House #: <b>{houses.id}</b>
                              </p>
                              <p>
                                <small>
                                  House Type: <b>{houses.house_type}</b>
                                </small>
                              </p>
                              <p>
                                <small>
                                  Description: <b>{houses.description}</b>
                                </small>
                              </p>
                              <p>
                                <small>
                                  Price: <b>{houses.price}</b>
                                </small>
                              </p>
                            </td>
                            <td className="text-center">
                              <button
                                className="btn btn-sm btn-primary edit_house m-3"
                                type="button"
                                data-id=""
                                data-house_no=""
                                data-description=""
                                data-category_id=""
                                data-price=""
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-danger delete_house m-3"
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
  }
};
export default House;
