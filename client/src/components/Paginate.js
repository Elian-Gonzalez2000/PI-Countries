import React from "react";
import styled from "styled-components";

const PaginateUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  & li {
    display: inline-block;
    margin: 0 0.5rem;
  }
`;

const PaginateLink = styled.span`
  color: var(--gray-dark-color);
  transition: ease all 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--link-color);
  }
`;

export default function Paginado({ countriesPage, allCountries, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginate">
      <PaginateUl>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <PaginateLink onClick={() => paginado(number)}>
                {number}
              </PaginateLink>
            </li>
          ))}
      </PaginateUl>
    </div>
  );
}
