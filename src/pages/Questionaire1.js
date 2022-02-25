import React, { useState, useEffect } from "react";

// React Bootstrap Related Components
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

// Import Redux Related Components/Library
import { useDispatch, useSelector } from "react-redux";
import { gethalls, selecthall } from "../actions/formpage";

//Import sass
import "../sass/pages/_Questionaire1.scss";
export function Questionaire1(props) {
  // Set All States
  const [halls, setHalls] = useState([]);
  // Redux-store storeHalls key -- when calling api
  const storeHalls = useSelector((state) => state.formpage.storeHalls);
  const userHall = useSelector(state => state.formpage.userHall);
  console.log("Checking halls state");
  console.log(storeHalls);

  // Set Dispatch
  const dispatch = useDispatch();

  // Similar to componentDidMount()
  useEffect(() => {
    // Load Halls From API
    dispatch(gethalls());

    if (storeHalls === null) {
      // ERROR HANDLING: If API Doesn't Load Any Hall
      //   // Initialize halls state
      //   var n = 15;
      //   // begins from 0; since there isn't a hall 0, we add 1 to it
      //   var numericalHalls = [];
      //   for (var i = 0; i < n; i++) {
      //     numericalHalls.push((i + 1).toString());
      //   }
      var namedHalls = [
        {
          id: 16,
          created_on: "2022-02-07",
          name: "Hall 1",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 17,
          created_on: "2022-02-07",
          name: "Hall 2",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 18,
          created_on: "2022-02-07",
          name: "Hall 3",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 19,
          created_on: "2022-02-07",
          name: "Hall 4",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 20,
          created_on: "2022-02-07",
          name: "Hall 5",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 21,
          created_on: "2022-02-07",
          name: "Hall 6",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 22,
          created_on: "2022-02-07",
          name: "Hall 7",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 23,
          created_on: "2022-02-07",
          name: "Hall 8",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 24,
          created_on: "2022-02-07",
          name: "Hall 9",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 25,
          created_on: "2022-02-07",
          name: "Hall 10",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 26,
          created_on: "2022-02-07",
          name: "Hall 11",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 27,
          created_on: "2022-02-07",
          name: "Hall 12",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 28,
          created_on: "2022-02-07",
          name: "Hall 13",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 29,
          created_on: "2022-02-07",
          name: "Hall 14",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 30,
          created_on: "2022-02-07",
          name: "Hall 15",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 31,
          created_on: "2022-02-07",
          name: "Tanjong Hall",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 32,
          created_on: "2022-02-07",
          name: "Binjai Hall",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 33,
          created_on: "2022-02-07",
          name: "Saraca Hall",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 34,
          created_on: "2022-02-07",
          name: "Banyan Hall",
          pic_url: null,
          polymorphic_ctype: 2,
        },
        {
          id: 35,
          created_on: "2022-02-07",
          name: "Hall 25",
          pic_url: null,
          polymorphic_ctype: 2,
        },
      ];
      setHalls((prevArray) => [...prevArray, ...namedHalls]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // All Functions

  // Destructuring
  const { nextQuestionHandler } = props;

  const handleSelect = (evt) => {
    var _selectedID = parseInt(evt);
    // filter array of objects
    var tmpArray = [...halls];
    if (storeHalls) {
      // change to api's storedHalls if data is present
      tmpArray = [...storeHalls];
    }
    var _selectedHall = tmpArray.filter(
      (_singleHall) => parseInt(_singleHall.id) === _selectedID
    );
    // Save selected hall in store
    console.log("Dispatched to userHall: " + _selectedHall[0].name);
    dispatch(selecthall(_selectedHall[0].name));
  };


  return (
    <div className="questionaire1overall">
      <span style={{ marginTop: "20px" }}> Which hall do you stay in?</span>
      <DropdownButton
        onSelect={handleSelect}
        as={ButtonGroup}
        size="lg"
        variant="secondary"
        title="Select Hall"
        style={{ marginTop: "40px" }}
      >
        { // Error Handling: In case API Fails
        storeHalls === null
          ? halls.map((value, i) => (
              <Dropdown.Item
                eventKey={`${value.id}`}
                key={i}
              >{`${value.name}`}</Dropdown.Item>
            ))
          : storeHalls.map((value, i) => (
              <Dropdown.Item
                eventKey={`${value.id}`}
                key={i}
              >{`${value.name}`}</Dropdown.Item>
            ))}
      </DropdownButton>
      <div className="HallSelection"></div>
      <Button style={{ marginTop: "20%" }} disabled={userHall === null ? true : false} onClick={nextQuestionHandler}>
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
