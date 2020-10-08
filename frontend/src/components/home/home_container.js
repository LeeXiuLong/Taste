import { connect } from 'react-redux';
import Home from './home';
import { fetchReviews } from '../../actions/restaurant_review_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.user,
    reviews: state.entities.restaurantReviews
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);