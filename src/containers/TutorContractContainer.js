import { connect } from 'react-redux';
// import * as actions from '../actions/actions';
import TutorContract from '../components/TutorContract/index';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    token: state.AccountReducer.token
  };
};

const mapDispatchToProps = () => {
  return {
  };
};
const TutorContractContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(TutorContract);

export default TutorContractContainer;