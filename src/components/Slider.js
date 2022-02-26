import React, { useState } from "react";

// Bootstrap related componentes
// https://github.com/jaywilz/react-bootstrap-range-slider
import RangeSlider from "react-bootstrap-range-slider";
import { Row, Col } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack'


export function Slider(props) {
  const [value, setValue] = useState(1);
  return (
    <Row>
      <Col sm={12} md={4} lg={2}>
        <Stack>
            <div className="slider-item-1">item 1</div>
            <div className="slider-item-2">item 2</div>
        </Stack>
      </Col>
      <Col sm={12} md={8} lg={10}>
        <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        />
      </Col>
    </Row>
  );
}
