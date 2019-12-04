import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Login from '../components/Login';

const mapstToProps = state => {
  return {
    isLogin: state.isLogin,
    errorInfo:state.errorInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      dispatch(actions.loginRequest(user));
    },
    loginFB: (res)=>{
      dispatch(actions.loginFBRequest(res));
    },
    loginGG: (res)=>{
      dispatch(actions.loginGGRequest(res));
    }
  };
};
const LoginContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;