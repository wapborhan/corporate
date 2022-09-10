import React from "react";

const Banner = () => {
  return (
    <section
      id="banner"
      style={{
        backgroundImage: `url("https://via.placeholder.com/500")`,
      }}
    >
      <div class="container">
        <div class="banner-head text-center">
          <h2>
            There is no other <span>platforms for you as like</span>
          </h2>
          <div class="button">
            <a
              class="play-btn"
              data-toggle="modal"
              data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
              data-target=".bd-example-modal-lg"
            >
              <i class="fas fa-play-circle"></i>
            </a>
            <a class="banner-btn" href="#">
              try now
            </a>
          </div>

          {/* <!-- Modal --> */}
          <div
            class="modal fade bd-example-modal-lg"
            id="largeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Corporate
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
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

          <p>* No need to add cards details</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
