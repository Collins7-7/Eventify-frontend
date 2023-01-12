import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="section">
      <footer className="footer mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold text-warning">Eventify</h6>
              <p className="text-muted">
                Eventify will help you find the next event in town. We notify
                you about all events happening around you.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold text-warning">Services</h6>
              <p>
                <a href="#!" className="text-muted">
                  Ticket Booking
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted">
                  Ticket Advertising
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted">
                  BrandFlow
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted">
                  Event Management
                </a>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold text-warning">
                Quick links
              </h6>
              <p>
                <a href="/" className="text-muted">
                  Home
                </a>
              </p>
              <p>
                <a href="/categories" className="text-muted">
                  Categories
                </a>
              </p>
              <p>
                <a href="/Contact" className="text-muted">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-muted">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold text-warning"> Contacts</h6>
              <p className="text-muted">
                <i className="fas fa-home mr-3 text-muted"></i> Westlands,
                Nairobi, Kenya
              </p>
              <p className="text-muted">
                <i className="fas fa-envelope mr-3 text-muted"></i>{" "}
                eventify@example.com
              </p>
              <p className="text-muted">
                <i className="fas fa-phone mr-3 text-muted"></i> + 254 234 567
                883
              </p>
              <p className="text-muted">
                <i className="fas fa-print mr-3 text-muted"></i> + 254 234 567
                897
              </p>
            </div>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  &copy;{new Date().getFullYear()} Eventify | All Rights
                  Reserved
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <a href="Eventify" className="text-muted me-4">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="@Eventify" className="text-muted me-4">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="eventify@google.com" className="text-muted me-4">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="@Eventify" className="text-muted me-4">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="Eventify" className="text-muted me-4">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="Eventify" className="text-muted me-4">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
