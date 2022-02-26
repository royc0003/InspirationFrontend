import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { getinterests } from '../actions/question2';

export function Questionaire2(props) {
  // Set All States
  // const interests = useSelector(state => state.question2.interests);

  // Set Dispatch
  const dispatch = useDispatch();

  // componentDidMount() -> Retrieve all interests.
  useEffect(() => {
    // dispatch(getinterests())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Make sure to do error handling.
    // destructuring
  const { nextQuestionHandler } = props;
  return (
    <div>
      This is questionarie 2
      <Button onClick={nextQuestionHandler}>Click to qn3</Button>
    </div>
  );
}