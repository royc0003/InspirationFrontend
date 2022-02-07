import React from "react";
import { Button } from "react-bootstrap";


export default class Questionarie2 extends React.Component {
    // constructor() {
    //     super();
    // }


    render() {
        const {nextQuestionHandler} = this.props
        return(
            <div>
                This is questionarie 2
                <Button onClick={nextQuestionHandler}>
                    Click to qn3
                </Button>
            </div>
        )
    }
}