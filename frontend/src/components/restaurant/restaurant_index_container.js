import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchUserReviews } from '../../actions/restaurant_review_actions';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = (state, ownProps) => {
    let allReviews = [];
    if(state.entities.restaurantReviews){
        allReviews = Object.values(state.entities.restaurantReviews);
    }
    
    let thisReviews = allReviews.filter(review => {
        return review.user === ownProps.match.params.userId
    })
    return{
        currentUser: state.session.user,
        reviews: thisReviews,
    }
};

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex));