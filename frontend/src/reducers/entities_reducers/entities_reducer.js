import { combineReducers } from "redux";

import followsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
    follows: followsReducer,
})

export default entitiesReducer;