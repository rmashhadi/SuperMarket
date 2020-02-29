import React from "react";
export default function Shape(props) {
  return (
    <div style={{ width: "109.79px", height: "44.7px" }}>
      <span className="label">{props.discount}</span>
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>
    </div>
  );
}
