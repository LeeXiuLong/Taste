import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchUserReviews } from '../../actions/restaurant_review_actions';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = (state) => ({
    currentUser: state.session.user,
    reviews: state.entities.restaurantReviews
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId))

});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);