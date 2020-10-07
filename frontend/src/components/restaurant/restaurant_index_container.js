import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = (state) => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);