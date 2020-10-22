import axios from "axios";

export const createReview = (formData) => {
    return axios.post("/api/restaurantreviews/new", formData);
};

export const deleteReview = (reviewId) => {
    return axios.delete(`api/restaurantreviews/${reviewId}/delete`);
};

export const fetchReview = (reviewId) => {
    return axios.get(`api/restaurantreviews/${reviewId}`);
};

export const fetchReviews = () => {
    return axios.get('api/restaurantreviews/')
}

export const fetchListReviews = (listId) => {
    return axios.get(`api/restaurantreviews/list/${listId}`)
}

export const fetchUserReviews = (userId) => {
    return axios.get(`api/restaurantreviews/user/${userId}`)
}

