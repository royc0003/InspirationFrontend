import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// Bootstrap related components
import { Button, Col, Container, Row } from "react-bootstrap";
// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { setinterestrank } from "../actions/question3";
// Import Components
import { Slider } from "../components/Slider";
import styles from '../sass/pages/_Questionaire3.module.scss';

// import { exportuser } from "../actions/formpage";

export function Questionaire3(props) {
  // set States
  const selectedInterests = useSelector(
    (state) => state.question2.selectedInterests
  );
  console.log(selectedInterests);
  // set dispatch
  const dispatch = useDispatch();
  // // Set router
  // const navigate = useNavigate()
  // componentDidMount()
  useEffect(() => {
    console.log("Using effect");
    console.log(selectedInterests);
    console.log("Dispatching setinrerest rank");
    dispatch(setinterestrank());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleSubmit = () => {
  //     console.log("Exporting user")
  //     dispatch(exportuser());

  //     console.log("Moving to match page");
  //     navigate("/protected")
  // };
  
  // Destructuring
  const { nextQuestionHandler } = props;
  return (
    <div className="qn3-overall">
      <Container>
        <h1 id={styles.interestsHeader}>How would you rate your interest?</h1>
        {selectedInterests.map((value, i) => (
          <Slider key={value} index={value} i={i}/>
        ))}
        <Row>
          <Col xs={{ span: 4, offset: 4}} sm={{ span: 4}} md={{ span: 4, offset:10}} lg={{ span: 4, offset:10}} xl={{ span: 4, offset:10}} xxl={{ span: 4, offset:10}}>
            <Button style={{fontSize:"20px"}} onClick={nextQuestionHandler}>Continue to Next Question</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
