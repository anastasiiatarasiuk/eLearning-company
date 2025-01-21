import Carousel from "react-bootstrap/Carousel";
import "./Slider.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

const Slider = () => {
  return (
    <Carousel className="custom-carousel" controls={false}>
      <Carousel.Item>
        <div className="slide-group">
          <div className="slide-item">
            <img
              src="/images/card-1.webp"
              alt="Slide 1"
              className="slider-img"
            />
            <div className="caption">
              <h3 className="card-title">Services</h3>
            </div>
          </div>
          <div className="slide-item">
            <img
              src="/images/card-2.webp"
              alt="Slide 2"
              className="slider-img"
            />
            <div className="caption">
              <h3 className="card-title">Instructional Design</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-group">
          <div className="slide-item">
            <img
              src="/images/card-3.webp"
              alt="Slide 3"
              className="slider-img"
            />
            <div className="caption">
              <h3 className="card-title">eLearning Development</h3>
            </div>
          </div>
          <div className="slide-item">
            <img
              src="/images/card-4.webp"
              alt="Slide 4"
              className="slider-img"
            />
            <div className="caption">
              <h3 className="card-title">eLearning Price Quote</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide-group">
          <div className="slide-item">
            <img
              src="/images/card-5.webp"
              alt="Slide 5"
              className="slider-img"
            />
            <div className="caption">
              <h3 className="card-title">eLearning Packages</h3>
            </div>
          </div>
          <div className="slide-item">
            <img
              src="/images/card-6.webp"
              alt="Slide 6"
              className="slider-img"
            />
            <div className="caption">
              <SvgIcon id="icon-letter" className="icon" />
              <h3 className="card-title">Contacts</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
