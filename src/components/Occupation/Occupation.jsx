import { useState } from "react";
import { occupations } from "../../data/ServicesData";
import "./Occupation.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

const Occupation = ({ occupation, setSelectedOccupation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const uniqueOccupations = [
    "all",
    ...occupations.filter((item) => item.toLowerCase() !== "all"),
  ];

  const handleOccupationSelect = (selected) => {
    setSelectedOccupation(selected);
    setIsOpen(false);
  };

  return (
    <div className="occupation-picker">
      <span className="occupation-picker__text">Occupation</span>
      <div
        className="occupation-picker__header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="occupation-picker__selected">
          {occupation === "all" ? "All" : occupation}
        </div>
        <SvgIcon className="occupation-picker__arrow" id="icon-arrow-right" />
      </div>
      {isOpen && (
        <div className="occupation-picker__dropdown">
          {uniqueOccupations.map((item, index) => (
            <button
              key={index}
              className={`occupation-picker__option ${
                item === occupation ? "selected" : ""
              }`}
              onClick={() => handleOccupationSelect(item)}
            >
              {item === "all" ? "All" : item}
            </button>
          ))}
          <button onClick={() => setIsOpen(false)}>
            <SvgIcon
              id="icon-close"
              className="occupation-picker__dropdown-close"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Occupation;
