/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../containers/MenuContainer';
import '../App.css';
import Footer from '../layout/Footer';
import { callAPI } from '../../utils/apiCaller';

class EmailForgetPassword extends PureComponent {
  constructor() {
    super();

    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = {
      email: '',
      error: ''
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    const st = this.props;
    const { state } = this;

    if (st.isLogin) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container-fluid">
        <Menu />
        <div className="my_bd_rg ">
          <form className="form-signin myshadow"
            onSubmit={(e) => {
              e.preventDefault();
              const data = {
                email: state.email
              };

              const res = callAPI('user/email-forget-password', 'POST', data).then((r) => {
                try {
                  const { status } = r.data;

                  if (status === "failed") {
                    this.setState({ error: r.data.message });
                  } else {
                    const {id} = r.data;
                    this.setState({ error: '' });
                    window.location = `/verify&id=${id}`;
                  }
                } catch (err) {
                  this.setState({ error: 'Lỗi kết nối, vui lòng thử lại!' });
                }
              });
            }}>
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
                onChange={this.handleEmailChange}
                value={state.email}
              />
              <label htmlFor="inputEmail">Địa chỉ email</label>
            </div>
            <div>
              <label className="text-danger">{state.error}</label>
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
