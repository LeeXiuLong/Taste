import axios from "axios";

export const createFollow = (userId) => {
    return axios.post(`api/users/${userId}/follow`);
};

export const deleteFollow = (userId) => {
    return axios.patch(`api/users/${userId}/unfollow`);
};

export const fetchFollowers = () => {
    return axios.get("api/users/follows");
};

export const fetchUser = (userId) => {
    return axios.get(`api/users/${userId}`)
}