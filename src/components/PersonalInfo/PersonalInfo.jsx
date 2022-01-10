import React from "react";
import "./PersonalInfo.css"
import profile from '../../assets/perfil.jpeg'

const PersonalInfo = () => {
    return(
        <div className="personal-info">
           <img src={profile} alt="profile" className="profile"></img>
           <h1 className="name">Rúben Filipe</h1>
           <p className="description">Desenvolvedor Web</p>
        </div>
    );
}

export default PersonalInfo; 