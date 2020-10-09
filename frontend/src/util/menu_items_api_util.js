import axios from "axios";

export const fetchMenuItems = (reviewId) => {
    return axios.get(`/api/menuitems/restaurantreview/${reviewId}`)
};

export const createMenuItem = (reviewId, menuItem) => {
    return axios.post(`/api/menuitems/restaurantreview/${reviewId}/new`, menuItem);
};

