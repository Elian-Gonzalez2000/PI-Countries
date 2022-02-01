import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useParams } from 'react-router-dom'
import { getCountryDetails } from "../actions";
import ActivityCard from "./ActivityCard";

const CountryDetails = ()=>{
   const dispatch = useDispatch();
   const {id} = useParams();
   useEffect(()=>{
      dispatch(getCountryDetails(id));
   },[])
   const details = useSelector(state => state.countryDetails)
   console.log(details);
   return(
      <div>
         <Link to={"/home"}>
            Home
         </Link>
         <div>
            <p>{details.ID}</p>
            <p>{details.name}</p>
            <p>{details.subregion}</p>
            <p>{details.capital}</p>
            <p>{details.continent}</p>
            <p>{details.area}</p>
            <p>{details.population}</p>
            <img src={details.flagImg} alt={details.name} />
         </div>
         {details.activities && details.activities.map((activities)=>{
            return (<div key={details.ID}>
            <ActivityCard name={activities.name}
            difficulty={activities.difficulty}
            season={activities.season}
            duration={activities.duration} />
            </div>);
         })
         
         }
      </div>
   )
};

export default CountryDetails;