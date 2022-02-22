import React from "react";
import styled from "styled-components";
import countriesImg from "../assest/countries-image.jpg";

const InitContainer = styled.div`
  position: relative;
  background-color: var(--background-light);
  background-image: url(${countriesImg});
  background-position: center;
  min-height: 100vh;
`;

const BackgroundOpacity = styled.aside`
  background-color: var(--black-alpha-color);
  color: var(--text-light-color);
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Init = () => {
  return (
    <InitContainer>
      <BackgroundOpacity>
        <h1>Proyecto Individual de HENRY</h1>
      </BackgroundOpacity>
    </InitContainer>
  );
};

export default Init;
