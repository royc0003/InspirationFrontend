import React, { useState } from "react";
// Import Pages
import { Questionaire1 } from "./Questionaire1";
import { Questionaire2 } from "./Questionaire2";
import { Questionaire3 } from "./Questionaire3";
import { Questionaire4 } from "./Questionaire4";


export function Formpage(props) {
  // Set All States
  const [qnNo, setQnNo] = useState(2); // sets qnNo = 0

  // All Functions
  const nextQuestionHandler = () => {
    // setQnNo(prevState => ({...prevState, qnNo: prevState.qnNo + 1}));
    console.log("Updating qnNo");
    // Scrol Top
    window.scrollTo(0, 0);
    setQnNo(qnNo + 1);
  };

  return (
    <div className="formpageoverall">
      {qnNo === 1 ? (
        <Questionaire1 key={1} nextQuestionHandler={nextQuestionHandler} />
      ) : (
        [
          qnNo === 2 ? (
            <Questionaire2 key={2} nextQuestionHandler={nextQuestionHandler} />
          ) : qnNo === 3 ? (
            <Questionaire3 key={3} nextQuestionHandler={nextQuestionHandler} />
          ) : (
            <Questionaire4 key={4} />
          ),
        ]
      )}
    </div>
  );
}

// Legacy
// export default class Formpage extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       qnNo: 1,
//       selectedInterests: new Map(),
//       listOfInterests: [],
//       answers: [],
//     };
//   }

//   nextQuestionHandler = () => {
//     console.log("Updating qn no:");
//     window.scrollTo(0, 0);
//     this.setState((prevState) => {
//       return {
//         qnNo: prevState.qnNo + 1,
//       };
//     });
//   };

//   render() {
//     // if end of questions and

//     const { qnNo } = this.state;

//     // Proper nesting of ternary operators
//     // https://stackoverflow.com/questions/37312122/how-to-do-a-nested-if-else-statement-in-reactjs-jsx
//     return (
//       <div className="formpageoverall">
//         {qnNo === 1 ? (
//           <Questionaire1 nextQuestionHandler={this.nextQuestionHandler} />
//         ) : (
//           [
//             qnNo === 2 ? (
//               <Questionaire2 nextQuestionHandler={this.nextQuestionHandler} />
//             ) : (
//               <div> hello </div>
//             ),
//           ]
//         )}
//       </div>
//     );
//   }
// }
