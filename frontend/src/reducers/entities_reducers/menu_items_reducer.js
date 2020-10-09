import { RECEIVE_MENU_ITEM, RECEIVE_MENU_ITEMS } from "../../actions/menu_item_actions";

const menuItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_MENU_ITEM:
            newState = Object.assign({}, state);
            newState[action.menuItem.data._id] = action.menuItem.data;
            return newState;
        case RECEIVE_MENU_ITEMS:
            newState = Object.assign({}, state);
            action.menuItems.data.forEach(menuItem=> {
                newState[menuItem._id] = menuItem
            })
            return newState;
        default:
            return state;
    }
}

export default menuItemsReducer;