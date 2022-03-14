import React, { useEffect, useState } from "react";

// Bootstrap related components
// import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { ClimbingBoxLoader } from "react-spinners";

// Redux related
import { useDispatch, useSelector } from "react-redux";
import {
  getallusers,
  getmatchedhistory,
  getuserinfo,
  flattenmatchedusers,
  getinterests,
  flattenuserinterests,
} from "../actions/profilepage";

export function Profilepage(props) {
  // Set states Related to Spinner
  let [loading] = useState(true);
  let [color] = useState("#212529");
  // set dispatch
  const dispatch = useDispatch();

  // Get current isComplete state from profilepage store to render Spinner
  const isComplete = useSelector((state) => state.profilepage.isComplete);

  console.log("Testing for isComplete");
  console.log(isComplete);

  // Similar to React's Component Did Mount
  useEffect(() => {
    const retrieveAllDataPromise = async () => {
      console.log("This is working");
      await dispatch(getallusers());
      await dispatch(getmatchedhistory());
      await dispatch(getinterests());
      await dispatch(getuserinfo());
      await dispatch(flattenmatchedusers());
      await dispatch(flattenuserinterests());
    };
    // Retrieves all data necessary for rendering profile page
    retrieveAllDataPromise();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // only used for testing
  // const handleHistory = async () => {
  //     console.log("This is working")
  //     await dispatch(getallusers());
  //     await dispatch(getmatchedhistory());
  //     await dispatch(getinterests());
  //     await dispatch(getuserinfo());
  //     await dispatch(flattenmatchedusers());
  //     await dispatch(flattenuserinterests());
  // }
  return (
    <div>
      {!isComplete ? (
        <Container className="spinner-class">
          <Row className="justify-content-xs-center">
            <Col
              xs={{ span: 6, offset: 5 }}
              md={{ span: 6, offset: 6 }}
              lg={{ span: 6, offset: 6 }}
              xl={{ span: 6, offset: 5 }}
            >
              <ClimbingBoxLoader color={color} loading={loading} size={20} />
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          This is profile page
          {/* Hui Zhan I've Included all the data for you; do include your profile page here */}
        </div>
      )}
    </div>
  );
}
