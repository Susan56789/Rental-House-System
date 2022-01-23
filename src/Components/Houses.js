import React, { Component } from "react";
import "./styles.css";

export default class Houses extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-4">
                <form action="" id="manage-house">
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
                        <label className="control-label">Category</label>
                        <select
                          name="category_id"
                          id=""
                          className="custom-select"
                          required
                        >
                          {/**Select from database */}
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="" className="control-label">
                          Description
                        </label>
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
                          <button className="btn btn-sm btn-primary col-sm-3 offset-md-3">
                            {" "}
                            Save
                          </button>
                          <button
                            className="btn btn-sm btn-default col-sm-3"
                            type="reset"
                          >
                            {" "}
                            Cancel
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
                        <tr>
                          <th className="text-center">#</th>
                          <th className="text-center">House</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center"></td>
                          <td className="">
                            <p>
                              House #: <b></b>
                            </p>
                            <p>
                              <small>
                                House Type: <b></b>
                              </small>
                            </p>
                            <p>
                              <small>
                                Description: <b></b>
                              </small>
                            </p>
                            <p>
                              <small>
                                Price: <b></b>
                              </small>
                            </p>
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-sm btn-primary edit_house"
                              type="button"
                              data-id="<?php echo $row['id'] ?>"
                              data-house_no="<?php echo $row['house_no'] ?>"
                              data-description="<?php echo $row['description'] ?>"
                              data-category_id="<?php echo $row['category_id'] ?>"
                              data-price="<?php echo $row['price'] ?>"
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger delete_house"
                              type="button"
                              data-id="<?php echo $row['id'] ?>"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
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
}
