import React, { useState } from "react";

// Bootstrap related componentes
import RangeSlider from "react-bootstrap-range-slider";
import { Container, Row, Col } from "react-bootstrap";

export function Questionaire3(props) {
  const [value, setValue] = useState(0);
  return (
    <div className="qn3-overall">
      <Container>
        <Row>
          <Col sm={12} md={4} lg={2}>Something</Col>
          <Col sm={12} md={8}  lg={10}>
            <RangeSlider
              value={value}
              onChange={(changeEvent) => setValue(changeEvent.target.value)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
