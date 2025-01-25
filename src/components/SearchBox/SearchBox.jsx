import { useState } from "react";
import "./SearchBox.scss";
import SvgIcon from "../SvgIcon/SvgIcon";

const SearchBox = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchInput(newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search"
        value={searchInput}
        onChange={handleInputChange}
      />
      <SvgIcon id="icon-search" className="search__icon" />
    </div>
  );
};

export default SearchBox;
