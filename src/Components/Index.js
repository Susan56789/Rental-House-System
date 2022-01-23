import React, { Component } from "react";
import "./styles.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <div
          className="toast"
          id="alert_toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body text-white"></div>
        </div>

        <main id="view-panel">
          {/**<?php $page = isset($_GET['page']) ? $_GET['page'] :'home'; ?>
  	<?php include $page.'.php' ?> */}
        </main>

        <div id="preloader"></div>
        <a href="#home" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>

        <div className="modal fade" id="confirm_modal" role="dialog">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
              </div>
              <div className="modal-body">
                <div id="delete_content"></div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  id="confirm"
                  onclick=""
                >
                  Continue
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="uni_modal" role="dialog">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"> </h5>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  id="submit"
                  onclick="$('#uni_modal form').submit()"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="viewer_modal" role="dialog">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <button type="button" className="btn-close" data-dismiss="modal">
                <span className="fa fa-times"></span>
              </button>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
