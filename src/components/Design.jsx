import React from "react";

const Design = () => {
  return (
    <section id="design">
      <div className="design-main">
        <div className="row no-row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="design-content">
              <h5>new design</h5>
              <h2>
                There is no other platforms <span>for you as like ....</span>
              </h2>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Donec id elit non mi porta gravida at eget
                metus. Curabitur blandit tempus porttitor. Etiam porta sem
                malesuada magna mollis euismod. Vestibulum id ligula porta felis
                euismod semper.
                <span>
                  Donec sed odio dui. Aenean lacinia bibendum nulla sed
                  consectetur. Donec ullamcorper nulla non metus auctor
                  fringilla. Aenean lacinia bibendum nulla sed consectetur.
                  Nulla vitae elit libero, a pharetra augue.
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 design-imge">
            <div className="design-img">
              <img src="assets/images/design-img.jpg" alt="" />
            </div>
            <div className="design-shape"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
