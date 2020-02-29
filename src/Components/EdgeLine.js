import React from "react";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
export default function EdgeLine() {
  return (
    <div className="edge-line">
      <b className="title">پرتخفیف‌ترین‌ها</b>
      <p className="empty2"></p>
      <div className="dash-line2">
        <p className="dash1"></p>
        <p className="dash2"></p>
        <p className="dash3"></p>
      </div>
      <p className="long-line"></p>
      <span className="line-txt">مشاهده همه پرتخفیف‌ها</span>
      <span className="lef-arrow1">
        <ArrowBackIosOutlinedIcon style={{ fontSize: "15px" }} />
      </span>
      <span className="lef-arrow2">
        <ArrowBackIosOutlinedIcon style={{ fontSize: "15px" }} />
      </span>
    </div>
  );
}
