import React, { useEffect } from 'react';

// Redux-Store Related Imports
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import Redux Related Components/Library
import { useDispatch } from "react-redux";

// Import Actions
import { getmatchedusers, getallusers } from '../actions/photogrid';

// Component Related Imports
import { Photo } from './Photo';

// Import CSS
import '../sass/components/_PhotoGrid.scss';


// export default class Main extends React.Component
export function PhotoGrid(props){

  // Set Dispatch
  const dispatch = useDispatch();

  // Similar to componentDidMount()
  useEffect(() => {
    console.log("Attempting to get matched users");
    dispatch(getmatchedusers());
    // Perform get all users here
    dispatch(getallusers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
      <div className="photo-grid">
        {/** Include Spinner Class Here, check all matched user + filter users are done */}
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
