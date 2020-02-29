import EmptySqr from "./EmptySqr";
import wheelchair from "../pictures/wheelchair.jpg";
import Telegram from "../pictures/icon/tel.png";
import Instagram from "../pictures/icon/inst.png";
import Facebook from "../pictures/icon/face.png";
import Twitter from "../pictures/icon/twt.png";
import certificate from "../pictures/certificate.jpg";
import React from "react";
export default function OrangeFooter(props) {
  return (
    <>
      <div className="orange2">
        <div className="footer-container">
          <div className="column">
            <EmptySqr title={props.title1} />
            <div className="border">
              <span>{props.txt}</span>
              <span>{props.txt}</span>
              <span>{props.txt}</span>
              <span>{props.txt}</span>
              <span>{props.txt}</span>
              <span>{props.txt}</span>
              <span>{props.txt2}</span>
            </div>
          </div>
          <div className="column">
            <EmptySqr title={props.title2} />
            <div className="border">
              <span>ویلچرهای استیل</span>
              <span>ویلچرهای آلومینیومی</span>
              <span>ویلچرهای برقی</span>
              <span>عصا، بالابر و کمد چیر</span>
              <span>تجهیزات توانبخشی سالمندان</span>
              <span>تجهیزات نابینایان</span>
            </div>
          </div>
          <div className="column">
            <EmptySqr title={props.title3} />
            <div className="border">
              <span> شرایط ارسال سفارشات</span>
              <span>خدمات پس از فروش</span>
              <span>راهنمای خرید</span>
              <span>اخبار و مقالات</span>
              <span>درباره ما</span>
              <span>تماس با ما</span>
            </div>{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "9px"
            }}
          >
            <img
              style={{ marginTop: "91px", opacity: ".3", height: "233px" }}
              src={wheelchair}
            />
            <img
              src={certificate}
              alt="certificates"
              style={{ marginTop: "72px", width: "154px", height: "84px" }}
            />
          </div>
        </div>
      </div>
      <div className="fixed-footer">
        <span>کلیه حقوق این وبسایت متعلق به شرکت ؟؟؟ است.</span>
        <span className="rights">Designed and Developed by ???.com</span>
        <span className="media-title">شبکه های اجتماعی</span>
        <div className="icons">
          <img className="image" src={Telegram} />
        </div>
        <img className="icons" src={Instagram} />
        <img className="icons" src={Facebook} />
        <img className="icons" src={Twitter} />
      </div>
    </>
  );
}
