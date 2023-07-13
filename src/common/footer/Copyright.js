import React from "react";
import { Link } from "react-router-dom";

const Copyright = ({copyRight}) => {
  return (
    <div className="copyright-area copyright-style-one" style={{background: copyRight && 'linear-gradient(344deg, #1CC2BE 1.66%, #0E8C57 100%)'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="copyright-left">
              <ul className="ft-menu link-hover">
                <li>
                  <Link to="/privacy-policy" style={{color: copyRight && "white"}}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" style={{color: copyRight && "white"}}>Terms And Condition</Link>
                </li>
                <li>
                  <Link to="/contact" style={{color: copyRight && "white"}}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="copyright-right text-center text-md-end">
              <p className="copyright-text" style={{color: copyRight && "white"}}>
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
