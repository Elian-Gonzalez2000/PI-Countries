import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeStore = compose;

const store = createStore(
	rootReducer,
	composeStore(applyMiddleware(thunk))
	)

export default store;

