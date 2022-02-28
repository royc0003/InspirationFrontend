import React, { useState, useEffect } from "react";

// Router Related Imports
import { Link } from "react-router-dom";

// Transition/Effects Related Imports
import { CSSTransition } from "react-transition-group";

import { useSelector } from "react-redux";

// Bootstrap related components
import { Col } from "react-bootstrap";

// Import CSS
import "../sass/components/_Photo.scss";

export function Photo(props) {
  const [stringValue, setValue] = useState();
  const { post, comments, i } = props;
  const [inProp, setInProp] = useState(false);
  const listOfInterests = useSelector(
    (state) => state.photogrid.listOfInterests
  );
  // Similar to componentDidMount()
  useEffect(() => {
    console.log("processing string");
    // Process interest string
    var _tmp = [];
    for (var _singleInterest of post.interests) {
      _tmp.push(listOfInterests[parseInt(_singleInterest) - 1]);
    }
    if (_tmp.length >= 1) {
      setValue("#" + _tmp.join(" #").trim());
    } else {
      setValue("No Interest Stated");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col xs={12} sm={{span:10, offset: 2}} md={{ span: 9, offset: 1 }} lg={12} xl={{ span:12, offset: 6}} xxl={{ span:12, offset: 7}}>
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${parseInt(post.user)}`}>
            <img
              src={
                post.pic_url
                  ? post.pic_url
                  : `https://picsum.photos/400/400/?image=${Math.floor(
                      Math.random() * 85
                    )}`
              }
              alt="null"
              className="grid-photo"
            />
          </Link>

          <CSSTransition
            in={inProp}
            onEnter={() => setInProp(true)}
            onExit={() => setInProp(false)}
            classNames="like"
            timeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransition>
        </div>

        <figcaption>
          <p>{stringValue}</p>
          <div className="control-buttons">
            <button onClick={props.increment.bind(null, i)} className="likes">
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${parseInt(post.user)}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                <span className="speech-after"> </span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    </Col>
  );
}
