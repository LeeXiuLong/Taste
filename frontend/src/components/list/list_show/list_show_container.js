import { connect } from 'react-redux';
import { fetchList, fetchCurrentList, removeReviewFromList } from '../../../actions/list_actions';
import { fetchListReviews, deleteReview} from '../../../actions/restaurant_review_actions';
import { openModal } from '../../../actions/modal_actions';
import ListShow from './list_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.session.user,
    list: state.entities.lists,
    reviews: Object.values(state.entities.restaurantReviews),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchList: (listId) => dispatch(fetchList(listId)),
  fetchListReviews: (listId) => dispatch(fetchListReviews(listId)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchCurrentList: () => dispatch(fetchCurrentList(ownProps.match.params.listId)),
  removeReviewFromList: (listId, reviewId) => dispatch(removeReviewFromList(listId, reviewId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListShow);