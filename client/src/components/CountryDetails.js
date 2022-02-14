import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setLoadStatus } from "../actions";
import styled from "styled-components";
import ActivityCard from "./ActivityCard";
import loading from "../assest/loader.svg";
import "./CountryDetails.css";

const Details = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: ${({ activities }) =>
    activities ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;

  &.activitiesCard {
    display: flex;
    justify-content: space-between;
  }
`;

const DetailsP = styled.p`
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
`;

const DetailsImg = styled.img`
  width: 100%;
  max-width: 350px;
  margin-top: 1rem;
`;

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
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(details);
  return (
    <div className="countryDetails">
      {isLoading && (
        <div className="preloader">
          {" "}
          <img src={loading} alt="cargando..." />
        </div>
      )}
      <h2>{`Detalles del pais ${details.name}`}</h2>
      <Details
        activities={details.activities && !details.activities[0] ? false : true}
      >
        <div>
          <DetailsP>
            <strong>Identificador de pais: </strong> {details.ID}
          </DetailsP>
          <DetailsP>
            <strong>Nombre: </strong> {details.name}
          </DetailsP>
          <DetailsP>
            <strong>Subregion: </strong> {details.subregion}
          </DetailsP>
          <DetailsP>
            <strong>Capita: </strong> {details.capital}
          </DetailsP>
          <DetailsP>
            <strong>Continente: </strong> {details.continent}
          </DetailsP>
          <DetailsP>
            <strong>Area: </strong> {details.area + " km2"}
          </DetailsP>
          <DetailsP>
            <strong>Poblacion: </strong> {details.population}
          </DetailsP>
          <DetailsImg src={details.flagImg} alt={details.name} />
        </div>
        <div className="activitiesCard">
          {details.activities &&
            details.activities.map((activities) => {
              return (
                <ActivityCard
                  key={details.ID}
                  name={activities.name}
                  difficulty={activities.difficulty}
                  season={activities.season}
                  duration={activities.duration}
                />
              );
            })}
        </div>
      </Details>
    </div>
  );
};

export default CountryDetails;
