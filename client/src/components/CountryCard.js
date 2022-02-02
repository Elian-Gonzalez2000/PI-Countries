import React from "react";
import "./CountryCard.css";

const CountryCard = ({name, flagImg, continent})=>{
   return(
      <div className="countryCard margin-bottom">
         <h4>{name}</h4>
                  <img src={flagImg} alt={name} />
                  <p>{continent}</p>
      </div>
   )
};

export default CountryCard;