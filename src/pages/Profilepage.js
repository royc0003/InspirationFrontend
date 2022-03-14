import React from "react";
import { Button } from "react-bootstrap";

// Redux related
import { useDispatch } from "react-redux";
import { getallusers, getmatchedhistory, getuserinfo, flattenmatchedusers, getinterests, flattenuserinterests } from "../actions/profilepage";



export function Profilepage(props) {

    // set dispatch
    const dispatch = useDispatch();

    const handleHistory = async () => {
        console.log("This is working")
        await dispatch(getallusers());
        await dispatch(getmatchedhistory());
        await dispatch(getinterests());
        await dispatch(getuserinfo());
        await dispatch(flattenmatchedusers());
        await dispatch(flattenuserinterests());
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