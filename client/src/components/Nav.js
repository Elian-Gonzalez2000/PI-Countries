import React from "react";
import { Link } from "react-router-dom";

const Nav = ()=>{
  
   return (<div>
      <div>
         <span>Logo</span>
      </div>
      <nav>
         <Link to="/home" >Home</Link>
         <Link to="/activity" >Crear Actividad</Link>
      </nav>
   </div>);
}

export default Nav;