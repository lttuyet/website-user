import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Login from '../components/Login';

const mapstToProps = state => {
  return {
    // email: state.myReducer.email,
    // password: state.myReducer.password,
    // token: state.myReducer.token,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(actions.loginRequest(email, password));
    },
    loginFB: (res)=>{
      dispatch(actions.loginFB(res));
    },
    loginGG: (res)=>{
      dispatch(actions.loginGG(res));
    }
  };
};
const LoginContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;