import axios from "axios";

export const createFollow = (formData) => {
    return axios.post("api/:userId/follow", formData);
};

export const deleteFollow = (followId) => {
    return axios.patch("api/:userId/follow", followId);
};

export const fetchFollowers = () => {
    return axios.get("api/follows");
};