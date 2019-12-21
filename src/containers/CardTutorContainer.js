import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

import CardTutor from '../components/ListTutors/CardTutor';

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
const CardTutorContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(CardTutor);

export default CardTutorContainer;