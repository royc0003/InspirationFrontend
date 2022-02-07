import React from "react";
import { Button, ButtonGroup, DropdownButton, Dropdown} from "react-bootstrap";


export default class Questionarie1 extends React.Component {
    constructor() {
        super();
        this.state = {
            halls: [1]

        }
    }

    componentDidMount() {
        // Initialize halls state
        var n = 15;
        // begins from 0; since there isn't a hall 0, we add 1 to it
        var numericalHalls = []
        for (var i = 0 ; i < n; i ++) {
            numericalHalls.push((i+1).toString())
        }
        var namedHalls = ["Binjai", "Tanjong", "Tamarind", "Crescent", "Banyan", "Saraca"]
        this.setState({
            halls: [...numericalHalls, ...namedHalls],
        })
    }

    render() {
        const {nextQuestionHandler } = this.props
        const { halls } = this.state
        return(
            <div className="questionaire1overall">
                <span> Which hall do you stay in?</span>
                <DropdownButton
                as={ButtonGroup}
                size="lg"
                variant="primary"
                title="Select Hall">
                    {
                        halls.map((value, i) => <Dropdown.Item eventKey={`${i}`} key={i}>{`${value}`}</Dropdown.Item>)
                    }
                    
                </DropdownButton>
                <Button onClick={nextQuestionHandler}>
                    Click to qn2
                </Button>
            </div>
        )
    }
}