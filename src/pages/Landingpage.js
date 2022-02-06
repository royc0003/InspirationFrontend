import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

export function Landingpage(props) {
  return (
    <Container>
      <Row>
        <div className="landingoverall">
          <div className="Caption Title">
            <Col xs={12} md={12} lg={12}>
              <h1>
                <span className="captionFirst">
                  Boyfriends and Girlfriends Will Come And Go,
                </span>
              </h1>
            </Col>
            <Col xs={12} md={12} lg={12}>
              <span className="captionSecond">But Friends Are For Life.</span>
            </Col>
          </div>
        </div>
      </Row>
      <div className="backround-image"></div>
      <Row>
        <div>
          <Button>Find Friends!</Button>
        </div>
      </Row>
    </Container>
  );
}
