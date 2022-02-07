export const GET_COUNTRIES = "GET_COUNTRIES";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
//export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const ORDER_BY_POBLATION = "ORDER_BY_POBLATION";
export const GET_LOAD_STATUS = "GET_LOAD_STATUS";

export function setLoadStatus(payload) {
  return {
    type: GET_LOAD_STATUS,
    payload,
  };
}

export function addActivity(payload) {
  return { type: "ADD_ACTIVITY", payload };
}

export function getCountries() {
  return (dispatch) => {
    dispatch(setLoadStatus(true));
    return fetch(`http://localhost:3001/countries/`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(setLoadStatus(false));
        return dispatch({ type: GET_COUNTRIES, payload: json });
      });
  };
}

export function getCountriesByName(input) {
  return (dispatch) => {
    dispatch(setLoadStatus(true));
    return fetch(`http://localhost:3001/countries?name=${input}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(setLoadStatus(false));
        return dispatch({ type: GET_COUNTRIES_BY_NAME, payload: json });
      });
  };
}

/* export function getCountryDetails(id) {
  return (dispatch) => {
    dispatch(setLoadStatus(true));
    return fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(setLoadStatus(false));
        return dispatch({ type: GET_COUNTRY_DETAILS, payload: json });
      });
  };
}
 */
export function getActivities() {
  return (dispatch) => {
    return fetch(`http://localhost:3001/activity/`)
      .then((response) => response.json())
      .then((json) => {
        return dispatch({ type: GET_ACTIVITIES, payload: json });
      });
  };
}

export function postActivities(payload) {
  return (dispatch) => {
    fetch(`http://localhost:3001/activity/`, {
      method: "POST", // or "PUT"
      body: JSON.stringify(payload), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((data) => {
        console.log("Success:", data);
        return data;
      });
  };
}

export function orderName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByPoblation(payload) {
  return {
    type: ORDER_BY_POBLATION,
    payload,
  };
}

export function filterByContinent(payload) {
  return {
    type: FILTER_CONTINENT,
    payload,
  };
}

export function filterByActivity(payload) {
  return {
    type: FILTER_ACTIVITY,
    payload,
  };
}
