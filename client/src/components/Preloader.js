import React from 'react';
import loader from "../assest/loader.svg";

export default function Preloader () {
   console.log("loader")
   
    return(
        <div className='preloader'>
           <img src={loader} alt="loader"/>
        </div>
    )
}