import { connect } from 'react-redux';
import ListIndex from './list_index';

const mapStateToProps = (state) => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);