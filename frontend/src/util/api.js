import axios from "axios";

export const fetchRestaurant = (place_id) => {
    return axios.get(`/api/restaurants/${place_id}`)
};

