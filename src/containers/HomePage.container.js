import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import HomePage from '../components/HomePage';

const mapstToProps = state => {
  return {
    
    // name: state.myReducer.name,
    // image: state.myReducer.image,
    // token: state.myReducer.token,
    
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};
const HomePageContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;