import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 foot-iteam">
            <img src="assets/images/foot-logo.png" alt="" />
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
              USA & CAN: 1-888-123-4567 Address: 34 Brokel Rd. NY
            </p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 foot-iteam">
            <h2>Support</h2>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Get Start</a>
              </li>
              <li>
                <a href="#">Contact US</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 foot-iteam">
            <h2>about us</h2>
            <ul>
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">Terms of USe</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 foot-iteam">
            <h2>get Newslater</h2>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="EMAIL"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  <i className="far fa-paper-plane"></i>
                </button>
              </div>
            </div>
            <div className="foot-social">
              <a href="#" className="fab fa-facebook"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-google"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-shape"></div>
      <h5 className="text-center p-5">
        Copyright © <script>document.write(new Date().getFullYear())</script>{" "}
        Corporate | Powered by <a href="http://codestrickz.xyz">CodesTrickz</a>{" "}
        | Designed BY{" "}
        <a className="linksl kukuri" href="http://wapborhan.com/">
          <i className="fas fa-heart"></i>
          Borhan Uddin
          <i className="fas fa-heart"></i>
        </a>
      </h5>
    </section>
  );
};

export default Footer;
