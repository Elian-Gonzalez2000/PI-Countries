import React from "react";
import styled from "styled-components";

const PaginateUl = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;

   & li {
      display: inline-block;
      margin: 0 0.25rem 0.5rem 0.25rem;
      padding: 0 0.25rem 0 0.25rem;
      color: var(--gray-dark-color);
      cursor: pointer;
   }

   & .active {
      border: 1px solid var(--link-color);
      border-radius: 2px;
      color: var(--link-color);
   }
`;

const PaginateLink = styled.span`
   transition: ease all 0.3s;
   cursor: pointer;

   &:hover {
      color: var(--link-color);
   }
`;

export default function Paginado({
   countriesPage,
   allCountries,
   paginado,
   currentPage,
}) {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(allCountries / countriesPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <div className="paginate">
         <PaginateUl>
            {pageNumbers &&
               pageNumbers.map((number) => (
                  <li
                     key={number}
                     className={number === currentPage ? "active" : undefined}
                  >
                     <PaginateLink onClick={() => paginado(number)}>
                        {number}
                     </PaginateLink>
                  </li>
               ))}
         </PaginateUl>
      </div>
   );
}
