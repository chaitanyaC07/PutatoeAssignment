import React from "react";
import "./Header.scss";
import { ImSearch } from "react-icons/im";
import { TiMicrophoneOutline } from "react-icons/ti";

const Header = () => {
  return (
    <nav className="header">
      <div className="search">
        <button className="search-icon">
          <ImSearch />
        </button>
        <input
          className="search-type"
          type="text"
          placeholder="Search for Products.."
        />
      </div>
      <TiMicrophoneOutline />
    </nav>
  );
};

export default Header;
