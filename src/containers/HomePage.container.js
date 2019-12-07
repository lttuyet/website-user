import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import HomePage from '../components/HomePage';

const mapstToProps = state => {
  return {
<<<<<<< HEAD
    isLogin: state.isLogin
=======
    isLogin: state.isLogin,
    
    // name: state.myReducer.name,
    // image: state.myReducer.image,
    // token: state.myReducer.token,
    
    
>>>>>>> 0cb21cf2dd1695e6373e3d4d6b12c543a6f99a89
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