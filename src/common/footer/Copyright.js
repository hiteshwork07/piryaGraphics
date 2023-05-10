import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="copyright-area copyright-style-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="copyright-left">
              <ul className="ft-menu link-hover">
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms And Condition</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="copyright-right text-center text-md-end">
              <p className="copyright-text">
                © PRIY Graphics | Printing | Advertising Services in Surat{" "}
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
