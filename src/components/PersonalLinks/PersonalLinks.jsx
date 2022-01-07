import React from "react";
import "./PersonalLinks.css"
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import portfolio from '../../assets/portfolio.svg'
import lattes from '../../assets/lattes.svg'
import cv from '../../assets/cv.svg'


const PersonalLinks = () => {
    return(
        <div className="personal-links">
                <a href="https://www.linkedin.com/in/rubenfilipe07/" aria-label="linkedin" rel="noreferrer" target="_blank"><img src={linkedin} alt='linkedin' width="30"></img></a>
                <a href="https://github.com/RubenFilipe07" aria-label="github" rel="noreferrer" target="_blank"><img src={github} alt='github' width="30"></img></a>
                <a href="https://rubenfilipe07.me" aria-label="portfolio" rel="noreferrer" target="_blank"><img src={portfolio} alt='portfolio' width="30"></img></a> 
                <a href="http://lattes.cnpq.br/6391662114404047" aria-label="portfolio" rel="noreferrer" target="_blank"><img src={lattes} alt='portfolio' width="30"></img></a> 
                <a href="https://rubenfilipe07.me/curriculo" aria-label="portfolio" rel="noreferrer" target="_blank"><img src={cv} alt='portfolio' width="30"></img></a>         
        </div>
    );
}

export default PersonalLinks;