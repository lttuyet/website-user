import { connect } from 'react-redux';
import UserActions from '../components/UserActions';
import * as actions from '../actions/actions';

const mapstToProps = state => {
    return {
        role: state.AccountReducer.role,
        name: state.AccountReducer.name,
        image: state.AccountReducer.image,
        token:state.AccountReducer.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(actions.logout());
        },
        getInfo: (token) => {
            console.log("1111111111111111");
            dispatch(actions.getInfoRequest(token));
        },
    };
};

const UserActionsContainer = connect(
    mapstToProps,
    mapDispatchToProps
)(UserActions);

export default UserActionsContainer;