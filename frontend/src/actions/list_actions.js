import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LIST= "RECEIVE_LIST";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_CURRENT_LIST = "RECEIVE_CURRENT_LIST";

const receiveLists = (lists) => ({
    type: RECEIVE_LISTS,
    lists
});

const receiveList = (list) => ({
    type: RECEIVE_LIST,
    list
});

const receiveCurrentList = (currentList) => ({
    type: RECEIVE_CURRENT_LIST,
    currentList
});

export const fetchLists = (lists) => dispatch => {
    return ListApiUtil.fetchLists(lists)
        .then(lists => { return dispatch(receiveLists(lists)) })
}

export const fetchList = (listId) => dispatch => {
    return ListApiUtil.fetchList(listId)
        .then(list => { return dispatch(receiveList(list)) })
}

export const fetchUserLists = (userId) => dispatch => {
    return ListApiUtil.fetchUserLists(userId)
        .then(lists => { return dispatch(receiveLists(lists)) })
};

export const createList = list => dispatch => {
    return ListApiUtil.createList(list)
        .then(list => { return dispatch(receiveList(list)) });
}

export const addReviewToList = (listId, reviewId) => dispatch => {
    return ListApiUtil.addReviewToList(listId, reviewId)
        .then(list => {return dispatch(receiveList(list))})
}

export const fetchCurrentList = (listId) => dispatch => {
    return ListApiUtil.fetchList(listId)
        .then(currentList => { return dispatch(receiveCurrentList(currentList)) })
}