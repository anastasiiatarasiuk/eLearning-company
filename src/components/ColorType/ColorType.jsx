import { useState } from "react";
import { colors } from "../../data/ServicesData";
import "./ColorType.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

const ColorType = ({ selectedColor, setSelectedColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-type">
      <span className="color-type__label">Type</span>
      {isOpen ? (
        <div className="color-type__container">
          <div className="color-type__container__buttons">
            {colors.map((color) => (
              <button
                key={color}
                className={`color-type__container__button ${
                  color === selectedColor
                    ? "color-type__container__button--active"
                    : ""
                }`}
                onClick={() => handleColorSelect(color)}
                style={{
                  backgroundColor:
                    color === "all" ? "lightgray" : `var(--${color})`,
                }}
              ></button>
            ))}
          </div>
          <button onClick={() => setIsOpen(false)}>
            <SvgIcon id="icon-close" className="color-type__container__close" />
          </button>
        </div>
      ) : (
        <button
          className="color-type__toggle"
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor:
              selectedColor === "all" ? "lightgray" : `var(--${selectedColor})`,
          }}
        >
          <SvgIcon id="icon-arrow-right" className="color-type__toggle-icon" />
        </button>
      )}
    </div>
  );
};

export default ColorType;
