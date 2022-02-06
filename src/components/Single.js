import React from 'react';
// Redux-Store Related Imports
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Routing Related Imports
import { useParams } from 'react-router-dom';

// Component Related Imports
import { Photo } from './Photo';
import  Comments  from './Comments';

// Import CSS
import '../sass/components/_Single.scss';

// TODO: Fix class components
// https://chrisvhur.medium.com/how-to-access-url-parameters-using-react-router-6-a4cf6bdad4dd

export function Single(props) {
  const { postId } = useParams();
  const i = props.posts.findIndex((post) => post.code === postId);
  const post = props.posts[i];

  const postComments = props.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props}></Photo>
      <Comments postComments={postComments} {...props} />
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
