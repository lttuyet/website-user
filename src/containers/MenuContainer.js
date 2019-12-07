import { connect } from 'react-redux';
import Menu from '../components/Menu';

const mapstToProps = state => {
  return {
    isLogin: state.AccountReducer.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const MenuContainer = connect(
  mapstToProps,
  mapDispatchToProps
)(Menu);

export default MenuContainer;