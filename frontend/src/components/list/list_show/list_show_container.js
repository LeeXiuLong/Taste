import { connect } from 'react-redux';
import { fetchList } from '../../../actions/list_actions';
import { fetchListReviews } from '../../../actions/restaurant_review_actions';
import { openModal } from '../../../actions/modal_actions';
import ListShow from './list_show';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.user,
    list: state.entities.lists,
    reviews: state.entities.restaurantReviews
});

const mapDispatchToProps = dispatch => ({
  fetchList: (listId) => dispatch(fetchList(listId)),
  fetchListReviews: (listId) => dispatch(fetchListReviews(listId)),
  openModal: (modal) => dispatch(openModal(modal)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ListShow);