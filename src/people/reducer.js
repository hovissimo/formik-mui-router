import { combineReducers } from "redux"
//import thunk from "redux-thunk";

export default combineReducers({
  byId: (state = {}, action) => state,
  allIds: (state = [], action) => state,
})
