import React from "react";
import './CardRepo.css'

const cardRepoContainer = (props) => {
    return(
        <div className="card-item">
            {props.children}
        </div>
    );
}

export default cardRepoContainer;