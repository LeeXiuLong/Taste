import * as ApiUtil from '../util/menu_items_api_util';
export const RECEIVE_MENU_ITEMS = "RECEIVE_MENU_ITEMS";
export const RECEIVE_MENU_ITEM = "RECEIVE_MENU_ITEM";


export const receiveMenuItems = menuItems => {
    return {
        type: RECEIVE_MENU_ITEMS,
        menuItems,
    }
}

export const receiveMenuItem = menuItem => {
    return {
        type: RECEIVE_MENU_ITEM,
        menuItem,
    }
}

export const fetchMenuItems = (reviewId) => dispatch => {
    return ApiUtil.fetchMenuItems(reviewId)
        .then(menuItems => { return dispatch(receiveMenuItems(menuItems)) });
}

export const createMenuItem = (reviewId, menuItem) => dispatch => {
    return ApiUtil.createMenuItem(reviewId, menuItem)
        .then(menuItem => { return dispatch(receiveMenuItem(menuItem))});
}

