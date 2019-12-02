import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Register from '../components/Register';

const mapstToProps = state => {
  return {
    // email: state.myReducer.email,
    // password: state.myReducer.password,
    // token: state.myReducer.token,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};
const RegisterContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Register);

export default RegisterContainer;