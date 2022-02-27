import React, { useState } from "react";

// Bootstrap related componentes
// https://github.com/jaywilz/react-bootstrap-range-slider
import RangeSlider from "react-bootstrap-range-slider";
import { Row, Col } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack'

// Import Reudx Related Components/Library 
import { useDispatch } from "react-redux";
import {
    updateinterestrank,
} from '../actions/question3';

export function Slider(props) {
  // Set States
  const [value, setValue] = useState(1);

  // Set Dispatch
  const dispatch = useDispatch();

  // destructuring props
  const {index} = props
  const handleSubmit = () => {
      console.log("Dispatching to update interest rank");
      dispatch(updateinterestrank(index, parseInt(value)))
  }
  return (
    <Row>
      <Col sm={12} md={4} lg={2}>
        <Stack
        gap={2}
        >
            <div className="slider-item-1">item 1</div>
            <div className="slider-item-2">item 2</div>
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
