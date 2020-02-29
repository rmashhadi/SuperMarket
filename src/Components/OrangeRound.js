import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import DashLine from "./DashLine";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import company from "../pictures/company.png";
import SubjectIcon from "@material-ui/icons/Subject";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

export default function OrangeRound(props) {
  return (
    <>
      <div className="orange">
        <div className="row1">
          <div className="input-container">
            <img className="logo-container" src={company} alt="مفسران فردا" />

            <input
              className="input"
              placeholder="جستجوی نام کالا، برند یا دسته بندی مورد نظر"
            />
            <div className="search-icon-container">
              <SearchIcon style={{ fontSize: "26.5px", margin: "auto" }} />
            </div>
          </div>
          <div className="row1-left">
            <PersonAddOutlinedIcon
              style={{
                alignSelf: "center",
                fontSize: "20px",
                marginLeft: "2px"
              }}
            />
            <b
              style={{
                alignSelf: "center",
                fontSize: "15px",
                marginLeft: "40px"
              }}
            >
              ورود / ثبت نام
            </b>
            <div className="basket">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
              >
                <LocalMallOutlinedIcon />
                <b>سبد خرید</b>
                <span
                  style={{
                    borderRadius: "50%",
                    height: "0px",
                    width: "16px",
                    color: "#ffe4db",
                    paddingBottom: "19px",
                    boxSizing: "border-box",
                    backgroundColor: "#fb4b63",
                    position: "relative",
                    right: "-83px",
                    top: "10px"
                  }}
                >
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="item">
            <SubjectIcon
              style={{
                marginTop: "3px",
                marginLeft: "0px",
                color: props.page === "main" ? "black" : "#FB4B63"
              }}
              className="icon-list"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2px"
              }}
            >
              <b style={{ color: props.page === "main" ? "black" : "#FB4B63" }}>
                دسته بندی محصولات
              </b>
              <div style={{ marginTop: "-4px" }}>
                <DashLine page="NotMain" />
              </div>
            </div>
          </div>
          <div className="item">
            <OndemandVideoIcon className="icon-list" />
            <b>ویدئوهای آموزشی</b>
          </div>
          <div className="item">
            <ChatOutlinedIcon className="icon-list" />
            <b>اخبار و مقالات</b>
          </div>
          <div className="item">
            <InfoOutlinedIcon className="icon-list" />

            <b>درباره ما</b>
          </div>
          <div className="item">
            <PhoneEnabledOutlinedIcon className="icon-list" />

            <b>تماس با ما</b>
          </div>
        </div>
      </div>
    </>
  );
}
