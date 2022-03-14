import React from "react";
import { Button } from "react-bootstrap";

// Redux related
import { useDispatch } from "react-redux";
import { getallusers } from "../actions/profilepage";



export function Profilepage(props) {

    // set dispatch
    const dispatch = useDispatch();

    const handleHistory = async () => {
        console.log("This is working")
        await dispatch(getallusers());
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