import * as ApiUtil from '../util/restaurant_review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const fetchReviews = (reviews) => dispatch => {
    return ApiUtil.fetchReviews(reviews)
        .then(reviews => { return dispatch(receiveReviews(reviews)) })
}

export const fetchListReviews = (listId) => dispatch => {
    return ApiUtil.fetchListReviews(listId)
        .then(reviews => { return dispatch(receiveReviews(reviews)) })
}

export const createReview = review => dispatch => {
    return ApiUtil.createReview(review)
        .then(review => { return dispatch(receiveReview(review)) });
}