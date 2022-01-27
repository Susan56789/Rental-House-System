import React, { Component } from "react";
import "./styles.css";

export default class Settings extends Component {
  render() {
    return (
      <>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <a href="/Home" className="btn btn-primary m-3">
            <i className="fas fa-arrow-left"></i>
          </a>
        </div>
        <div className="container-fluid">
          <div className="card col-lg-12">
            <div className="card-body">
              <form action="" id="manage-settings">
                <div className="form-group">
                  <label for="name" className="control-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value="Enter name"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="email" className="control-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value="Enter email address"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="contact" className="control-label">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name="contact"
                    value="Enter contact"
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="about" className="control-label">
                    About Content
                  </label>
                  <textarea name="about" className="text-jqte">
                    {/**<?php echo isset($meta['about_content']) ? $meta['about_content'] : '' ?> */}
                  </textarea>
                </div>
                <br />
                <div className="form-group">
                  <label for="" className="control-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="img"
                    onchange="displayImg(this,$(this))"
                  />
                </div>
                <br />
                <div className="form-group">
                  <img
                    src="<?php echo isset($meta['cover_img']) ? 'assets/uploads/'.$meta['cover_img'] :'' ?>"
                    alt=""
                    id="cimg"
                  />
                </div>
                <center>
                  <button className="btn btn-info btn-primary btn-block col-md-2">
                    Save
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
        ;
      </>
    );
  }
}
