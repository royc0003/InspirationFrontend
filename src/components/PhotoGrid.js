import React, { useEffect, useState } from "react";

// Redux-Store Related Imports
import * as actionCreators from "../actions/actionCreators";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Bootstrap related components
import { Container, Row, Col } from "react-bootstrap";
import { ClimbingBoxLoader } from "react-spinners";

// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";

// Import Actions
import {
  getmatchedusers,
  getallusers,
  matchUserToAllUsers,
  getinterests,
  getlistofinterests,
} from "../actions/photogrid";

// Component Related Imports
import { Photo } from "./Photo";

// Import CSS
import "../sass/components/_PhotoGrid.scss";

// export default class Main extends React.Component
export function PhotoGrid(props) {
  // Set States Related To Spinner
  let [loading] = useState(true);
  let [color] = useState("#212529");

  // Set Dispatch
  const dispatch = useDispatch();

  // Get photogrid state
  const isMatched = useSelector((state) => state.photogrid.isMatched);
  const hasFoundUsers = useSelector((state) => state.photogrid.hasFoundUsers);
  const hasMatchToAllUsers = useSelector(
    (state) => state.photogrid.hasMatchToAllUsers
  );

  // Similar to componentDidMount()
  useEffect(() => {
    // Reference https://stackoverflow.com/questions/21518381/proper-way-to-wait-for-one-function-to-finish-before-continuing
    const promiseFunction = async () => {
      console.log("Attempting to get matched users");
      await dispatch(getmatchedusers());
      await dispatch(getallusers());
      await dispatch(getinterests());
      // flatten list
      await dispatch(getlistofinterests());
      // do something else here after firstFunction completes
      dispatch(matchUserToAllUsers());
    };
    // Perform get all users here
    promiseFunction();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const matchToAllUsers = useSelector(
    (state) => state.photogrid.matchToAllUsers
  );

  return (
    <div className="photo-grid">
      {/** Include Spinner Class Here, check all matched user + filter users are done */}
      {!isMatched && !hasFoundUsers ? (
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
        [
          !hasMatchToAllUsers ? (
            <Container className="spinner-class">
              {console.log("I'm waiting for matchtoallusers")}
              <Row className="justify-content-xs-center">
                <Col
                  xs={{ span: 6, offset: 5 }}
                  md={{ span: 6, offset: 6 }}
                  lg={{ span: 6, offset: 6 }}
                  xl={{ span: 6, offset: 5 }}
                >
                  <ClimbingBoxLoader
                    color={color}
                    loading={loading}
                    size={20}
                  />
                </Col>
              </Row>
            </Container>
          ) : (
            // props.posts.map((post, i) => (
            //   <Photo {...props} key={i} i={i} post={post} />
            // ))
            //  {const hasMatchToAllUsers = useSelector((state) => state.matchToAllUsers.hasMatchToAllUsers);}

            matchToAllUsers.map((user, i) => (
              <div className="photo-grid2">
              <Container fluid>
                <Row className="justify-content-center" >
                  <Photo {...props} key={i} i={i} post={user} xl={5} lg={0} xxl={4} sm_span={10} sm={3} md={7} xs_span={12} md_span={10} xl_span={12} xxl_span={12} xs={0}/>
                </Row>
              </Container>
              </div>
            ))
          ),
        ]
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
