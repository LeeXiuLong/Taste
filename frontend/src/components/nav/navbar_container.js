import { connect } from 'react-redux';
import { logout, fetchUser } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);