import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

import ForgetPassword from '../components/ForgetPassword/ForgetPassword';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    errorInfo: state.AccountReducer.errorInfo,
    isVerified: state.VerifyReducer.isVerified
  };
};

const mapDispatchToProps = () => {
  return {
    
  };
};
const ForgetPasswordContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(ForgetPassword);

export default ForgetPasswordContainer;