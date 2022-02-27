import React, { useEffect } from "react";

// Bootstrap related components
import { Container, Button } from "react-bootstrap";

// Import Components
import { Slider } from "../components/Slider";

// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { setinterestrank } from "../actions/question3";

export function Questionaire3(props) {
  // set States
  const selectedInterests = useSelector(
    (state) => state.question2.selectedInterests
  );
  console.log(selectedInterests);
  // set dispatch
  const dispatch = useDispatch();
  // componentDidMount()
  useEffect(() => {
    console.log("Using effect");
    console.log(selectedInterests);
    console.log("Dispatching setinrerest rank");
    dispatch(setinterestrank());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    console.log();
  };

  return (
    <div className="qn3-overall">
      <Container>
        <div className="q3-main">How would you rate your interest?</div>
        {selectedInterests.map((value, i) => (
          <Slider key={value} index={value} />
        ))}
        <Button onClick={handleSubmit}>Click to next question</Button>
      </Container>
    </div>
  );
}
