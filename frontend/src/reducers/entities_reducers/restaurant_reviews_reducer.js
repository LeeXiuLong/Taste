import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from "../../actions/restaurant_review_actions";

const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_REVIEW:
            return action.review.data;
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews);
        default:
            return state;
    }
}

export default reviewsReducer;