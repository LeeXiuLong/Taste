import { connect } from "react-redux";
import { fetchUsers } from "../../util/search_api_util";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);