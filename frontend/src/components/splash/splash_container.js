import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);