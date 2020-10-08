import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import { fetchReview } from '../../../actions/restaurant_review_actions'; 
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.user,
    review: state.entities.restaurantReviews[ownProps.match.params.reviewId]
});

const mapDispatchToProps = (dispatch) => ({
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);