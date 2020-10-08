import { connect } from 'react-redux';
import RestaurantForm from './restaurant_form';
import { createReview } from '../../../actions/restaurant_review_actions';
import { closeModal } from '../../../actions/modal_actions';
import { addReviewToList, fetchList } from '../../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    let thisListId = state.ui.modal === "restaurantFormList" ? state.entities.lists._id : null;
    return{
        currentUser: state.session.user,
        type: state.ui.modal,
        listId: thisListId,
    }  
};

const mapDispatchToProps = dispatch => ({
    createReview: restaurant => dispatch(createReview(restaurant)),
    closeModal: () => dispatch(closeModal()),
    addReviewToList: (listId, reviewId) => dispatch(addReviewToList(listId, reviewId)),
    fetchLists: (listId) => dispatch(fetchList(listId))

});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);