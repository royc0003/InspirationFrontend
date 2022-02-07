import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import CSS
import "../sass/pages/_Landingpage.scss";

export function Landingpage(props) {
  let navigate = useNavigate();
  return (
    <div className="overallLanding">
      <div className="overall">
        <div className="captiontitlefirst" xs={12} md={12} lg={12}>
          <h3>
            <span className="captionFirst" style={{ fontSize: "20px" }}>
              Boyfriends and Girlfriends Will Come And Go,
            </span>
          </h3>
        </div>
        <div className="captiontitlesecond" xs={12} md={12} lg={12}>
          <h1>
            <span
              className="captionSecond"
              style={{ fontSize: "40px", fontWeight: "bold" }}
            >
              But Friends Are For Life.
            </span>
          </h1>
        </div>
        <div className="landingpage-button-overall">
          {/* TODO: Check if logged in or not before going to match page e.g. <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />*/}
          {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial */}
          <Button
            className="landingpage-button"
            style={{
              backgroundColor: "#FF8F45",
              padding: "8px 10px",
              fontFamily: "Rubik",
              borderColor: "#FF8F45",
            }}
            onClick={() => {
              navigate("/photogrid");
            }}
          >
            FIND FRIENDS!
          </Button>
        </div>
      </div>
    </div>
  );
}
