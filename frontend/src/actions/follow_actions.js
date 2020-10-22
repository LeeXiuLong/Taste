import * as FollowApiUtil from '../util/follow_api_util';
import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const createFollow = (userId) => dispatch => {
    return FollowApiUtil.createFollow(userId)
        .then(res => {
            console.log(res);
            return dispatch(receiveUser(res));
        },
        () => console.log('could not follow'));
};

export const deleteFollow = userId => dispatch => {
    return FollowApiUtil.deleteFollow(userId)
        .then(res => {
            dispatch(receiveUser(res));
        },
            () => console.log('could not unfollow'));
};

export const fetchUser = (userId) => dispatch => {
    return SearchApiUtil.fetchUser(userId)
        .then(user => { return dispatch(receiveUser(user))})
}
