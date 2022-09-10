import React from "react";

const SignUp = () => {
  return (
    <section id="singup">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12 signup-head">
            <h5>new feature</h5>
            <h2>Over 1000 designers are using ...</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 singup-int">
            <input
              type="text"
              className="form-control"
              placeholder="FULL NAME"
              aria-label="Username"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 singup-int">
            <input
              type="mail"
              className="form-control"
              placeholder="YOUR MAIL"
              aria-label="Full Name"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 singup-int">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 singup-int">
            <a className="contact-btn" href="#">
              TRY NOW
            </a>
          </div>
        </div>
        <div className="terms">
          <p>
            By Signing up you agree to our <a href="#">terms & Services.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
