import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ListIndex from './list_index';

const mapStateToProps = (state) => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal('list'))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);