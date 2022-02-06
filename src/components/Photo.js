import React, { useState } from 'react';

// Router Related Imports
import { Link } from 'react-router-dom';

// Transition/Effects Related Imports
import { CSSTransition } from 'react-transition-group';

// Import CSS
import '../sass/components/_Photo.scss';

export function Photo (props) {
  
    const { post, comments, i } = props;
    const [inProp, setInProp] = useState(false);

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

          <CSSTransition in={inProp} onEnter={() => setInProp(true)} onExit={() => setInProp(false)} classNames="like" timeout={500}>
            <span key={post.likes} className="likes-heart" >
              {post.likes}
            </span>
          </CSSTransition>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button
              onClick={props.increment.bind(null, i)}
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
};

