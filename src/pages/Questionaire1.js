import React, { useState, useEffect } from "react";

// React Bootstrap Related Components
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { gethalls } from "../actions/formpage";

//Import sass
import "../sass/pages/_Questionaire1.scss";
export function Questionaire1(props) {
  // Set All States
  const [halls, setHalls] = useState([]);
  const storeHalls = useSelector((state) => state.formpage);
  console.log("Checking halls state");
  console.log(storeHalls);

  // Set Dispatch
  const dispatch = useDispatch();

  // Similar to componentDidMount()
  useEffect(() => {
    // Load Halls From API
    dispatch(gethalls());

    if (storeHalls !== null) {
      // ERROR HANDLING: If API Doesn't Load Any Hall
      // Initialize halls state
      var n = 15;
      // begins from 0; since there isn't a hall 0, we add 1 to it
      var numericalHalls = [];
      for (var i = 0; i < n; i++) {
        numericalHalls.push((i + 1).toString());
      }
      var namedHalls = [
        "Binjai",
        "Tanjong",
        "Tamarind",
        "Crescent",
        "Banyan",
        "Saraca",
      ];
      setHalls((prevArray) => [...prevArray, ...numericalHalls, ...namedHalls]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // All Functions

  // Decompose
  const { nextQuestionHandler } = props;

  return (
    <div className="questionaire1overall">
      <span style={{ marginTop: "20px" }}> Which hall do you stay in?</span>
      <DropdownButton
        as={ButtonGroup}
        size="lg"
        variant="secondary"
        title="Select Hall"
        style={{ marginTop: "40px" }}
      >
        {halls.map((value, i) => (
          <Dropdown.Item eventKey={`${i}`} key={i}>{`${value}`}</Dropdown.Item>
        ))}
      </DropdownButton>
      <div className="HallSelection"></div>
      <Button style={{ marginTop: "20%" }} onClick={nextQuestionHandler}>
        Click to qn2
      </Button>
    </div>
  );
}

// LEGACY: (FOR REFERENCE)

// constructor() {
//     super();
//     this.state = {
//         halls: []

//     }
// }

//   componentDidMount() {
//       // Initialize halls state
//       var n = 15;
//       // begins from 0; since there isn't a hall 0, we add 1 to it
//       var numericalHalls = []
//       for (var i = 0 ; i < n; i ++) {
//           numericalHalls.push((i+1).toString())
//       }
//       var namedHalls = ["Binjai", "Tanjong", "Tamarind", "Crescent", "Banyan", "Saraca"]
//       this.setState({
//           halls: [...numericalHalls, ...namedHalls],
//       })
//   }
