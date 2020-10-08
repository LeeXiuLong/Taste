import { RECEIVE_LIST, RECEIVE_LISTS } from "../../actions/list_actions";

const listsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_LIST:
            newState = Object.assign({}, state);
            newState.data.push(action.list.data);
            return newState;
        case RECEIVE_LISTS:
            return Object.assign({}, state, action.lists);
        default:
            return state;
    }
}

export default listsReducer;