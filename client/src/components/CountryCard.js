import React from "react";
import styled from "styled-components";

const CountryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: var(--first-color);
  color: var(--text-light-color);
  cursor: pointer;
  padding: 1rem;
  transition: ease transform 0.5s;

  &:hover {
    transform: scale(1.08);
  }

  & h4 {
    text-align: center;
    text-transform: capitalize;
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  & p {
    text-align: center;
    text-transform: capitalize;
    font-size: 1.2rem;
  }
`;

const CountryImg = styled.img`
  && {
    width: 120px;
    height: 80px;
  }
`;

const CountryCard = ({ name, flagImg, continent }) => {
  return (
    <CountryCardContainer>
      <CountryImg className="countryImg" src={flagImg} alt={name} />
      <h4>{name}</h4>
      <p>{continent}</p>
    </CountryCardContainer>
  );
};

export default CountryCard;
