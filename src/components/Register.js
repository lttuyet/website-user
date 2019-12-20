/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../containers/MenuContainer';
import { callAPI } from '../utils/apiCaller';

import './App.css';
import Footer from './layout/Footer';

class Register extends PureComponent {
  constructor() {
    super();

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
      addresses: [
        {
          province: "Thành phố Hồ Chí Minh",
          districts: [
            "Quận 1",
            "Quận 2",
            "Quận 3",
            "Quận 4",
            "Quận 5",
            "Quận 6",
            "Quận 7",
            "Quận 8",
            "Quận 9",
            "Quận 10",
            "Quận 11",
            "Quận 12",
            "Quận Bình Tân",
            "Quận Bình Thạnh",
            "Quận Gò Vấp",
            "Quận Phú Nhuận",
            "Quận Tân Bình",
            "Quận Tân Phú",
            "Quận Thủ Đức",
            "Huyện Bình Chánh",
            "Huyện Cần Giờ",
            "Huyện Củ Chi",
            "Huyện Hóc Môn",
            "Huyện Nhà Bè",
          ]
        }
      ],
      province: "Thành phố Hồ Chí Minh",
      district: "Quận 1",
    };
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

  handleProvinceChange(e) {
    const st=this.state;
    const address = st.addresses.find(item => item.province === e.target.value);
    
    this.setState({ province: e.target.value ,district:address.districts[0]});
  }

  handleDistrictChange(e) {
    this.setState({ district: e.target.value });
  }

  render() {
    const st = this.props;
    const state = this.state;

    if (st.isLogin) {
      return <Redirect to="/" />;
    }

    const responseFacebook = res => {
      const user = {
        name: res.name,
        email: res.email,
        role: this.state.role,
        type: "facebook",
        idFb: res.id,
        image: res.picture.data.url
      };

      const response = callAPI('user/register', 'POST', user).then((r) => {
        try {
          const { status } = r.data;

          if (status === 500) {
            this.setState({ errorInfo: 'Tài khoản đã tồn tại!' });

          } else {
            this.setState({ errorInfo: '' });
            window.location = "/login";
          }
        } catch (err) {
          this.setState({ errorInfo: 'Lỗi kết nối, vui lòng thử lại!' });
        }
      });
    };

    const responseGoogle = (res) => {
      const user = {
        name: res.w3.ig,
        email: res.w3.U3,
        role: this.state.role,
        type: "google",
        idGg: res.w3.Eea,
        image: res.w3.Paa
      };

      const response = callAPI('user/register', 'POST', user).then((res) => {
        try {
          const { status } = res.data;

          if (status === 500) {
            this.setState({ errorInfo: 'Tài khoản đã tồn tại!' });

          } else {
            this.setState({ errorInfo: '' });
            window.location = "/login";
          }
        } catch (err) {
          this.setState({ errorInfo: 'Lỗi kết nối, vui lòng thử lại!' });
        }
      });
    };

    const listProvince = state.addresses.map((address) => {
      return (
        <option value={address.province}>{address.province}</option>
      );
    });

    const address = state.addresses.find(item => item.province === state.province);
    const listDisTrict = address.districts.map((district) => {
      return (
        <option value={district}>{district}</option>
      );
    });

    return (
      <div className="container-fluid">
        <Menu />
        <div className="my_bd_rg">
          <form className="form-signin myshadow"
            onSubmit={(e) => {
              e.preventDefault();
              const address=`${this.state.address}, ${this.state.district}, ${this.state.province}`;

              const user = {
                name: this.state.name,
                address,
                role: this.state.role,
                email: this.state.email,
                password: this.state.password,
                type: 'normal'
              };
              const res = callAPI('user/register', 'POST', user).then((res) => {
                try {
                  const { status } = res.data;

                  if (status === 500) {
                    this.setState({ errorInfo: 'Tài khoản đã tồn tại!' });
                  } else {
                    this.setState({ errorInfo: '' });
                    window.location = "/login";
                  }
                } catch (err) {
                  this.setState({ errorInfo: 'Lỗi kết nối, vui lòng thử lại!' });
                }
              });
            }}>
            <div className="text-center ">
              <h1 className="h3 font-weight-normal separate">Đăng ký</h1>
            </div>
            <div className="form-label-group ">
              <div><label className=" ml-md-1">Loại tài khoản:</label></div>
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
            <div className="form-label-group ">
              <div className="row  mx-auto d-block">
                <div className="ml-md-1">
                  <label>Tỉnh/Thành phố</label>
                  <select className="form-control" onChange={this.handleProvinceChange}>
                    {listProvince}
                  </select>
                </div>
                <div className="ml-md-1">
                  <label>Quận/Huyện</label>
                  <select className="form-control" onChange={this.handleDistrictChange}>
                    {listDisTrict}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputAddress"
                className="form-control"
                required
                value={this.state.address} onChange={this.handleAddressChange}
              />
              <label htmlFor="inputAddress">Số nhà, Đường</label>
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
            >
              Đăng ký
            </button>
            <div className="social-login mt-md-2">
              <FacebookLogin
                appId="1415360621958753"
                callback={responseFacebook}
                fields="name,email,picture"
                cssClass="loginBtn--facebook loginBtn"
                textButton="Register vs Facebook "
              />
              <GoogleLogin
                clientId="366483547912-mq7713gnkrffacq9e6p2na1i2os9jeed.apps.googleusercontent.com"
                render={renderProps => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    type="button" className="loginBtn loginBtn--google">
                    Register vs Google
              </button>
                )}
                onSuccess={responseGoogle}
              />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
