import { combineReducers } from "redux";

import listsReducer from './list_reducer';
import reviewsReducer from "./restaurant_reviews_reducer";
import menuItemsReducer from "./menu_items_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    lists: listsReducer, 
    restaurantReviews: reviewsReducer,
    menuItems: menuItemsReducer,
    users: usersReducer
})

export default entitiesReducer;