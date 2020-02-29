import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
export default function CategoryItem(props) {
  const [show, Setshow] = useState(false);
  const handlePosition = () => {
    if (props.edge === "bottom") {
      return "topB";
    } else {
      return "top";
    }
  };
  const handlePosition2 = () => {
    if (props.edge === "top") {
      return "bottomB";
    } else {
      return "bottom";
    }
  };
  return (
    <>
      <div
        onMouseLeave={() => Setshow(false)}
        onMouseEnter={() => Setshow(true)}
        className="topic"
      >
        <div style={{ width: "270px" }}>
          <b
            style={{
              fontSize: "22px",
              width: "181px",
              zIndex: "10",
              position: "relative",
              right: "-12px",
              top: " 0"
            }}
          >
            {props.item}
          </b>
          <span style={{ fontWeight: "bolder" }}>
            <ArrowBackIosIcon
              style={{
                position: "absolute",
                right: "237px",
                width: "16px",
                color: "red",
                visibility: show ? "visible" : "hidden"
              }}
            />
          </span>
        </div>
        <div className="space">
          {props.edge !== "top" && (
            <div
              style={{ visibility: show ? "visible" : "hidden" }}
              className={handlePosition()}
            ></div>
          )}

          {props.edge !== "bottom" && (
            <div
              style={{ visibility: show ? "visible" : "hidden" }}
              className={handlePosition2()}
            ></div>
          )}
        </div>
      </div>
    </>
  );
}
