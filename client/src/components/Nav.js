import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {

   render() {
      return (
         <nav className='nav-bar'>
            <div className='logo'>
               <Link to="/" >Inicio</Link>
            </div>
            <div className='nav-links'>
               <Link to="/home" >Home</Link>
               <Link to="/activity" >Crear Actividad</Link>
            </div>
         </nav>
      );
   };
};

export default Nav;
