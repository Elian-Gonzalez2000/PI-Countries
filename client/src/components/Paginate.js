import React from 'react';
import "./Paginate.css";

export default function Paginado ({countriesPage, allCountries,paginado}) {
    const pageNumbers = [];

        for(let i=1; i<=Math.ceil(allCountries / countriesPage); i++){
            pageNumbers.push(i);
        }
    

    
    return(
        <div className='paginate'>
            <ul >
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number} > 
                            <a onClick={() => paginado(number)} >{number}</a>
                        </li>
                    ))
                }     
              
            </ul>

        </div>
    )
}