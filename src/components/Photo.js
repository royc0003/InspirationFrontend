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
  const [stringValue, setValue] = useState([]);
  const {
    post,
    comments,
    i,
    xl,
    lg,
    xxl,
    sm,
    md,
    xs_span,
    sm_span,
    md_span,
    xl_span,
    xxl_span,
  } = props;
  // xs_span={12} sm_span={10} md_span={9} xl_span={12} xxl_span={12}
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
    // if (_tmp.length >= 1) {
    //   setValue("#" + _tmp.join(" #").trim());
    // } else {
    //   setValue("No Interest Stated");
    // }
    if (_tmp) {
      setValue((oldArray) => [...oldArray, _tmp]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderComment = (singleComment, i) => {
    return (
      <span key={i} className="photo-caption pink-highlight">
        #{singleComment}
      </span>
    );
  };

  return (
    <Col
      className="overal-container"
      xs={xs_span}
      sm={{ span: sm_span, offset: sm }}
      md={{ span: md_span, offset: md }}
      lg={lg}
      xl={{ span: xl_span, offset: xl }}
      xxl={{ span: xxl_span, offset: xxl }}
    >
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
            <div>
              <span key={post.likes} className="likes-heart">
                {post.likes}
              </span>
            </div>
          </CSSTransition>
        </div>

        <figcaption>
          {stringValue[0]
            ? stringValue[0].map((v, i) => renderComment(v, i))
            : ""}

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
