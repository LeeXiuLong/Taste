import axios from "axios";

export const fetchSearch = (name) => {
    return axios.get(`api/users/search/${name}`);
}

export const fetchUsers = () => {
    return axios.get(`api/users/`);
}

