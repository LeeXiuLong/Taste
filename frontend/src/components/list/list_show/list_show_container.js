import { connect } from 'react-redux';
import { fetchList, fetchCurrentList } from '../../../actions/list_actions';
import { fetchListReviews, fetchReviews} from '../../../actions/restaurant_review_actions';
import { openModal } from '../../../actions/modal_actions';
import ListShow from './list_show';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.user,
    list: state.entities.lists,
    reviews: state.entities.restaurantReviews
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchList: (listId) => dispatch(fetchList(listId)),
  fetchListReviews: (listId) => dispatch(fetchListReviews(listId)),
  fetchReviews: () => dispatch(fetchReviews()),
  // fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  // fetchEachReview: (reviewIds) => dispatch(fetchEachReview(reviewIds)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchCurrentList: () => dispatch(fetchCurrentList(ownProps.match.params.listId)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListShow);