import { connect } from 'react-redux';
// import { openModal } from '../../../actions/modal_actions';
import { fetchUserLists } from '../../../../actions/list_actions';
import { fetchUser } from '../../../../actions/session_actions';
import UserListIndex from './user_list_index';

const mapStateToProps = (state, ownProps) => {
    let lists = Object.values(state.entities.lists).filter(list => {
        return list.user === ownProps.match.params.userId;
    })
    return {
        currentUser: state.session.user,
        lists,
        user: state.entities.users[ownProps.match.params.userId],
    }
    
    // userId: ownProps.userId
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    // openModal: () => dispatch(openModal('list')),
    fetchUserLists: (userId) => dispatch(fetchUserLists(userId)),
    fetchUser: () => dispatch(fetchUser(ownProps.match.params.userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListIndex);