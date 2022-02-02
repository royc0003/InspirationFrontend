import React from 'react';
import Photo from './Photo';
import Comments from './Comments';


// export default class Main extends React.Component
export default class extends React.Component{
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];

    const postComments = this.props.comments[postId] || [];
    console.log(post);
    return (
      <div className="single-photo">
          <Photo i={i} post={post} {...this.props}></Photo>
          <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
}

