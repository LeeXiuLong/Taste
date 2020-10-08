import { connect } from 'react-redux';
import { createList } from '../../../actions/list_actions';
import ListForm from './list_form';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    createList: (list) => dispatch(createList(list)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);