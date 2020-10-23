import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { fetchUserReviews, deleteReview } from '../../../actions/restaurant_review_actions';
import UserRestaurantIndex from './user_restaurant_index';
import { fetchUser } from '../../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
    let allReviews = [];
    if (state.entities.restaurantReviews) {
        allReviews = Object.values(state.entities.restaurantReviews);
    }

    let thisReviews = allReviews.filter(review => {
        return review.user === ownProps.match.params.userId
    })

    let user = state.entities.users[ownProps.match.params.userId] ? state.entities.users[ownProps.match.params.userId] : null;

    return {
        user,
        reviews: thisReviews,
        userId: ownProps.match.params.userId,
    }
};

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserRestaurantIndex));