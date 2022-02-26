import React from "react";

// Bootstrap related componentes
import { Container } from "react-bootstrap";

// Import Components
import { Slider } from "../components/Slider";

export function Questionaire3(props) {
  return (
    <div className="qn3-overall">
      <Container>
        <Slider />
      </Container>
    </div>
  );
}
