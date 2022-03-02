import {
   GET_COUNTRIES,
   ADD_ACTIVITY,
   GET_COUNTRIES_BY_NAME,
   //  GET_COUNTRY_DETAILS,
   GET_ACTIVITIES,
   ORDER_BY_NAME,
   FILTER_CONTINENT,
   FILTER_ACTIVITY,
   ORDER_BY_POBLATION,
   GET_LOAD_STATUS,
} from "../actions/index.js";

const initialState = {
   allCountries: [],
   //	countryDetails: [],
   countries: [],
   activities: [],
   isLoading: false,
};

export default function rootReducer(state = initialState, actions) {
   switch (actions.type) {
      case GET_LOAD_STATUS:
         return {
            ...state,
            isLoading: actions.payload,
         };

      case GET_COUNTRIES:
         return {
            ...state,
            countries: actions.payload,
            allCountries: actions.payload,
         };

      case ADD_ACTIVITY:
         return { ...state };

      case GET_COUNTRIES_BY_NAME:
         return {
            ...state,
            countries: actions.payload,
         };

      /* 		case GET_COUNTRY_DETAILS:
			return {
            ...state,
            countryDetails: actions.payload,
         };
 */
      case GET_ACTIVITIES:
         return {
            ...state,
            activities: actions.payload,
         };

      case ORDER_BY_NAME:
         let sortedCountries =
            actions.payload === "asc"
               ? state.countries.sort((a, b) => a.name.localeCompare(b.name))
               : actions.payload === "desc"
               ? state.countries.sort((a, b) => b.name.localeCompare(a.name))
               : state.countries;
         return {
            ...state,
            countries: sortedCountries,
         };

      case ORDER_BY_POBLATION:
         let poblationFiltered =
            actions.payload === "asc"
               ? state.countries.sort((a, b) => a.population - b.population)
               : actions.payload === "desc"
               ? state.countries.sort((a, b) => b.population - a.population)
               : state.countries;

         return {
            ...state,
            countries: poblationFiltered,
         };

      case FILTER_CONTINENT:
         const allCountries = state.allCountries;
         const continentFilter =
            actions.payload === "All"
               ? allCountries
               : allCountries.filter(
                    (country) => country.continent === actions.payload
                 );

         return {
            ...state,
            countries: continentFilter,
         };

      case FILTER_ACTIVITY:
         const allCountriesAct = state.allCountries;
         const activitiesFilter =
            actions.payload === "All"
               ? allCountriesAct
               : allCountriesAct.filter(
                    (country) =>
                       country.activities &&
                       country.activities
                          .map((el) => el.name)
                          .includes(actions.payload)
                 );

         return {
            ...state,
            countries: activitiesFilter,
         };

      default:
         return { ...state };
   }
}
