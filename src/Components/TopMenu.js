import React, { useState } from "react";
import DashLine from "./DashLine";
import SubjectIcon from "@material-ui/icons/Subject";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import InsideMenu from "./InsideMenu";
import { JwModal } from "./JwModal";
export default function TopMenu(props) {
  const [mode, setMode] = useState("");
  return (
    <>
      <div
        onMouseDownCapture={JwModal.close("custom-modal-2")}
        className="row2"
      >
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
            onMouseOver={JwModal.open("custom-modal-2")}
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

      <JwModal id="custom-modal-2">
        <InsideMenu mode={mode} />
      </JwModal>
    </>
  );
}
