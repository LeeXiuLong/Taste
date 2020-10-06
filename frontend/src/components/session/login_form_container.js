import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import React from 'react';

const mapStateToProps = (state) => ({
    errors: state.errors,
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);