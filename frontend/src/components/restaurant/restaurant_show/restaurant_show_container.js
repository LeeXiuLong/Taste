import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import { fetchCurrentReview } from '../../../actions/restaurant_review_actions'; 
import { fetchMenuItems } from '../../../actions/menu_item_actions';
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.user,
    review: state.entities.restaurantReviews,
    menuItems: state.entities.menuItems
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchCurrentReview: () => dispatch(fetchCurrentReview(ownProps.match.params.reviewId)),
    fetchMenuItems: (reviewId) => dispatch(fetchMenuItems(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);