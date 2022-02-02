import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// export default class Main extends React.Component
export default class Photo extends React.Component{
  render() {
    const { post, comments, i } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>
          <CSSTransition classNames="like" timeOut={{ enter: 500, exit: 500 }}>
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransition>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button
              onClick={this.props.increment.bind(null, i)}
              className="likes"
            >
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                <span className="speech-after"> </span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
};

