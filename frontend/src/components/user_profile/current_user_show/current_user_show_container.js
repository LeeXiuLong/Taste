import { connect } from "react-redux";
import { fetchUser } from "../../../actions/follow_actions";
import {createFollow, deleteFollow } from "../../../actions/follow_actions";
import CurrentUserShow from "./current_user_show";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        userId: ownProps.match.params.userId,
        user: state.entities.users[ownProps.match.params.userId]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchCurrentUser: () => dispatchEvent(fetchUser(ownProps.match.params.currentUser.id)),
        createFollow: (userId) => dispatch(createFollow(userId)),
        deleteFollow: (userId) => dispatch(deleteFollow(userId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserShow);