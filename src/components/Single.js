import React, { useEffect, useState } from "react";
// Bootstrap related components
import { Col, Container, Row } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
// Routing Related Imports
import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { bindActionCreators } from "redux";
// Redux-Store Related Imports
import * as actionCreators from "../actions/actionCreators";
// Import CSS
import "../sass/components/_Single.scss";
import { Comments } from "./Comments";
// Component Related Imports
import { Photo } from "./Photo";





// TODO: Fix class components
// https://chrisvhur.medium.com/how-to-access-url-parameters-using-react-router-6-a4cf6bdad4dd

export function Single(props) {
  // Set States Related To Spinner
  let [loading] = useState(true);
  let [color] = useState("#212529");

  // Get photogrid state
  const isMatched = useSelector((state) => state.photogrid.isMatched);
  const hasFoundUsers = useSelector((state) => state.photogrid.hasFoundUsers);

  const matchToAllUsers = useSelector(
    (state) => state.photogrid.matchToAllUsers
  );
  const { postId } = useParams();
  const i = matchToAllUsers.findIndex(
    (post) => parseInt(post.id) === parseInt(postId)
  );
  const user = matchToAllUsers[i];
	
	useEffect(() => {
		console.log('matchToAllUsers in Single')
		console.log(matchToAllUsers);
	}, [matchToAllUsers]);

  return (
    <div className="single-photo">
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
        <Container className="overall-single-container">
          <Row className="overall2">
            <Photo 
							xs_span={12} 
							sm_span={8} 
							sm={0} 
							xs={2} 
							user={user} {...props}></Photo>
            <Comments post={user} biography={user.biography} hall={user.hall} email={user.email}/>
          </Row>
        </Container>
      )}
      {/* <Comments postComments={postComments} {...props} /> */}
    </div>
  );
}

// export class Single extends React.Component{

//   render() {
//     // const { postId } = useParams();
//     // // const { postId } = this.props.params;
//     // const i = this.props.posts.findIndex((post) => post.code === postId);
//     // const post = this.props.posts[i];

//     // const postComments = this.props.comments[postId] || [];

//     return (
//       <div className="single-photo">
//         hi
//         {/* <Photo i={i} post={post} {...this.props}></Photo>
//         <Comments postComments={postComments} {...this.props}/> */}
//       </div>
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);
