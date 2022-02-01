import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterByActivity, filterByContinent, getActivities, getCountries, getCountriesByName, orderByPoblation, orderName} from "../actions/index";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import Paginado from "./Paginate";

const initialState = {
   input:{
		countriesName: "",
	}, 
   errors: {},
};

export function validate(input) {
  let errors = {};
  if (!input.countriesName) {
    errors.countriesName = 'Country is required';
  } else if (!/\S+@\S+\.\S+/.test(input.countriesName)) {
    errors.countriesName = 'Country is invalid';
  }

  return errors;
};

const Home = ()=>{
   const [input, setInput] = useState({
		countriesName: "",
	});

	const [errors, setErrors] = useState(initialState.errors);
   const allCountries = useSelector((state)=>state.allCountries);
   const countries = useSelector((state)=>state.countries);
   const allActivities = useSelector((state) => state.activities)
   const dispatch = useDispatch();

   const [currentPage, setCurrentPage] = useState(1)
    // Cantidad de paises por pagina
    const [countriesPage, setCountriesPage] = useState(9)

    const [order, setOrder] = useState('');
    //Posicion del ultimo pais
    const LastCountry = currentPage * countriesPage
    //Posicion del primer pais
    const FirstCountry = LastCountry - countriesPage
    // Se divide el array de acuerdo a la cantidad de paises necesarios (9)
    const currentCountries = countries.slice(FirstCountry, LastCountry)

    const paginado = (totalPages)=>{
        setCurrentPage(totalPages);
    }

    const changeOrder = (e) => {
        e.preventDefault()
        setOrder(e.target.value)
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    const handleFilterPoblation = (e)=>{
      e.preventDefault();
      dispatch(orderByPoblation(e.target.value));
      setCurrentPage(1);
      setOrder(`Ordenado ${e.target.value}`)
  }

    function handleFilterContinent(e){
        e.preventDefault();
        dispatch(filterByContinent(e.target.value));
        setCurrentPage(1);
    }

    function handleFilterActivity(e){
        dispatch(filterByActivity(e.target.value))
        //console.log(e.target.value)
    }

   useEffect(()=>{
      dispatch(getCountries());
      dispatch(getActivities());
   },[]);
   useEffect(()=>{
         dispatch(getCountriesByName(input.countriesName));
   },[input.countriesName]);
   

   const handleInputChange = (e)=>{
      setInput({
         ...input,
         [e.target.name]: e.target.value,
      });
      //console.log(input);

      setErrors(validate({
         ...input,
         [e.target.name]: e.target.value,
      }));
   };
   //console.log("12" ,countries );
   return (<div>
      <input type="text" name="countriesName" value={input.countriesName} onChange={handleInputChange} />
      <div>
            <select className="select" onChange={e=> handleFilterPoblation(e)}>
          <option className='option' value='0'>Ordenar por poblacion</option> 
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
            <select onChange={event => handleSort(event)} >
                <option>Ordenar por nombre</option> 
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            <select onChange={event => handleFilterContinent(event)} >
                <option value="All">Todos</option>
                <option value="Africa">Africa</option>
                <option value="North America">America del Norte</option>
                <option value="South America">America del Sur</option>
                <option value="Antarctica">Antartica</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
            </select>
            <select onChange={event => handleFilterActivity(event)} >
                <option value="All">Todas</option>
                { allActivities && allActivities.map(activity => (
                    <option value={activity.name}>{activity.name}</option>
                ))}
            </select>
            </div>
      <h1>Home</h1>
      <Paginado 
                countriesPage={countriesPage}
                allCountries={allCountries.length}
                paginado={paginado}
            />
      {
            currentCountries && currentCountries.map((country)=>{
                  return (
                     <Link key={country.ID} to={`/home/${country.ID}`}>
                        <CountryCard key={country.ID} name={country.name} flagImg={country.flagImg} continent={country.continent} />
                     </Link>
                  );
            })
      }
   </div>);
}

export default Home;