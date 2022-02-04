import React from 'react';
// Redux-Store Related Imports
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Component Related Imports
import { Photo } from './Photo';


// export default class Main extends React.Component
export class PhotoGrid extends React.Component{
  render() {
    return (
      <div className="photo-grid">
          {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
      </div>
    );
  }
};


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
