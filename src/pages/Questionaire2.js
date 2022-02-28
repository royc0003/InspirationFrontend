import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

// Import Component
import { SingleInterest } from "../components/SingleInterest";

// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { getinterests, setinterest } from "../actions/question2";

// Import CSS
import "../sass/pages/_Questionaire2.scss";

export function Questionaire2(props) {
  // Redux Store's Interest
  const interests = useSelector((state) => state.question2.interests);
  // Set All States
  const [localInterests] = useState([
    {
      id: 1,
      created_on: "2022-02-07",
      interest: "studying",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 2,
      created_on: "2022-02-07",
      interest: "partying",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 3,
      created_on: "2022-02-07",
      interest: "drinking",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 4,
      created_on: "2022-02-07",
      interest: "eating",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 5,
      created_on: "2022-02-07",
      interest: "hiking",
      pic_url:
        "https://www.google.com/maps/about/images/treks-lp/about-copy-image.jpg",
      polymorphic_ctype: 3,
    },
    {
      id: 6,
      created_on: "2022-02-07",
      interest: "travelling",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 7,
      created_on: "2022-02-07",
      interest: "chess",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 8,
      created_on: "2022-02-07",
      interest: "playing computer games",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 9,
      created_on: "2022-02-07",
      interest: "sports",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 10,
      created_on: "2022-02-07",
      interest: "fashion",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 11,
      created_on: "2022-02-07",
      interest: "fitness",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 12,
      created_on: "2022-02-07",
      interest: "weightlifting",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 13,
      created_on: "2022-02-07",
      interest: "music",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 14,
      created_on: "2022-02-07",
      interest: "make-up",
      pic_url: null,
      polymorphic_ctype: 3,
    },
    {
      id: 15,
      created_on: "2022-02-07",
      interest: "visiting museums",
      pic_url: null,
      polymorphic_ctype: 3,
    },
  ]); // to store localInterests for Error Handling

  // Set Dispatch
  const dispatch = useDispatch();

  // componentDidMount() -> Retrieve all interests.
  useEffect(() => {
    dispatch(getinterests());
    console.log("printing interests");
    console.log(interests);
    if (!interests) {
      console.log("I'm setting");
      dispatch(setinterest(localInterests));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Functions

  const _question2Handler = () => {
    console.log("it's working");
    nextQuestionHandler();
  };

  // Make sure to do error handling.
  // destructuring
  const { nextQuestionHandler } = props;
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col sm={{span:12, offset:9}}>
            <div className="interest-style-overall">
            <span className="interest-style">Select your interest</span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {
            // Error Handling: In case API Fails
            interests === null
              ? localInterests.map((value, i) => (
                  <SingleInterest key={value.id} _interest={value} />
                ))
              : interests.map((value, i) => (
                  <SingleInterest key={value.id} _interest={value} />
                ))
          }
        </Row>
        <Row
          xs={4}
          md={1}
          lg={1}
          className="justify-content-md-right justify-content-sm-center justify-content-lg-right"
        >
          <Col xs={{ span: 4, offset: 4}} sm={{ span: 4}} md={{ span: 4, offset:10}} lg={{ span: 4, offset:10}} xl={{ span: 4, offset:10}} xxl={{ span: 4, offset:10}}>
            <Button style={{fontSize:"20px"}} onClick={_question2Handler}>Click to qn3</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
