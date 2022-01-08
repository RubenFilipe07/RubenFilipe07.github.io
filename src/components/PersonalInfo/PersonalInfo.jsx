import React from "react";
import "./PersonalInfo.css"
import perfil from '../../assets/perfil.jpeg'

const PersonalInfo = () => {
    return(
        <div className="personal-info">
           <img src={perfil} alt="perfil" className="avatar"></img>
           <h1 className="nome">Rúben Filipe</h1>
           <p className="description">Desenvolvedor Web</p>
        </div>
    );
}

export default PersonalInfo; 