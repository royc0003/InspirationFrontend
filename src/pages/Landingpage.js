import React from "react";
import {  Button } from "react-bootstrap";

// Import CSS
import "../sass/pages/_Landingpage.scss";

export function Landingpage(props) {
  return (
    <div className="overallLanding">
      <div className="overall">
        <div className="captiontitlefirst" xs={12} md={12} lg={12}>
          <h3>
            <span className="captionFirst" style={{fontSize: "20px"}}>
              Boyfriends and Girlfriends Will Come And Go,
            </span>
          </h3>
        </div>
        <div className="captiontitlesecond" xs={12} md={12} lg={12}>
          <h1>
            <span className="captionSecond" style={{fontSize: "40px", fontWeight: "bold"}}>But Friends Are For Life.</span>
          </h1>
        </div>
        <div className="landingpage-button-overall">
          <Button className="landingpage-button">Find Friends!</Button>
        </div>
      </div>
    </div>
  );
}
