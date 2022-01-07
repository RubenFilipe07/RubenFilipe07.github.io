import React from "react";
import "./Information.css"

const Information = (props) => {
    return(
        <div className="information">
            <h4>{props.information}</h4>
        </div>
    );
}

export default Information;