import React, { useState } from "react";
// Bootstrap related components
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// Import Redux Related Components/Library
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { exportuser } from "../actions/formpage";
import styles from '../sass/pages/_Questionaire4.module.scss';

export function Questionaire4(props) {
// Set state
// https://stackoverflow.com/questions/49362279/react-change-input-value-onchange
const [input, setInput] = useState("")

// set dispatch
const dispatch = useDispatch();

// Set router
const navigate = useNavigate();

const handleSubmit = () => {
    console.log("Exporting user")
      dispatch(exportuser(input));

      console.log("Moving to match page");
      navigate("/protected")
}

  return (
    <Container id={styles.questionaire4}>
      <Row>
        <Col>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label as="h1" id={styles.bioHeader}>How would you describe yourself?</Form.Label>
              <Form.Control as="textarea"  placeholder="Please enter more information about yourself..." rows={3} onChange={(e) => setInput(e.target.value)}/>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 4, offset: 4}} sm={{ span: 4}} md={{ span: 4, offset:10}} lg={{ span: 4, offset:10}} xl={{ span: 4, offset:10}} xxl={{ span: 4, offset:10}}>
          <Button style={{fontSize:"20px"}} disabled={input.length < 10} onClick={handleSubmit}>Continue to Next Question</Button>
        </Col>
      </Row>
    </Container>
  );
}
