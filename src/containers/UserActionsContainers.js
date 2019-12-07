import { connect } from 'react-redux';
import UserActions from '../components/UserActions';
import * as actions from '../actions/actions';

const mapstToProps = state => {
    return {
        role: state.AccountReducer.role,
        name: state.AccountReducer.name,
        image: state.AccountReducer.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(actions.logout());
        },
    };
};

const UserActionsContainer = connect(
    mapstToProps,
    mapDispatchToProps
)(UserActions);

export default UserActionsContainer;