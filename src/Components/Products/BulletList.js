import React from "react";
import wheelchair from "../../pictures/wheelchair.jpg";
export default function BulletList() {
  return (
    <>
      <div className="list-container">
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">ویلچر خیابانی برقی ایستا</span>
        </div>
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">
            ویلچر برقی جاده رو مناسب جهت تردد در شب
          </span>
        </div>
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">
            ویلچر خیابانی برقی جاده رو با چراغ و راهنما
          </span>
        </div>{" "}
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">
            ویلچر خیابانی برقی آلومینیومی کمک فنردار
          </span>
        </div>{" "}
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">ویلچر خیابانی برقی برانکاردی</span>
        </div>{" "}
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">ویلچر خیابانی برقی ایستا</span>
        </div>{" "}
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">ویلچر خیابانی برقی تاشو آلومینیوم</span>
        </div>{" "}
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">ویلچر خیابانی برقی تاشو</span>
        </div>{" "}
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">اسکوتر برقی با 4 چرخ</span>
        </div>
      </div>
      <div className="list-container">
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">ویلچر خیابانی برقی کم مصرف</span>
        </div>
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">اسکوتر برقی با 3 چرخ</span>
        </div>
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">
            ویلچر خیابانی برقی آلومینیومی کمک فنردار
          </span>
        </div>{" "}
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">ویلچر خیابانی برقی برانکاردی</span>
        </div>{" "}
        <div className="product-item">
          <p className="bullet"></p>
          <span className="list-txt">ویلچر خیابانی برقی ایستا</span>
        </div>
      </div>
      <img className="wheelchair" src={wheelchair} alt="wheelchair" />
    </>
  );
}
