/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

export function SingleInterest(props) {
  // set states
  const [buttonColour, setButtonColor] = useState("white");
  const {id, interest } = props._interest;

  const interestHandler = (_interest) => {
    if (buttonColour === "white") {
      setButtonColor("#e0e0e0");
    } else {
      setButtonColor("white");
    }
    // run dispatch here to save answers directly into store
    
  };

  return (
    <button
      onClick={() => {
        interestHandler(interest);
      }}
      className="brandsBtn"
      style={{ backgroundColor: buttonColour }}
    >
      <div className="brandsInternal">
        <img
          src={require("../assets/" + interest.trim().replace(/\s+/g, '').toLowerCase() + ".svg").default}
          className="img-fluid"
          alt="No image available"
        />

        <p style={{ marginTop: "8px" }}> {interest} </p>
      </div>
    </button>
  );
}
