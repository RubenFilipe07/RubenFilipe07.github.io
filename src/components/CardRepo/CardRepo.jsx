import React from "react";
import './CardRepo.css'

const cardRepoContainer = (props) => {
    return(
        <div className="card-item">
            <h1><a href={props.repoUrl}>{props.name}</a></h1>
            <p>{props.description}</p>
            <div className='aditional-info'>
                <span className='lang-info' id={props.language}>{props.language}</span>
                <span className='fork-info'>{props.itsForked ? 'Forked' : ''}</span>
            </div> 
        </div>
    );
}

export default cardRepoContainer;