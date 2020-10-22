import { connect } from "react-redux";
import { fetchUser } from "../../actions/follow_actions";
import UserShow from "./user_show";

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        userId: state.session.user.id,
        followers: state.entities.follows,
        user: Object.values(state.entities.users)
    };
};

const mapDispatchToProps =(dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);