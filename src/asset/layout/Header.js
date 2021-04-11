import React from "react";

// style import
import "../style/color.scss";
import "../style/layout/header.scss";

// img import
import logo from "../img/main_logo.png";

// logo import
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

function Header() {
  const toggler = () => {
    document.querySelector("#toggler").classList.toggle("toggled");
  };
  return (
    <>
      <header className="header">
        <nav className="headernav">
          <div className="nav_left">
            <div className="brand__logo" tabIndex="0">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="delivary__details resp_drown">
              <RoomOutlinedIcon className="icon_w" />
              <div className="doubleLinked t_c_w">
                <div className="line1 t_c_c">Deliver to</div>
                <div className="line2" tabIndex="0">
                  Bangladesh
                </div>
              </div>
            </div>
          </div>
          <div className="search">
            <div className="catagory_filter" tabIndex="0">
              All
              <ArrowDropDownIcon />
            </div>
            <input type="text" />
            <div className="search_icon_container">
              <SearchOutlinedIcon tabIndex="0" className="icon_d search_icon" />
            </div>
          </div>
          <div className="right_nav t_c_w">
            <div className="hel_acco">
              <div className="line1">
                Hello,&nbsp; <span>Jim</span>
              </div>
              <div className="line2 resp_drown">Account & Lists</div>
              <div className="line2 resp_fly">SIgn in</div>
            </div>
            <div className="ord_retu resp_drown">
              <div className="line1">Returns</div>
              <div className="line2">& Orders</div>
            </div>
            <div className="basket_ico" tabIndex="0">
              <Link className="t_c_w" to="/cart/">
                <ShoppingBasketIcon className="icon_w" />
                &nbsp;
                <span>0</span>
              </Link>
            </div>
          </div>
          <div className="delivary__details resp_fly">
            <RoomOutlinedIcon className="icon_w" />
            <div className="doubleLinked t_c_w">
              <div className="line1 t_c_c">Deliver to</div>
              <div className="line2" tabIndex="0">
                Bangladesh
              </div>
            </div>
          </div>
        </nav>
      </header>
      <nav className="secondery_nav t_c_w">
        <div className="left_nav">
          <div className="item">
            <div className="toggeler">
              <div
                id="toggler"
                className="toggelerInner"
                onClick={toggler}
              ></div>
            </div>
          </div>
          <div className="item">All</div>
          <div className="item">Today's Deals</div>
          <div className="item">Customer Service</div>
          <div className="item">Gift Cards</div>
          <div className="item">Sell</div>
          <div className="item">Registry</div>
        </div>
        <div className="right_nav">
          <div className="item">Amazon's response to COVID-19</div>
        </div>
      </nav>
    </>
  );
}

export default Header;
