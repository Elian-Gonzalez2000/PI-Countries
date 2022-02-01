import React, {useState, useEffect} from "react";

const CountryCard = ({name, flagImg, continent})=>{
   return(
      <div className="card">
         <h4>{name}</h4>
                  <img width={100} src={flagImg} alt={name} />
                  <p>{continent}</p>
      </div>
   )
};

export default CountryCard;