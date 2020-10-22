import { connect } from 'react-redux';
import { fetchCurrentReview } from '../../../actions/restaurant_review_actions';
import { fetchMenuItems } from '../../../actions/menu_item_actions';
import { fetchUser } from '../../../actions/session_actions';
import UserRestaurantShow from './user_restaurant_show';

const mapStateToProps = (state, ownProps) => {
    let menuItemProps = {}
    let menuItems = Object.values(state.entities.menuItems);
    let thisMenuItems = menuItems.filter(menuItem => {
        return menuItem.restaurantReview === ownProps.match.params.reviewId
    })
    thisMenuItems.forEach(menuItem => {
        menuItemProps[menuItem._id] = menuItem;
    })
    return {
        review: state.entities.restaurantReviews,
        menuItems: menuItemProps,
        user: state.entities.users[ownProps.match.params.userId],
    }

};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchCurrentReview: () => dispatch(fetchCurrentReview(ownProps.match.params.reviewId)),
    fetchMenuItems: (reviewId) => dispatch(fetchMenuItems(reviewId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRestaurantShow);