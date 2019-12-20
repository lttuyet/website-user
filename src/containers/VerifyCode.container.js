import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

import VerifyCode from '../components/VerifyCode';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    errorInfo: state.AccountReducer.errorInfo
  };
};

const mapDispatchToProps = () => {
  return {
    
  };
};
const VerifyCodeContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(VerifyCode);

export default VerifyCodeContainer;