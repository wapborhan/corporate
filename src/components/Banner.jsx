import React from "react";
import headBG from "../assets/images/head-bg.jpg";

const Banner = () => {
  return (
    <section
      id="banner"
      style={{
        backgroundImage: `url("${headBG}")`,
      }}
    >
      <div className="container">
        <div className="banner-head text-center">
          <h2>
            There is no other <span>platforms for you as like</span>
          </h2>
          <div className="button">
            <a
              className="play-btn"
              data-toggle="modal"
              data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
              data-target=".bd-example-modal-lg"
            >
              <i className="fas fa-play-circle"></i>
            </a>
            <a className="banner-btn" href="#">
              try now
            </a>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade bd-example-modal-lg"
            id="largeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Corporate
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <iframe
                    width="700"
                    height="506"
                    src="https://www.youtube.com/embed/F5C-meW89FQ"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <p>* No need to add cards details</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
