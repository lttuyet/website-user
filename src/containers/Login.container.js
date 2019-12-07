import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Login from '../components/Login';

const mapstToProps = state => {
  return {
    isLogin: state.isLogin,
<<<<<<< HEAD
    errorInfo: state.errorInfo
=======
    errorInfo:state.errorInfo
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      dispatch(actions.loginRequest(user));
    },
<<<<<<< HEAD
    loginFB: (res) => {
      dispatch(actions.loginFBRequest(res));
    },
    loginGG: (res) => {
=======
    loginFB: (res)=>{
      dispatch(actions.loginFBRequest(res));
    },
    loginGG: (res)=>{
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89
      dispatch(actions.loginGGRequest(res));
    }
  };
};
const LoginContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;