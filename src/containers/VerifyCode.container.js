import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import VerifyCode from '../components/ForgetPassword/VerifyCode';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    isVerified:state.VerifyReducer.isVerified,
    error:state.VerifyReducer.error,
    id:state.VerifyReducer.id    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verify: (data) => {
      dispatch(actions.verifyRequest(data));
    },
  };
};
const VerifyCodeContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(VerifyCode);

export default VerifyCodeContainer;