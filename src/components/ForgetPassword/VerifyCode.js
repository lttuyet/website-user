/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../containers/MenuContainer';
import '../App.css';
import Footer from '../layout/Footer';

class VerifyCode extends PureComponent {
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
                Xác thực tài khoản
              </h1>
            </div>
            <div className="mb-md-2">
                
              <label>
              <span className="text-danger">***</span>
                Mã xác thực đã được gửi đến địa chỉ email của bạn. Vui lòng nhập
                mã xác thực để thực hiện đổi mới mật khẩu.
              </label>
            </div>

            <div className="form-label-group">
              <input
                type="text"
                id="inputVerfyCode"
                className="form-control"
                required
                autoFocus
              />
              <label htmlFor="inputVerfyCode">Mã xác thực</label>
            </div>

            <div>
              <label className="text-danger">{st.errorInfo}</label>
            </div>
            <button href="/forget-password" className="btn btn-lg btn-info btn-block" type="submit">
              Xác nhận
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default VerifyCode;
