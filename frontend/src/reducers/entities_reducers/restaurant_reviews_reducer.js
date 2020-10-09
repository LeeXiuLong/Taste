import { RECEIVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_CURRENT_REVIEW } from "../../actions/restaurant_review_actions";

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_REVIEW:
             newState = Object.assign({}, state);
             newState[action.review.data._id] = action.review.data;
             return newState;
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews);
        case RECEIVE_CURRENT_REVIEW:
            return action.review.data;
        default:
            return state;
    }
}

export default reviewsReducer;