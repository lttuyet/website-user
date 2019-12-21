import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

import EmailForgetPassword from '../components/ForgetPassword/EmailForgetPassword';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin
  };
};

const mapDispatchToProps = () => {
  return {
    
  };
};
const EmailForgetPasswordContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(EmailForgetPassword);

export default EmailForgetPasswordContainer;