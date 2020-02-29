import React from "react";
import phone from "../pictures/phone.png";
import garaunty from "../pictures/garaunty.png";
import payment from "../pictures/payment.png";
import fidelite from "../pictures/fidelite.png";
import shippment from "../pictures/shippment.png";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import SpecialOffers from "./SpecialOffers";
export default function VisualProducts() {
  return (
    <div style={{ backgroundColor: "transparent" }} className="product-list">
      <SpecialOffers
        FirstPrice="1,250,000"
        product="ویلچر تمام ارتوپدی مدل SC-270"
        SecondPrice="999,000"
        Class="specials-container-right"
        Image="special-img"
      />
      <div specials-container-left>
        <div className="main-pic"></div>
        <div className="guidline">
          <div className="step">
            <img
              style={{ width: "76.57", height: "48.43px" }}
              src={shippment}
            />
            <span>ارسال سریع</span>
          </div>
          <div className="step">
            <img
              style={{ width: "55.36px", height: "55.36px" }}
              src={fidelite}
            />
            <span>تخفیف تا 50 درصد</span>
          </div>
          <div className="step">
            <img
              style={{ width: "66.04px", height: "48.39px" }}
              src={payment}
            />
            <span>پرداخت در محل</span>
          </div>
          <div className="step">
            <img style={{ width: "57.55px", height: "55.58px" }} src={phone} />
            <span>پاسخگویی 24 ساعته</span>
          </div>
          <div className="step">
            <img
              style={{ width: "56.14px", height: "55.58px" }}
              src={garaunty}
            />
            <span>تضمین اصالت کالا</span>
          </div>
        </div>
      </div>
    </div>
  );
}
