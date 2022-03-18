/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
// Bootstrap related components
import { Col, Image } from "react-bootstrap";
// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { addinterest, removeinterest } from "../actions/question2";
import styles from '../sass/components/_singleInterest.module.scss';


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
    <Col xs={12} sm={{span: 12}} md={{span:4, offset:0}} lg={{span:3}}>
        <button
          onClick={() => {
            interestHandler(interest);
          }}
          className="brandsBtn"
          style={{ backgroundColor: buttonColour }}
        >
          <div className="brandsInternal">
            <Image
              alt="No image available"
							className={`${styles.image}`}
              src={
                require("../assets/new_svgs/" +
                  interest.trim().replace(/\s+/g, "").toLowerCase() +
                  ".svg").default
              }
            />

            <p style={{ marginTop: "8px" }}> {interest} </p>
          </div>
        </button>
    </Col>
  );
}
