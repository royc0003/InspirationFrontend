/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

// Bootstrap related componentes
// https://github.com/jaywilz/react-bootstrap-range-slider
import RangeSlider from "react-bootstrap-range-slider";
import { Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

// Import Reudx Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { updateinterestrank } from "../actions/question3";

export function Slider(props) {
//   const [_thisinterest, set_Interest] = useState([]);
  // Set States
  const [value, setValue] = useState(1);

  const interests = useSelector((state) => state.question2.interests);

  // Set Dispatch
  const dispatch = useDispatch();

  // destructuring props
  const { index, i } = props;
  const handleSubmit = () => {
    console.log("Dispatching to update interest rank");
    dispatch(updateinterestrank(i, parseInt(value)));
  };
  const _interest = interests[index-1]
  return (
    <Row>
      <Col sm={12} md={4} lg={2}>
        <Stack gap={2}>
          <div className="slider-item-1">
            <img
              src={
                require("../assets/" +
                _interest.interest
                    .trim()
                    .replace(/\s+/g, "")
                    .toLowerCase() +
                  ".svg").default
              }
              alt="No Image Available"
            />
          </div>
          <div className="slider-item-2">{_interest.interest}</div>
        </Stack>
      </Col>
      <Col sm={12} md={8} lg={10}>
        <RangeSlider
          variant={"primary"}
          min={1}
          max={10}
          size={"lg"}
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
          onAfterChange={handleSubmit}
        />
      </Col>
    </Row>
  );
}
