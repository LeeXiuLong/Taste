import { connect } from 'react-redux';
import RestaurantForm from './restaurant_form';
import { createReview } from '../../../actions/restaurant_review_actions';
import { closeModal } from '../../../actions/modal_actions';
import { addReviewToList } from '../../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
    let thisListId = state.ui.modal === "restaurantFormList" ? ownProps.match.params.listId : null;
    return{
        currentUser: state.session.user,
        type: state.ui.modal,
        listId: thisListId,
    }  
};

const mapDispatchToProps = dispatch => ({
    createReview: restaurant => dispatch(createReview(restaurant)),
    closeModal: () => dispatch(closeModal()),
    addReviewToList: (listId, reviewId) => dispatch(addReviewToList(listId, reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);