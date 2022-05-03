import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
   width: 100vw;
   background-color: var(--first-color);
`;

const NavBar = styled.nav`
   width: 100%;
   max-width: 1200px;
   color: var(--gray-light-color);
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 1.5rem;

   & a {
      display: inline-block;
      font-size: 1.25rem;
      font-weight: bold;
      padding: 0.5rem;
      color: var(--text-light-color);
      border-radius: 0.5rem;
      cursor: pointer;
      transition: ease all 0.3s;

      & a:hover {
         color: var(--gray-dark-color);
         background-color: var(--gray-light-color);
      }
   }
`;

class Nav extends Component {
   render() {
      return (
         <NavBarContainer>
            <NavBar>
               <div className="logo">
                  <Link to="./">Inicio</Link>
               </div>
               <div className="nav-links">
                  <Link to="./home">Buscar Paises</Link>
                  <Link to="./activity">Crear Actividad</Link>
               </div>
            </NavBar>
         </NavBarContainer>
      );
   }
}

export default Nav;
