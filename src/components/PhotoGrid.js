import React, { useEffect, useState } from "react";

// Redux-Store Related Imports
import * as actionCreators from "../actions/actionCreators";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Botstrap related components
import { Container, Row, Col } from "react-bootstrap";
import { ClimbingBoxLoader } from "react-spinners";

// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";

// Import Actions
import { getmatchedusers, getallusers } from "../actions/photogrid";

// Component Related Imports
import { Photo } from "./Photo";

// Import CSS
import "../sass/components/_PhotoGrid.scss";

// export default class Main extends React.Component
export function PhotoGrid(props) {
  // Set States Related To Spinner
  let [ loading ] = useState(true);
  let [color ] = useState("#212529");

  // Set Dispatch
  const dispatch = useDispatch();

  // Get photogrid state
  const isMatched = useSelector((state) => state.photogrid.isMatched);
  const hasFoundUsers = useSelector((state) => state.photogrid.hasFoundUsers);

  // Similar to componentDidMount()
  useEffect(() => {
    console.log("Attempting to get matched users");
    dispatch(getmatchedusers());
    // Perform get all users here
    dispatch(getallusers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="photo-grid">
      {/** Include Spinner Class Here, check all matched user + filter users are done */}
      {!isMatched && !hasFoundUsers ? (
        <Container className="spinner-class">
          <Row className="justify-content-xs-center">
            <Col
              xs={{ span: 6, offset: 5 }}
              md={{ span: 6, offset: 6 }}
              lg={{ span: 6, offset: 5 }}
            >
              <ClimbingBoxLoader color={color} loading={loading} size={20} />
            </Col>
          </Row>
        </Container>
      ) : (
        props.posts.map((post, i) => (
          <Photo {...props} key={i} i={i} post={post} />
        ))
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
