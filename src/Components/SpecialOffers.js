import React from "react";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import Shape from "./Shape";
import DashLine from "./DashLine";
export default function SpecialOffers(props) {
  return (
    <div className={props.Class}>
      {props.Class === "specials-container-right" && (
        <>
          <p className="empty"></p>
          <b className="title">پیشنهادهای ویژه</b>
          <div className="dash-line">
            <DashLine />
          </div>
          <span className="small-txt">بالای 30 درصد تخفیف</span>
        </>
      )}
      <div className={props.Image}></div>
      {props.Class === "offers" && <p className="simple-line"></p>}
      <b style={{ fontSize: "16px" }}>{props.product}</b>
      <div className="price-list">
        <s className="old-price">{props.FirstPrice}</s>
        <span style={{ fontSize: "19px", color: "#707070" }}>تومان</span>
        <span className="price">{props.SecondPrice} </span>
        <span style={{ fontSize: "19px", color: "#fb4b63" }}>تومان</span>
      </div>{" "}
      <div className="order-btn">
        <ArrowForwardIosOutlinedIcon
          style={{ marginLeft: "3px", width: "11px", color: "white" }}
        />
        {props.Class === "offers" && <b>مشاهده محصول</b>}
        {props.Class !== "offers" && <b>همین حالا سفارش دهید</b>}
      </div>
      {props.Class === "specials-container-right" && (
        <div className="dot-line">
          <p className="dot"></p>
          <p className="dot"></p>
          <p className="double-dot"></p>
          <p className="dot"></p>
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {props.Class === "offers" && (
          <div className="container">
            <Shape discount={props.discount} />
          </div>
        )}
      </div>
    </div>
  );
}
