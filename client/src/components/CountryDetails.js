import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setLoadStatus } from "../actions";
import ActivityCard from "./ActivityCard";
import loading from "../assest/loader.svg";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadStatus(true));
    fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(setLoadStatus(false));
        return setDetails(json);
      });
  }, [id]);

  //console.log(details);
  return (
    <div className="countryDetails">
      {isLoading && (
        <div className="preloader">
          {" "}
          <img src={loading} alt="cargando..." />
        </div>
      )}
      <div>
        <p>
          <strong>Identificador de pais: </strong> {details.ID}
        </p>
        <p>
          <strong>Nombre: </strong> {details.name}
        </p>
        <p>
          <strong>Subregion: </strong> {details.subregion}
        </p>
        <p>
          <strong>Capita: </strong> {details.capital}
        </p>
        <p>
          <strong>Continente: </strong> {details.continent}
        </p>
        <p>
          <strong>Area: </strong> {details.area + " km2"}
        </p>
        <p>
          <strong>Poblacion: </strong> {details.population}
        </p>
        <img src={details.flagImg} alt={details.name} />
      </div>
      <div className="activitiesCard">
        {details.activities &&
          details.activities.map((activities) => {
            return (
              <div key={details.ID}>
                <ActivityCard
                  name={activities.name}
                  difficulty={activities.difficulty}
                  season={activities.season}
                  duration={activities.duration}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CountryDetails;
