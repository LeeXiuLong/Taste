import axios from "axios";

export const fetchSearch = (name) => {
    return axios.get(`api/users/search/${name}`);
}

export const fetchUser = (userId) => {
    return axios.get(`api/users/${userId}`);
}

