import Carousel from "react-bootstrap/Carousel";
import "./Slider.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

const Slider = () => {
  return (
    <Carousel className="slider" controls={false} interval={3000}>
      <Carousel.Item>
        <div className="slider__group">
          <div className="slider__item">
            <img
              src="/images/card-1.webp"
              alt="Slide 1"
              className="slider__img"
            />
            <div className="slider__caption">
              <h3 className="slider__title">Services</h3>
            </div>
          </div>
          <div className="slider__item">
            <img
              src="/images/card-2.webp"
              alt="Slide 2"
              className="slider__img"
            />
            <div className="slider__caption">
              <h3 className="slider__title">Instructional Design</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider__group">
          <div className="slider__item">
            <img
              src="/images/card-3.webp"
              alt="Slide 3"
              className="slider__img"
            />
            <div className="slider__caption">
              <h3 className="slider__title">eLearning Development</h3>
            </div>
          </div>
          <div className="slider__item">
            <img
              src="/images/card-4.webp"
              alt="Slide 4"
              className="slider__img"
            />
            <div className="slider__caption">
              <h3 className="slider__title">eLearning Price Quote</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider__group">
          <div className="slider__item">
            <img
              src="/images/card-5.webp"
              alt="Slide 5"
              className="slider__img"
            />
            <div className="slider__caption">
              <h3 className="slider__title">eLearning Packages</h3>
            </div>
          </div>
          <div className="slider__item">
            <img
              src="/images/card-6.webp"
              alt="Slide 6"
              className="slider__img"
            />
            <div className="slider__caption">
              <SvgIcon id="icon-letter" className="slider__icon" />
              <h3 className="slider__title">Contacts</h3>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
