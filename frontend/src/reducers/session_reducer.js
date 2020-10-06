import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
    isAuthenticated: false,
    user: {}
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
            return _nullSession;
        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, state, { isAuthenticated: true, user: action.currentUser });
        default:
            return state;
    }
}

export default sessionReducer;