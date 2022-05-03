import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import worldBannerBlue from "../assest/world-banner-blue3.jpg";
import findMapBanner from "../assest/find-map-banner.jpg";

const InitContainer = styled.section`
   display: flex;
   flex-direction: column;
`;

const BackgroundImage = styled.div`
   position: relative;
   background-color: var(--background-light);
   background-image: url(${(props) => props.image});
   background-position: center;
   background-size: cover;
   min-height: 100vh;
   margin-bottom: 2rem;
`;

const BackgroundOpacity = styled.aside`
   background-color: ${(props) =>
      props.opacityColor || "var(--black-alpha-color)"};
   color: var(--text-light-color);
   min-height: 100vh;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const ContainerContent = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 95%;
   max-width: var(--max-width);
   min-height: 100vh;
   background-color: ${(props) => props.backgroundColor || "inherit"};
   margin: 0 auto 2rem auto;

   .content-image {
   }
   .content-info {
      h3 {
         font-size: 1.25rem;
         color: var(--first-color);
      }

      p {
         letter-spacing: 1px;
         line-height: 2rem;
      }
   }
`;

const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(${(props) => props.gridColumns}, 1fr);
   justify-content: space-between;
   align-content: center;
   gap: 3rem;

   h2 {
      grid-column: span ${(props) => props.gridColumns};
   }
`;
const Button = styled.button`
   display: inline-block;
   font-size: 1.2rem;
   padding: 0.75rem 1.5rem;
   margin-top: 2.5rem;
   color: var(--text-light-color);
   background-color: var(--first-color);
   border: 1px solid var(--first-color);
   border-radius: 5px;
   text-align: center;
   cursor: pointer;
   outline: none;
   transition: 0.3s ease-in-out all;

   &:hover {
      color: var(--first-color);
      background-color: var(--white-color);
   }
`;

const Init = () => {
   return (
      <InitContainer>
         <BackgroundImage image={worldBannerBlue}>
            <BackgroundOpacity>
               <h1>Bienvenid@ a InfoCountries</h1>
               <Link to={"./home"}>
                  <Button>Comenzar ya</Button>
               </Link>
            </BackgroundOpacity>
         </BackgroundImage>
         <ContainerContent>
            <Grid gridColumns="2">
               <h2 className="text-center margin-top margin-bottom">
                  ¿Que puedo hacer en esta aplicación?
               </h2>
               <div className="content-image">
                  <img src={findMapBanner} alt="Find Map Banner" />
               </div>
               <div className="content-info">
                  <h3>Buscar paises</h3>
                  <p>
                     Busca el pais que quieras entre un numero de mas de 200
                     paises ofrecidos por la API de restcountries, seras capaz
                     de encontrarlo mediante el nombre e iniciales del mismo,
                     incluso puedes filtrar los paises utilizando las opciones
                     que ofrece esta aplicacion para facilitar el procesos de
                     busqueda, entre estas opciones estan el filtrado por
                     continente, orden alfabetico o poblacion.
                  </p>
                  <Link
                     href="https://restcountries.com"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <Button>Restcountries</Button>
                  </Link>
               </div>
            </Grid>
         </ContainerContent>
         {/* <BackgroundImage image={findMapBanner}>
            <BackgroundOpacity opacityColor="rgba(0, 0, 0, 0.85)">
               <Grid gridColumn="2">
                  <h1>Bienvenid@ a InfoCountries</h1>
                  <Button>Comenzar ya</Button>
               </Grid>
            </BackgroundOpacity>
         </BackgroundImage> */}
      </InitContainer>
   );
};

export default Init;
