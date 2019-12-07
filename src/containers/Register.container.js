import { connect } from 'react-redux';
import Register from '../components/Register';

const mapstToProps = state => {
  return {
    isLogin: state.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const RegisterContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Register);

export default RegisterContainer;