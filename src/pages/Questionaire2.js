import React from "react";
import { Button } from "react-bootstrap";

export function Questionaire2(props) {
    // destructuring
  const { nextQuestionHandler } = props;
  return (
    <div>
      This is questionarie 2
      <Button onClick={nextQuestionHandler}>Click to qn3</Button>
    </div>
  );
}