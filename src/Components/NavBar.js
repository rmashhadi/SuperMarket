import React from "react";
import CallIcon from "@material-ui/icons/Call";
export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-right">
        <CallIcon
          style={{
            width: "19px",
            position: " relative",
            left: "6px"
          }}
        />

        <span>پشتیبانی و فروش</span>
        <span style={{ fontSize: "12px", marginLeft: "17px" }}>
          021 384758924
        </span>
        <span style={{ fontSize: "12px" }}>(پاسخگویی 24 ساعته)</span>
      </div>
      <span className="nav-left">سبد مقایسه (3)</span>
    </div>
  );
}
