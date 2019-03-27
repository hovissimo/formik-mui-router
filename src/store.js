import { createStore, combineReducers } from "redux"
//import thunk from "redux-thunk";

import peopleReducer from "./people/reducer"

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    people: peopleReducer,
  })
  //composeEnhancers(applyMiddleware(thunk))
)
