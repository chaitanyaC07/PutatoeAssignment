import React from "react";
import "./Home.scss";
import { MdPhoneAndroid } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SlScreenDesktop } from "react-icons/sl";
import { AiFillDollarCircle } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineCampaign } from "react-icons/md";
import { MdOutlinePropaneTank } from "react-icons/md";
import almondSrc from "./almond.jpg";
import bnaturalSrc from "./Bnatural.jpg";
import tropicanaSrc from "./tropicana.jpg";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="banner"></div>
        <div className="banner-icons">
          <div className="row1">
            <div>
              <MdPhoneAndroid />

              <span className="icon-text">Moblie Recharge</span>
            </div>

            <div>
              <HiOutlineLightBulb />
              <span className="icon-text">Electricity</span>
            </div>
            <div>
              <SlScreenDesktop />
              <span className="icon-text">DTH</span>
            </div>

            <div>
              <AiFillDollarCircle />
              <span className="icon-text">Loan</span>
            </div>
          </div>
          <div className="row1">
            <div>
              <ImNewspaper />
              <span className="icon-text">News</span>
            </div>
            <div>
              <TbMoneybag />
              <span className="icon-text">Refer and Earn</span>
            </div>
            <div>
              <MdOutlineCampaign />
              <span className="icon-text">Promotion</span>
            </div>
            <div>
              <MdOutlinePropaneTank />
              <span className="icon-text">Book a Cylinder</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="product">
          <h1>Popular Products</h1>
        </div>

        <div className="product-item">
          <div>
            <img src={almondSrc} alt="no" srcset="" />
            <span className="span1">Almond Milk</span>
            <span>Cacao(Lactose)</span>
          </div>
          <div>
            <img src={bnaturalSrc} alt="" srcset="" />
            <span className="span1">B Natural</span>
            <span>Mixed fruit</span>
          </div>
          <div>
            <img src={tropicanaSrc} alt="" />
            <span className="span1">Tropicana</span>
            <span>Mango</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
