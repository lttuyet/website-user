/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../containers/MenuContainer';
import '../App.css';
import Footer from '../layout/Footer';

class EmailForgetPassword extends PureComponent {
  render() {
    const st = this.props;

    if (st.isLogin) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container-fluid">
        <Menu />
        <div className="my_bd_rg ">
          <form className="form-signin myshadow">
            
            <div className="text-center mt-md-1">
              <h1 className="h3 font-weight-normal separate">
                Tìm tài khoản của bạn
              </h1>
            </div>
            <div className=" mb-md-2">
                
              <label>
              <span className="text-danger">***</span>
                Vui lòng nhập email tài khoản của bạn để tìm lại tài khoản
              </label>
            </div>

            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="inputEmail">Địa chỉ email</label>
            </div>

            <div>
              <label className="text-danger">{st.errorInfo}</label>
            </div>
            <button href="/verify" className="btn btn-lg btn-info btn-block" type="submit">
              Gửi
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EmailForgetPassword;
