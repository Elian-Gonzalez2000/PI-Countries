import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   filterByActivity,
   filterByContinent,
   getActivities,
   getCountries,
   getCountriesByName,
   orderByPoblation,
   orderName,
} from "../actions/index";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import Paginado from "./Paginate";
import "./Home.css";
import loading from "../assest/loader.svg";

const initialState = {
   input: {
      countriesName: "",
   },
   errors: {},
};

export function validate(input) {
   let errors = {};
   if (!/^[a-z ,.'-]+$/i.test(input.countriesName) && input.countriesName) {
      errors.countriesName = "Pais invalido";
   }

   return errors;
}

const Home = () => {
   const [input, setInput] = useState({
      countriesName: "",
   });

   const [errors, setErrors] = useState(initialState.errors);
   //const allCountries = useSelector((state)=>state.allCountries);
   const countries = useSelector((state) => state.countries);
   const allActivities = useSelector((state) => state.activities);
   const isLoading = useSelector((state) => state.isLoading);
   const dispatch = useDispatch();

   const [currentPage, setCurrentPage] = useState(1);

   const [countriesPage, setCountriesPage] = useState(9);

   const [order, setOrder] = useState({ filter: "", order: "" });
   //Posicion del ultimo pais
   const LastCountry = currentPage * countriesPage;
   //Posicion del primer pais
   const FirstCountry = LastCountry - countriesPage;
   // Se divide el array de acuerdo a la cantidad de paises necesarios (9)
   const currentCountries = countries.slice(FirstCountry, LastCountry);

   const filterPoblation = useRef(null);
   const filterSort = useRef(null);

   const paginado = (totalPages) => {
      setCurrentPage(totalPages);
   };

   function handleSort(e) {
      e.preventDefault();
      dispatch(orderName(e.target.value));
      setCurrentPage(1);
      if (
         order.filter === "poblation" &&
         filterPoblation.current.selectedOptions[0].value
      ) {
         filterPoblation.current.selectedOptions[0].selected = false;
         filterPoblation.current.firstElementChild.selected = true;
         console.log("sort");
      }
      setOrder({ filter: `sort`, order: e.target.value });
   }

   const handleFilterPoblation = (e) => {
      dispatch(orderByPoblation(e.target.value));
      setCurrentPage(1);
      if (
         order.filter === "sort" &&
         filterSort.current.selectedOptions[0].value
      ) {
         filterSort.current.selectedOptions[0].selected = false;
         filterSort.current.firstElementChild.selected = true;
      }
      console.log(e.target);
      setOrder({ filter: `poblation`, order: e.target.value });
   };

   function handleFilterContinent(e) {
      e.preventDefault();
      dispatch(filterByContinent(e.target.value));
      setCurrentPage(1);
      filterSort.current.firstElementChild.selected = true;
      filterPoblation.current.firstElementChild.selected = true;
   }

   function handleFilterActivity(e) {
      dispatch(filterByActivity(e.target.value));
      filterSort.current.firstElementChild.selected = true;
      filterPoblation.current.firstElementChild.selected = true;
      //console.log(e.target.value)
   }

   useEffect(() => {
      dispatch(getCountries());
      dispatch(getActivities());
   }, [dispatch]);

   useEffect(() => {
      if (!errors.countriesName) {
         dispatch(getCountriesByName(input.countriesName));
      }
   }, [input.countriesName]);

   const handleInputChange = (e) => {
      setInput({
         ...input,
         [e.target.name]: e.target.value,
      });
      //console.log(input);

      setErrors(
         validate({
            ...input,
            [e.target.name]: e.target.value,
         })
      );
   };
   //console.log("12", countries);
   return (
      <div className="home container" style={{ minHeight: "100vh" }}>
         {isLoading && (
            <div className="preloader">
               <img src={loading} alt="cargando..." />
            </div>
         )}
         <h2 className="margin-top text-center">Consulte el Pais que Desee</h2>

         <input
            type="text"
            name="countriesName"
            value={input.countriesName}
            onChange={handleInputChange}
            className={errors.name && "inputError"}
         />
         {errors.countriesName && (
            <p className="inputErrorMessage">{errors.countriesName}</p>
         )}
         <div className="filterInputs">
            <select
               ref={filterPoblation}
               onChange={(e) => handleFilterPoblation(e)}
            >
               <option className="option" value="0">
                  Ordenar por poblacion
               </option>
               <option value="asc">Ascendente</option>
               <option value="desc">Descendente</option>
            </select>
            <select ref={filterSort} onChange={(event) => handleSort(event)}>
               <option>Ordenar por nombre</option>
               <option value="asc">Ascendente</option>
               <option value="desc">Descendente</option>
            </select>
            <select onChange={(event) => handleFilterContinent(event)}>
               <option value="All">Todos</option>
               <option value="Africa">Africa</option>
               <option value="North America">America del Norte</option>
               <option value="South America">America del Sur</option>
               <option value="Antarctica">Antartica</option>
               <option value="Asia">Asia</option>
               <option value="Europe">Europa</option>
               <option value="Oceania">Oceania</option>
            </select>
            <select onChange={(event) => handleFilterActivity(event)}>
               <option value="All">Todas</option>
               {allActivities &&
                  allActivities.map((activity, i) => (
                     <option key={i} value={activity.name}>
                        {activity.name}
                     </option>
                  ))}
            </select>
         </div>
         <div className="pagination margin-top margin-bottom magin-auto">
            <Paginado
               countriesPage={countriesPage}
               allCountries={countries.length}
               paginado={paginado}
               currentPage={currentPage}
            />
         </div>
         <div className="cardsCountries">
            {currentCountries &&
            !errors.countriesName &&
            typeof currentCountries != "string" ? (
               currentCountries.map((country) => {
                  return (
                     <Link key={country.ID} to={`/home/${country.ID}`}>
                        <CountryCard
                           key={country.ID}
                           name={country.name}
                           flagImg={country.flagImg}
                           continent={country.continent}
                        />
                     </Link>
                  );
               })
            ) : typeof currentCountries == "string" ? (
               <strong style={{ margin: "auto" }}>{"Sin Coincidencias"}</strong>
            ) : null}
         </div>
      </div>
   );
};

export default Home;
