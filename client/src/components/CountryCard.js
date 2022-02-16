import React from "react";
import styled from "styled-components";

const CountryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-light-color);
  color: var(--gray-dark-color);
  cursor: pointer;
  transition: ease transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  & h4 {
    text-align: center;
    text-transform: capitalize;
  }

  & p {
    text-align: center;
    text-transform: capitalize;
  }
`;

const CountryImg = styled.img`
  width: 100%;
`;

const CountryCard = ({ name, flagImg, continent }) => {
  return (
    <CountryCardContainer>
      <CountryImg src={flagImg} alt={name} />
      <h4>{name}</h4>
      <p>{continent}</p>
    </CountryCardContainer>
  );
};

export default CountryCard;
