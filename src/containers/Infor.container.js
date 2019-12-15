import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Infor from '../components/Infor';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    token: state.AccountReducer.token,
    name: state.AccountReducer.name,
    image: state.AccountReducer.image,
    role: state.AccountReducer.role,

    user: state.AccountReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(actions.logout());
    },
    updateName: (name) => {
      dispatch(actions.updateName(name));
    },
    updateImage: (image) => {
      dispatch(actions.updateName(image));
    },
  };
};
const InforContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Infor);

export default InforContainer;