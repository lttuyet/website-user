import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import HomePage from '../components/HomePage';

const mapstToProps = state => {
  return {
    isLogin: state.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(actions.logout());
    },
  };
};
const HomePageContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;