import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ForgetPassword from '../components/ForgetPassword/ForgetPassword';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    isVerified: state.VerifyReducer.isVerified,
    id:state.VerifyReducer.id,
    code:state.VerifyReducer.code,
    error:state.VerifyReducer.error
  }; 
};

const mapDispatchToProps = (dispatch) => {
  return {
    recoverPass: (data) => {
      dispatch(actions.recoverPassRequest(data));
    },
  };
};

const ForgetPasswordContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(ForgetPassword);

export default ForgetPasswordContainer;