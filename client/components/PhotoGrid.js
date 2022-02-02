import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
          {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
      </div>
    );
  },
});

export default PhotoGrid;


