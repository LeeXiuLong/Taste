import { connect } from 'react-redux';
import RestaurantForm from './restaurant_form';

const mapStateToProps = (state) => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);