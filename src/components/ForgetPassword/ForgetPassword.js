/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../containers/MenuContainer';
import '../App.css';
import Footer from '../layout/Footer';

class ForgetPassword extends PureComponent {
  

  

  render() {
    const st = this.props;

    if (st.isLogin) {
      return <Redirect to="/" />;
    }

    

    

    return (
      <div className="container-fluid">
        <Menu />
        <div className="my_bd_rg">
          <form className="form-signin myshadow"
            >
            <div className="text-center mt-md-1">

              <h1 className="h3 font-weight-normal separate">Đổi mật khẩu</h1>
            </div>

            

            <div className="form-label-group">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                
                required
              />
              <label htmlFor="inputPassword">Mật khẩu mới</label>
            </div>
            <div><label className="text-danger">{st.errorInfo}</label></div>
            <button className="btn btn-lg btn-info btn-block" type="submit">
              Đổi mật khẩu
          </button>
            
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ForgetPassword;
