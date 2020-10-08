import { combineReducers } from "redux";

import followsReducer from './follows_reducer';
import listsReducer from './list_reducer';
import reviewsReducer from "./restaurant_reviews_reducer";

const entitiesReducer = combineReducers({
    follows: followsReducer,
    lists: listsReducer, 
    restaurantReviews: reviewsReducer
})

export default entitiesReducer;