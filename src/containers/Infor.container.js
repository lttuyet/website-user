import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Infor from '../components/Infor';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    name: state.AccountReducer.name,
    image: state.AccountReducer.image,
    role: state.AccountReducer.role,
   
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(actions.logout());
    },
  };
};
const InforContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Infor);

export default InforContainer;