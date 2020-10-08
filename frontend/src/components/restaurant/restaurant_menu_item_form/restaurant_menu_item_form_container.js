import { connect } from 'react-redux';
import RestaurantMenuItemForm from './restaurant_menu_item_form';
import  { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)