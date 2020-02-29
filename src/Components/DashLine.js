import React from "react";
export default function DashLine(props) {
  return (
    <>
      <p
        style={
          {
            // visibility: props.page === "active" ? "visible" : "hidden"
          }
        }
        className="dash1"
      ></p>
      <p
        // style={{ visibility: props.page === "active" ? "visible" : "hidden" }}
        className="dash2"
      ></p>
      <p
        // style={{ visibility: props.page === "active" ? "visible" : "hidden" }}
        className="dash3"
      ></p>
    </>
  );
}
