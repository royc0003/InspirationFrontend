import React, { useState } from "react";
import { Toast } from "react-bootstrap";

export function Toasts(props) {
  const { item } = props;
  const [show, setShow] = useState(true);
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={8000}
      autohide
      className="d-inline-block m-1"
      bg={"warning"}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>{item}</Toast.Body>
    </Toast>
  );
}
