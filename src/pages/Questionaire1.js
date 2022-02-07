import React from "react";
import { Button } from "react-bootstrap";


export default class Questionarie1 extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {nextQuestionHandler} = this.props
        return(
            <div>
                This is questionarie 1
                <Button onClick={nextQuestionHandler}>
                    Click to qn2
                </Button>
            </div>
        )
    }
}