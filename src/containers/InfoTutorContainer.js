import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

import InfoTutor from '../components/DetailsTutor/InfoTutor';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin,
    role:state.AccountReducer.role
  };
};

const mapDispatchToProps = () => {
  return {
    
  };
};
const InfoTutorContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(InfoTutor);

export default InfoTutorContainer;