import React from "react";
import { Button } from "react-bootstrap";


export function Profilepage(props) {
    const handleHistory = () => {
        console.log("This is working")
    }
    return (
        <div>
            This is profile page
            <Button onClick={handleHistory}>
                click here to render
            </Button>
        </div>
    )
}