import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchUserLists } from '../../actions/list_actions';
import ListIndex from './list_index';

const mapStateToProps = (state, ownProps) => {

    return{
        currentUser: state.session.user,
        lists: state.entities.lists,
        // userId: ownProps.userId  
    }
    
};

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal('list')),
    fetchUserLists: (userId) => dispatch(fetchUserLists(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);