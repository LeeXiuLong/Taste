import React from 'react';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import ListFormContainer from '../list/list_form/list_form_container';
import RestaurantFormContainer from '../restaurant/restaurant_form/restaurant_form_container';
import MenuItem from '../menu_items/menu_item_form_container';
import './modal.scss';

function Modal({ modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'list':
            component = <ListFormContainer />
            break;
        case 'restaurantFormDefault':
            component = <RestaurantFormContainer />
            break;
        case 'restaurantFormList':
            component = <RestaurantFormContainer />
            break;
        case "restaurantMenuItem":
            component = <MenuItem />
            break;
        default:
            return null;
    }

    function handleCloseModal() {
        closeModal();
    }

    return (
        <div className="modal-background" onClick={handleCloseModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));