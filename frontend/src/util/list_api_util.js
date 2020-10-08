import axios from "axios";

export const createList = (formData) => {
    return axios.post("api/lists/new", formData);
};

export const fetchUserLists = (userId) => {
    return axios.get(`api/lists/user/${userId}`);
};

export const fetchList = (listId) => {
    return axios.get(`api/lists/${listId}`);
};

export const fetchLists = () => {
    return axios.get(`api/lists/`);
};

export const addReviewToList = (listId, reviewId) => {
    return axios.get(`api/lists/${listId}/reviews/${reviewId}/add`);
}