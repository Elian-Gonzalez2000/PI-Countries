export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";

const apiKey = "44a9478f";

export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return (dispatch)=>{
  	return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
     });
  };
}

export function getMovieDetail(payload) {
  return { type: "GET_MOVIE_DETAIL", payload };
}

export function removeMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}