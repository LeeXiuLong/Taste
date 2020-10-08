import { RECEIVE_LIST, RECEIVE_LISTS, RECEIVE_CURRENT_LIST } from "../../actions/list_actions";

const listsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_LIST:
            newState = Object.assign({}, state);
            if (newState.data) { newState.data.push(action.list.data) };
            return newState;
            //if(newState.data) { newState.data[action.list.data.id] = action.list.data}
        case RECEIVE_LISTS:
            newState = Object.assign({}, state);
            action.lists.data.forEach(list => {
                newState[list._id] = list;
            })
            return newState;
        case RECEIVE_CURRENT_LIST:
        
            return action.currentList.data;
        default:
            return state;
    }
}

export default listsReducer;