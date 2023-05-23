import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icon">
        <span>
          <Link to="/" className="link">
            <AiOutlineHome />
          </Link>
        </span>
        <span>
          <Link to="/account" className="link">
            <MdAccountCircle />
          </Link>
        </span>
        <span className="help">
          <Link to="/help" className="link">
            <IoIosHelpCircle />
          </Link>
        </span>
        <span>
          <Link to="/message" className="link">
            <BiMessageDetail />
          </Link>
        </span>
        <span>
          <Link to="/delivery" className="link">
            <TbTruckDelivery />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
