import React from "react";

// Import Pages
import Questionaire1 from "./Questionaire1";
import Questionaire2 from "./Questionaire2";

export default class Formpage extends React.Component {
  constructor() {
    super();
    this.state = {
      qnNo: 1,
      selectedInterests: new Map(),
      listOfInterests: [],
      answers: [],
    };
  }

  nextQuestionHandler = () => {
    console.log("Updating qn no:");
    window.scrollTo(0, 0);
    this.setState((prevState) => {
      return {
        qnNo: prevState.qnNo + 1,
      };
    });
  };

  render() {
    // if end of questions and
    

    const { qnNo } = this.state;

    // Proper nesting of ternary operators
    // https://stackoverflow.com/questions/37312122/how-to-do-a-nested-if-else-statement-in-reactjs-jsx
    return (
      <div className="formpageoverall">
          {
              qnNo === 1 ? <Questionaire1 nextQuestionHandler={this.nextQuestionHandler} />
              : [
                  qnNo === 2 ? <Questionaire2 nextQuestionHandler={this.nextQuestionHandler} />
                  :
                  <div> hello </div>
              ]
          }
      </div>
    );
  }
}
