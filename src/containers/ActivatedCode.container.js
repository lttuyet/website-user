import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

import ActivatedCode from '../components/ActivatedCode';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin
  };
};

const mapDispatchToProps = () => {
  return {

  };
};
const ActivatedCodeContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(ActivatedCode);

export default ActivatedCodeContainer;