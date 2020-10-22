import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchUserReviews, deleteReview } from '../../actions/restaurant_review_actions';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = (state, ownProps) => {
    // let allReviews = [];
    // if(state.entities.restaurantReviews){
    //     allReviews = Object.values(state.entities.restaurantReviews);
    // }
    
    // let thisReviews = allReviews.filter(review => {
    //     return review.user === ownProps.match.params.userId
    // })
    let reviews = Object.values(state.entities.restaurantReviews).filter(review => {
        return review.user === state.session.user.id
    })
    return{
        currentUser: state.session.user,
        reviews: reviews,
        // reviews: thisReviews,
    }
};

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex));