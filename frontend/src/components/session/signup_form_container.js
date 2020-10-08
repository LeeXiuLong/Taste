import { connect } from 'react-redux';
import { signup, login, receiveErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
        // .then(dispatch(login(user))),
    closeModal: () => dispatch(closeModal()),
    receiveErrors: errors => dispatch(receiveErrors(errors))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);