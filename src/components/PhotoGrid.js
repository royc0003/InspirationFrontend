import React from 'react';
// Redux-Store Related Imports
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Component Related Imports
import { Photo } from './Photo';

// Import CSS
import '../sass/components/_PhotoGrid.scss';


// export default class Main extends React.Component
export function PhotoGrid(props){

    return (
      <div className="photo-grid">
          {props.posts.map((post, i) => <Photo {...props} key={i} i={i} post={post}/>)}
      </div>
    );
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
