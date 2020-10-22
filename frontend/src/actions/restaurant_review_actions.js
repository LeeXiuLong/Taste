import * as ApiUtil from '../util/restaurant_review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_CURRENT_REVIEW = "RECEIVE_CURRENT_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const CLEAR_REVIEWS = "CLEAR_REVIEW";

const receiveReviews = (reviews) => {
    return{
        type: RECEIVE_REVIEWS,
        reviews
    }
    
};

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveCurrentReview = review => ({
    type: RECEIVE_CURRENT_REVIEW,
    review,
})

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review
});

const clearReview = () => {
    return {
        type: CLEAR_REVIEWS,
    }
}

export const clearReviews = () => dispatch => {
    dispatch(clearReview());
}

export const fetchReviews = (reviews) => dispatch => {
    return ApiUtil.fetchReviews(reviews)
        .then(reviews => { return dispatch(receiveReviews(reviews)) })
}

export const fetchReview = (reviewId) => dispatch => {
    return ApiUtil.fetchReview(reviewId)
        .then(review => { return dispatch(receiveReview(review)) })
}

export const fetchListReviews = (listId) => dispatch => {
    return ApiUtil.fetchListReviews(listId)
    .then(reviews => {
            return dispatch(receiveReviews(reviews)) 
        })
}

export const fetchUserReviews = (userId) => dispatch => {
    return ApiUtil.fetchUserReviews(userId)
        .then(reviews => { return dispatch(receiveReviews(reviews)) })
}

export const createReview = review => dispatch => {
    return ApiUtil.createReview(review)
        .then(review => { return dispatch(receiveReview(review)) });
}

export const fetchCurrentReview = reviewId => dispatch => {
    return ApiUtil.fetchReview(reviewId)
        .then(review => { return dispatch(receiveCurrentReview(review)) });
}

export const deleteReview = (reviewId) => dispatch => {
    return ApiUtil.deleteReview(reviewId)
        .then(review => { return dispatch(removeReview(review)) })
}

// export const fetchEachReview = (reviewIds) => dispatch => {    
//     return reviewIds.map(reviewId => ApiUtil.fetchReview(reviewId._id)    
//         .then(reviews => { return dispatch(receiveReview(reviews))
//         })
//     )
// }; 
