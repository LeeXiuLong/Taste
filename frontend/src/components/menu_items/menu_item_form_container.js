import { connect } from 'react-redux';
import MenuItemForm from './menu_item_form';
import  { closeModal } from '../../actions/modal_actions';
import { createMenuItem } from '../../actions/menu_item_actions';

const mapStateToProps = (state) => {
    return {
        reviewId: state.entities.restaurantReviews._id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createMenuItem: (reviewId, menuItem) => dispatch(createMenuItem(reviewId, menuItem)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemForm)