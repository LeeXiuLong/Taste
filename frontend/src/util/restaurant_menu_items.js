import axios from "axios";

export const createMenuItem = (reviewId) => {
    return axios.post(`/api/menuitems/restaurantreview/${reviewId}/new`);
};

