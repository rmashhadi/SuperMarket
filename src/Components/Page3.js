import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import VisualProducts from "./VisualProducts";
import SpecialOffers from "./SpecialOffers";
import Carousel from "./Carousel";
import EdgeLine from "./EdgeLine";
import OrangeFooter from "./OrangeFooter";
import NavBar from "./NavBar";
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
import ProductList from "./Products/ProductList";
import News from "./Products/News";
import AboutUs from "./Products/AboutUs";
import Video from "./Products/Video";
import Contact from "./Products/Contact";
export default function PageTwo() {
  const [mode, setMode] = useState("");
  const handleMode = () => {
    if (mode === "") {
      return "location0";
    }
    if (mode === "productList") {
      return "location1";
    }
    if (mode === "Video") {
      return "location2";
    }
    if (mode === "News") {
      return "location3";
    }
    if (mode === "About") {
      return "location4";
    }
    if (mode === "Contact") {
      return "location5";
    }
  };
  const productList = [
    {
      Class: "offers",
      FirstPrice: "1,250,000",
      product: "ویلچر تمام ارتوپدی مدل SC-270",
      SecondPrice: "999,000",
      Image: "product1"
    },
    {
      Class: "offers",
      FirstPrice: "1,250,000",
      product: "ویلچر خیابانی برقی ایستا مدل TCP/IP",
      SecondPrice: "999,000",
      Image: "product2"
    },
    {
      Class: "offers",
      FirstPrice: "1,250,000",
      product: "عصای طبی چهارپایه مدل SE-197",
      SecondPrice: "999,000",
      Image: "product3"
    },
    {
      Class: "offers",
      FirstPrice: "1,250,000",
      product: "ماشین تایپ ویژه نابینایان مدل پرکینز",
      SecondPrice: "999,000",
      Image: "product4"
    }
  ];

  return (
    <div className="main-body">
      <NavBar />
      <div className="orange">
        <div onMouseOver={() => setMode("")} className="row1">
          <div className="input-container">
            <img className="logo-container" src={company} alt="مفسران فردا" />

            <input
              onMouseOver={() => setMode("")}
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
          <div onMouseOver={() => setMode("productList")} className="item">
            <SubjectIcon
              style={{
                marginTop: "3px",
                marginLeft: "0px"
              }}
              className="icon-list"
            />

            <b>دسته بندی محصولات</b>
          </div>
          <div onMouseOver={() => setMode("Video")} className="item">
            <OndemandVideoIcon className="icon-list" />

            <b>ویدئوهای آموزشی</b>
          </div>
          <div onMouseOver={() => setMode("News")} className="item">
            <ChatOutlinedIcon className="icon-list" />

            <b>اخبار و مقالات</b>
          </div>
          <div onMouseOver={() => setMode("About")} className="item">
            <InfoOutlinedIcon className="icon-list" />

            <b>درباره ما</b>
          </div>
          <div
            // onClick={() => setMode("")}
            onMouseOver={() => setMode("Contact")}
            className="item"
          >
            <PhoneEnabledOutlinedIcon className="icon-list" />

            <b>تماس با ما</b>
          </div>
        </div>

        <div className={handleMode()}>
          <DashLine page="active" />
        </div>
      </div>

      {mode === "productList" && (
        <div
          onMouseLeave={() => setMode("")}
          // onClick={() => setMode("productList")}
        >
          <ProductList />
        </div>
      )}
      {mode === "News" && (
        <div
          onMouseLeave={() => setMode("")}
          //  onClick={() => setMode("News")}
        >
          <News />
        </div>
      )}
      {mode === "Contact" && (
        <div
          onMouseLeave={() => setMode("")}
          // onClick={() => setMode("Contact")}
        >
          <Contact />
        </div>
      )}

      {mode === "About" && (
        <div
          onMouseLeave={() => setMode("")}
          // onMouseOver={() => setMode("About")}
        >
          <AboutUs />
        </div>
      )}
      {mode === "Video" && (
        <div
          onMouseLeave={() => setMode("")}
          // onMouseOver={() => setMode("Video")}
        >
          <Video />
        </div>
      )}
      <VisualProducts />
      <EdgeLine />

      <Carousel />

      <OrangeFooter
        txt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و طراحی"
        txt2="لورم ایپسوم متن ساختگی با تولید سادگی"
        title1="درباره ما"
        title2="محصولات"
        title3="لینک های مفید"
      />
    </div>
  );
}
