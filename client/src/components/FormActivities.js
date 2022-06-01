import React, { useState, useEffect } from "react";
import { postActivities, getCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";

const ContainerForm = styled.div`
   margin-top: 2rem;
   min-height: 100vh;

   h2 {
      color: var(--first-color);
   }

   form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .btnSubmit {
         width: 30%;
         height: 100%;
         font-size: 1rem;
         padding: 0.5rem 1rem;
         margin-top: 2.5rem;
         color: var(--text-light-color);
         background-color: var(--first-color);
         border: 1px solid var(--first-color);
         border-radius: 5px;
         text-align: center;
         cursor: pointer;
         outline: none;
         transition: 0.3s ease-in-out all;

         &:hover {
            color: var(--first-color);
            background-color: var(--white-color);
         }
      }
   }

   label {
      display: block;
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
   }
`;

const ContainerInputs = styled.div`
   width: 47%;

   .activityName {
      width: 100%;
      margin-bottom: 1.5rem;
      text-align: left;

      input {
         width: 80%;
         margin-left: 0;
         margin-right: 0;
         box-shadow: 2px 1px 4px var(--black-alpha-color);
      }

      .inputError {
         border: solid 2px #df1313;
      }

      .inputErrorMessage {
         width: 80%;
      }
   }

   .duration,
   .selectDifficulty,
   .selectCountries {
      width: 100%;
   }
`;

const SelectSeason = styled.div`
   width: 47%;
   heigth: 100%;
   padding: 2rem 0 0 1rem;

   input {
      display: inline-block;
      margin-right: 1rem;
   }

   label {
      cursor: pointer;
   }
`;

const CountriesSelected = styled.div`
   width: 47%;
   order: 1;
   margin-top: -4rem;

   li {
      display: inline-block;
      width: 50px;
      margin: 0.5rem;
      cursor: pointer;
   }
`;

const initialState = {
   errors: {},
};

export function validate(input) {
   let errors = {};
   if (!input.name.trim()) {
      errors.name = "Nombre de actividad es requerido";
      errors.error = true;
   } else if (!/^[a-z ,.'-]+$/i.test(input.name.trim())) {
      errors.name = "Actividad invalida";
      errors.error = true;
   } else if (input.countries.length === 0) {
      errors.countries = "Debe escoger al menos un pais para la actividad";
   } else if (!errors.name && !errors.countries) {
      errors.error = false;
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
      if (!input.countries.includes(e.target.value)) {
         setFlagsImg([
            ...flagsImg,
            { flag: findCountry[0].flagImg, countryID: findCountry[0].ID },
         ]);
         //console.log(findCountry);

         setInput({
            ...input,
            countries: [...input.countries, e.target.value],
         });
      }
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

   const handleClickFlag = (flagID) => {
      let filterFlag =
         flagsImg && flagsImg.filter((el) => el.countryID !== flagID);

      setFlagsImg([...filterFlag]);

      let deletedCountry = input.countries.filter((el) => el !== flagID);
      console.log(flagID, filterFlag, deletedCountry);

      setInput({
         ...input,
         countries: [...deletedCountry],
      });
   };

   const handleSubmit = (e) => {
      setErrors(
         validate({
            ...input,
         })
      );
      e.preventDefault();
      //console.log(input);
      if (errors.error) {
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese los datos correctamente",
         });
      } else {
         Swal.fire({
            title: "¿Quieres guardar la actividad?",
            showCancelButton: true,
            confirmButtonText: "Save",
         }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
               dispatch(postActivities(input));
               setInput({
                  countries: [],
                  name: "",
                  duracion: "",
                  dificultad: "",
                  temporada: "",
               });
               setFlagsImg([]);
               Swal.fire("¡Actividad guardada!", "", "success");
            }
         });
      }
   };

   useEffect(() => {
      dispatch(getCountries());
   }, [dispatch]);

   //console.log(allcountries);

   return (
      <div className="formActivities container margin-auto">
         <ContainerForm>
            <h2>Crea tu Actividad </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
               <ContainerInputs>
                  <div className="activityName">
                     <label>Actividad:</label>
                     <input
                        className={`inputActivity ${
                           errors.name && "inputError"
                        }`}
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
                     {errors.countries && (
                        <p className="inputErrorMessage">{errors.countries}</p>
                     )}
                  </div>

                  <div className="duration">
                     <label>Duracion:</label>
                     <select
                        name="duracion"
                        value={input.duracion}
                        onChange={(e) => handleChange(e)}
                     >
                        <option value="0">Seleccionar Duración</option>
                        <option value="30">30 min</option>
                        <option value="1">1 horas</option>
                        <option value="2">2 horas</option>
                        <option value="3">3 horas</option>
                        <option value="4">4 horas</option>
                        <option value="5">mas de 5 hours</option>
                     </select>
                  </div>
                  <div className="selectDifficulty">
                     <label>Dificultad:</label>
                     <select
                        name="dificultad"
                        value={input.dificultad}
                        onChange={(e) => handleChange(e)}
                     >
                        <option value="0">Seleccionar Dificultad</option>
                        <option value="1">1- Inicial</option>
                        <option value="2">2- Baja</option>
                        <option value="3">3- Media</option>
                        <option value="4">4- Dificil</option>
                        <option value="5">5- Profesional</option>
                     </select>
                  </div>
               </ContainerInputs>
               <SelectSeason>
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
               </SelectSeason>
               <CountriesSelected>
                  <ul>
                     {input.countries &&
                        flagsImg.map((el) => {
                           return (
                              <li key={el.countryID + "flagCountry"}>
                                 <img
                                    src={el.flag}
                                    alt={"Flag" + el.countryID}
                                    onClick={() =>
                                       handleClickFlag(el.countryID)
                                    }
                                 />
                              </li>
                           );
                        })}
                  </ul>
               </CountriesSelected>

               <button
                  className="btnSubmit"
                  type="submit"
                  disabled={errors.error && true}
               >
                  Crear Actividad
               </button>
            </form>
         </ContainerForm>
      </div>
   );
};
