/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import React, { PureComponent } from 'react';
import Menu from './Menu';
import { Redirect } from 'react-router-dom';
import { callAPI } from '../utils/apiCaller';

import './App.css';

class Register extends PureComponent {
  constructor() {
    super();
    /*this.name = '';
    this.email = '';
    this.password = '';
    this.role = '1';*/
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      role: 'learner',
      name: '',
      address: '',
      email: '',
      password: '',
      errorInfo: '',
      isSubmited: false
    }
  }

  handleRoleChange(e) {
    this.setState({ role: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const st = this.props;

    if (st.isLogin) {
      return <Redirect to="/" />;
    }

    const responseFacebook = res => {
      console.log(res);
      const user = {
        name:res.name,
        email:res.email,
        role:this.state.role,
        type:"facebook",
        idFb:res.id,
        image:res.picture.data.url
      }

      const response = callAPI('user/register', 'POST', user).then((res) => {
        try {
          const status = res.data.status;

          if (status === 500) {
            this.setState({ errorInfo: 'Tài khoản đã tồn tại!' });
          } else {
            this.setState({ errorInfo: '' });
            window.location = "/login"
          }
        } catch (err) {
          this.setState({ errorInfo: 'Lỗi kết nối, vui lòng thử lại!' });
        }
      });
    };

    return (
      <div>
        <Menu />
        <div className="my_bd_rg">
          <form className="form-signin myshadow">
            <div className="text-center ">
              <h1 className="h3 font-weight-normal separate">Đăng ký</h1>
            </div>
            <div className="form-label-group ">
              <div><label className=" col-form-label-sm ml-md-1">Loại tài khoản:</label></div>
              <select className="custom-select custom-select form-control" value={this.state.role} onChange={this.handleRoleChange}>
                <option value="learner" >Người học</option>
                <option value="tutor">Người dạy</option>
              </select>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputName"
                className="form-control"
                // placeholder="Tên hiển thị"
                required
                autoFocus
                value={this.state.name} onChange={this.handleNameChange}
              />
              <label htmlFor="inputName">Họ tên</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputAddress"
                className="form-control"
                required
                value={this.state.address} onChange={this.handleAddressChange}
              />
              <label htmlFor="inputAddress">Địa chỉ</label>
            </div>
            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                required
                value={this.state.email} onChange={this.handleEmailChange}
              />
              <label htmlFor="inputEmail">Email</label>
            </div>

            <div className="form-label-group mb-md-1">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                required
                value={this.state.password} onChange={this.handlePasswordChange}
              />
              <label htmlFor="inputPassword">Mật khẩu</label>
            </div>
            <div><label className=" col-form-label-sm ml-md-1 text-danger">{this.state.errorInfo}</label></div>
            <button
              className="btn btn-lg btn-info btn-block"
              type="submit"
              onClick={(e) => {
                e.preventDefault();

                const user = {
                  name: this.state.name,
                  address: this.state.address,
                  role: this.state.role,
                  email: this.state.email,
                  password: this.state.password,
                  type: 'normal'
                }
                const res = callAPI('user/register', 'POST', user).then((res) => {
                  console.log(res);
                  try {
                    const status = res.data.status;

                    if (status === 500) {
                      this.setState({ errorInfo: 'Tài khoản đã tồn tại!' });
                    } else {
                      this.setState({ errorInfo: '' });
                      window.location = "/login"
                    }
                  } catch (err) {
                    this.setState({ errorInfo: 'Lỗi kết nối, vui lòng thử lại!' });
                  }
                });
              }}
            >
              Đăng ký
            </button>
            <div className="social-login mt-md-2">
              <FacebookLogin
                appId="1415360621958753"
                callback={responseFacebook}
                cssClass="loginBtn--facebook loginBtn"
              />
              <GoogleLogin
                clientId="882493539288-b91nk3aqbujvt60s1sh3p5uessam83tq.apps.googleusercontent.com"
                render={renderProps => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    type="button" className="loginBtn loginBtn--google">
                   Register with Google
              </button>
                )}
                buttonText="Login"
                onSuccess={(res) => {
                  console.log(res);
                }}


              />

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
