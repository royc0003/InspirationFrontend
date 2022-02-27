/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

// Import Redux Related Components/Library
import { useSelector, useDispatch } from "react-redux";
import { removeinterest, addinterest } from "../actions/question2";

// Bootstrap related components
import { Col } from "react-bootstrap";

export function SingleInterest(props) {
  // set Dispatch
  const dispatch = useDispatch();
  // set states
  const [buttonColour, setButtonColor] = useState("white");
  const selectedInterests = useSelector(
    (state) => state.question2.selectedInterests
  );
  const { id, interest } = props._interest;

  const interestHandler = (_interest) => {
    if (buttonColour === "white") {
      setButtonColor("#e0e0e0");
    } else {
      setButtonColor("white");
    }
    // run dispatch here to save answers directly into store
    var findID = selectedInterests.findIndex(
      (val) => parseInt(val) === parseInt(id)
    );
    // if findID has been found, we can remove it
    if (parseInt(findID) !== -1) {
      console.log("removing");
      dispatch(removeinterest(findID));
    } else {
      dispatch(addinterest(id));
    }
  };

  return (
    <Col>
        <button
          onClick={() => {
            interestHandler(interest);
          }}
          className="brandsBtn"
          style={{ backgroundColor: buttonColour }}
        >
          <div className="brandsInternal">
            <img
              src={
                require("../assets/" +
                  interest.trim().replace(/\s+/g, "").toLowerCase() +
                  ".svg").default
              }
              className="img-fluid"
              alt="No image available"
            />

            <p style={{ marginTop: "8px" }}> {interest} </p>
          </div>
        </button>
    </Col>
  );
}
