import React, { useState, useEffect } from "react";
import { postActivities, getCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./FormActivities.css";

const initialState = {
   errors: {},
};

export function validate(input) {
   let errors = {};
   if (!input.name) {
      errors.name = "Nombre de actividad es requerido";
   } else if (!/^[a-z ,.'-]+$/i.test(input.name)) {
      errors.name = "Actividad invalida";
   }

   return errors;
}

export const FormActivity = () => {
   const dispatch = useDispatch();
   const [errors, setErrors] = useState(initialState.errors);
   const [input, setInput] = useState({
      countries: [],
      name: "",
      duracion: "",
      dificultad: "",
      temporada: "",
   });
   const [flagsImg, setFlagsImg] = useState([]);
   const allcountries = useSelector((state) => state.allCountries);

   const handleChange = (e) => {
      setInput({
         ...input,
         [e.target.name]: e.target.value,
      });

      setErrors(
         validate({
            ...input,
            [e.target.name]: e.target.value,
         })
      );
   };

   const handleSelect = (e) => {
      let findCountry =
         allcountries && allcountries.filter((el) => el.ID === e.target.value);
      setFlagsImg([
         ...flagsImg,
         { flag: findCountry[0].flagImg, countryID: findCountry[0].ID },
      ]);
      console.log(findCountry);
      setInput({
         ...input,
         countries: [...input.countries, e.target.value],
      });
   };

   const handleCheck = (e) => {
      if (e.target.checked) {
         setInput({
            ...input,
            temporada: e.target.value,
         });
      }

      setErrors(
         validate({
            ...input,
            [e.target.name]: e.target.value,
         })
      );
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(input);
      dispatch(postActivities(input));
      alert("actividad creada");

      setInput({
         countries: [],
         name: "",
         duracion: "",
         dificultad: "",
         temporada: "",
      });
   };

   useEffect(() => {
      dispatch(getCountries());
   }, [dispatch]);

   //console.log(allcountries);

   return (
      <div className="formActivities container margin-auto">
         <div className="containerForm">
            <h2>Crea tu Actividad </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
               <div className="containerInputs">
                  <div className="activityName">
                     <label>Actividad:</label>
                     <input
                        className={
                           "inputActivity " + errors.name && "inputError"
                        }
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                     />
                     {errors.name && (
                        <p className="inputErrorMessage">{errors.name}</p>
                     )}
                  </div>

                  <div className="selectCountries">
                     <label>Pais:</label>
                     <select onChange={(e) => handleSelect(e)}>
                        {/*  <option value="0">Select Country</option> */}
                        {allcountries &&
                           allcountries.map((country, i) => {
                              return (
                                 <option
                                    value={country.ID}
                                    key={country.ID + "countryOption"}
                                 >
                                    {country.name}
                                 </option>
                              );
                           })}
                     </select>
                  </div>

                  <div className="duration">
                     <label>Duracion:</label>
                     <select
                        name="duracion"
                        value={input.duracion}
                        onChange={(e) => handleChange(e)}
                     >
                        <option value="0">Select Duration</option>
                        <option value="30">30 min</option>
                        <option value="1">1 hour</option>
                        <option value="2">2 hour</option>
                        <option value="3">3 hour</option>
                        <option value="4">4 hour</option>
                        <option value="5">more than 5 hours</option>
                     </select>
                  </div>
                  <div className="selectDifficulty">
                     <label>Dificultad:</label>
                     <select
                        name="dificultad"
                        value={input.dificultad}
                        onChange={(e) => handleChange(e)}
                     >
                        <option value="0">Select Difficult</option>
                        <option value="1">1- Beginner</option>
                        <option value="2">2- Low</option>
                        <option value="3">3- Medium</option>
                        <option value="4">4- High</option>
                        <option value="5">5- Professional</option>
                     </select>
                  </div>
               </div>
               <div className="selectSeason">
                  <label>Temporada: </label>
                  <label>
                     <input
                        type="radio"
                        value="Verano"
                        name="season"
                        onChange={(e) => handleCheck(e)}
                     />
                     Verano{" "}
                  </label>
                  <label>
                     <input
                        type="radio"
                        value="Primavera"
                        name="season"
                        onChange={(e) => handleCheck(e)}
                     />
                     Primavera{" "}
                  </label>
                  <label>
                     <input
                        type="radio"
                        value="Otoño"
                        name="season"
                        onChange={(e) => handleCheck(e)}
                     />
                     Otoño{" "}
                  </label>
                  <label>
                     <input
                        type="radio"
                        value="Invierno"
                        name="season"
                        onChange={(e) => handleCheck(e)}
                     />
                     Invierno{" "}
                  </label>
               </div>
               <div className="countriesSelected">
                  <ul>
                     {input.countries &&
                        flagsImg.map((el) => {
                           return (
                              <li key={el.countryID + "flagCountry"}>
                                 <img
                                    style={{ width: "32px" }}
                                    src={el.flag}
                                    alt="Flag"
                                 />
                              </li>
                           );
                        })}
                  </ul>
               </div>
               <button
                  className="btnSubmit"
                  type="submit"
                  disabled={errors.name && true}
               >
                  Create
               </button>
            </form>
         </div>
      </div>
   );
};
