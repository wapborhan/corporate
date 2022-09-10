import React from "react";

const ResDesign = () => {
  return (
    <section id="res-design">
      <div className="container">
        <div className="row res-des-main">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="res-des-img">
              <img src="assets/images/res-des-img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="res-des-content">
              <h5>new design</h5>
              <h2>
                Responsive design, just <span>need tap ....</span>
              </h2>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Donec id elit non mi porta gravida at eget
                metus. Curabitur blandit tempus porttitor. Etiasem malesuada
                magn. Vestibulum felis euismod semper.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="res-design-shape"></div>
    </section>
  );
};

export default ResDesign;
