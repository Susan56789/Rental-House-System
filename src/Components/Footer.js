import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-basic">
          <footer>
            <div className="social">
              <a href="##">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="##">
                <i className="fab fa-snapchat"></i>
              </a>
              <a href="##">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="##">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="##">Services</a>
              </li>
              <li className="list-inline-item">
                <a href="##">About</a>
              </li>
              <li className="list-inline-item">
                <a href="##">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="##">Privacy Policy</a>
              </li>
            </ul>
            <p className="copyright">House Management © 2022</p>
          </footer>
        </div>
      </div>
    );
  }
}
