import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";

const receiveFollowers = (followers) => ({
    type: RECEIVE_FOLLOWERS,
    followers
});


const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const removeFollow = follow => ({
    type: REMOVE_FOLLOW,
    follow
});

export const createFollow = follow => dispatch => {
    return FollowApiUtil.createFollow(follow)
        .then(res => {
            dispatch(receiveFollow(res.data));
        },
        () => console.log('could not follow'));
};

export const deleteFollow = followId => dispatch => {
    return FollowApiUtil.deleteFollow(followId)
        .then(res => {
            dispatch(removeFollow(res.data));
        },
            () => console.log('could not unfollow'));
};

export const fetchFollowers = (followers) => dispatch => {
    return FollowApiUtil.fetchFollowers(followers)
        .then(followers => { return dispatch(receiveFollowers(followers)) })
}
