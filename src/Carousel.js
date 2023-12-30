import React from "react";
import "./Carousel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const carousel_option = {
  loop: true,
  items: 1,
  dots: true,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 5000,
};

const Carousel = () => {
  return (
    <div className="Carousel">
      <OwlCarousel className="owl-theme" {...carousel_option}>
        <div className="item">
          <div className="carousel-slide">
            <div className="carouselImg">
              <img src="./Assets/page-1-1.png" alt="" />
              <img src="./Assets/page-1-2.png" alt="" />
            </div>
            <div className="text">
              <img
                className="text-img"
                src="./Assets/communication Award.png"
                alt=""
              />
              <h3>ABC 123</h3>
              <p>This is the sample text for ABC 123</p>
              <p>View Case Study &rarr;</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="carousel-slide">
            <div className="carouselImg">
              <img src="./Assets/page-2-1.png" alt="" />
              <img src="./Assets/page-2-2.png" alt="" />
            </div>
            <div className="text">
              <h3>ABC 2</h3>
              <p>This is the sample text for ABC 2</p>
              <p>
                Case Study{" "}
                <button className=" btn btn-light rounded-pill fw-semibold">Coming Soon</button>
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="carousel-slide">
            <div className="carouselImg">
              <img src="./Assets/page-3-1.png" alt="" />
              <img src="./Assets/page-3-2.png" alt="" />
            </div>
            <div className="text">
              <h3>ABC 3</h3>
              <p>This is the sample text for ABC 3</p>
              <p>View Case Study &rarr;</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="carousel-slide">
            <div className="carouselImg">
              <img src="./Assets/page-4-1.png" alt="" />
              <img src="./Assets/page-4-2.png" alt="" />
              <img src="./Assets/page-4-3.png" alt="" />
              <img src="./Assets/page-4-4.png" alt="" />
              <img src="./Assets/page-4-5.png" alt="" />
              <img src="./Assets/page-4-6.png" alt="" />
            </div>
            <div className="text">
              <h3>ABC 4</h3>
              <p>This is the sample text for ABC 4</p>
              <p>View Case Study &rarr;</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="carousel-slide">
            <div className="carouselImg">
              <img src="./Assets/page-5-1.png" alt="" />
              <img src="./Assets/page-5-2.png" alt="" />
              <img src="./Assets/page-5-3.png" alt="" />
              <img src="./Assets/page-5-4.png" alt="" />
              <img src="./Assets/page-5-5.png" alt="" />
            </div>
            <div className="text">
              <h3>ABC 5</h3>
              <p>This is the sample text for ABC 5</p>
              <p>
                Case Study{" "}
                <button className=" btn btn-primary rounded-pill fw-semibold">Coming Soon</button>
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="carousel-slide">
            <div className="carouselImg">
              <img src="./Assets/page-6-1.png" alt="" />
            </div>
            <div className="text">
              <h3>ABC 6</h3>
              <p>This is the sample text for ABC 6</p>
              <p>View Case Study &rarr;</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="carousel-slide">
            <div className="carouselImg">
              <img src="./Assets/page-7-1.png" alt="" />
              <img src="./Assets/page-7-2.png" alt="" />
            </div>
            <div className="text">
            <img
                className="text-img"
                src="./Assets/entrepreneur-awards.png"
                alt=""
              />
              <h3>ABC 7</h3>
              <p>This is the sample text for ABC 7</p>
              <p>View Case Study &rarr;</p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};
export default Carousel;
