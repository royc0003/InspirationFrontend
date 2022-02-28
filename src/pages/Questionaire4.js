import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

export function Questionaire4(props) {
  return (
    <Container>
      <Row>
        <Col>
          <p>Question4</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button>Next Question</Button>
        </Col>
      </Row>
    </Container>
  );
}
