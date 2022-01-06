import React from "react";
import './GridRepo.css'

const cardRepoContainer = (props) => {
    return(
        <div className="grid-repo">
            {props.children}
        </div>
    );
}

export default cardRepoContainer;