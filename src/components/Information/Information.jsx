import React from "react";
import "./Information.css"

const Information = (props) => {
    return(
        <div className="information">
            <h1>{props.information}</h1>
        </div>
    );
}

export default Information;