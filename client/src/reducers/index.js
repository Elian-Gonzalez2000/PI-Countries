import {GET_MOVIES, ADD_MOVIE_FAVORITE} from "../actions/index.js";

const initialState = {
	allMovies: [],
	favoriteMovies: [],
};

export default function rootReducer(state = initialState, actions){
	switch(actions.type){
		case GET_MOVIES:
			return{
				...state,
				allMovies: [...state.allMovies, actions.payload],
			};

		case ADD_MOVIE_FAVORITE:
			return;

		default: 
			return {...state};

	}
}