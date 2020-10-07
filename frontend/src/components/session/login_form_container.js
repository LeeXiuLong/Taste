import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);