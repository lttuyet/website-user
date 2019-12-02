/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import React, { PureComponent } from 'react';
import Menu from './Menu';

import './App.css';

class Register extends PureComponent {
  constructor() {
    super();
    this.name = '';
    this.email = '';
    this.password = '';
    this.role = '1';
  }
  

  render() {
    const responseFacebook = response => {
      console.log(response);
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
              <div><label className =" col-form-label-sm ml-md-1">Loại tài khoản:</label></div>
              
              <select className="custom-select custom-select form-control" defaultValue="1" onChange={(e)=>{this.role = e.target.value;}}>
                <option value="1" >Người học</option>
                <option value="0">Người dạy</option>
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
                onChange={e => {
                  this.name = e.target.value;
                }}
              />
              <label htmlFor="inputName">Tên hiển thị</label>
            </div>
            <div className="form-label-group">
              <input
                type="text"
                id="inputAddress"
                className="form-control"
                // placeholder="Địa chỉ email"
                required
                onChange={e => {
                  this.email = e.target.value;
                }}
              />
              <label htmlFor="inputAddress">Địa chỉ</label>
            </div>
            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                // placeholder="Địa chỉ email"
                required
                onChange={e => {
                  this.email = e.target.value;
                }}
              />
              <label htmlFor="inputEmail">Địa chỉ email</label>
            </div>

            <div className="form-label-group">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                // placeholder="Mật khẩu"
                required
                onChange={e => {
                  this.password = e.target.value;
                }}
              />
              <label htmlFor="inputPassword">Mật khẩu</label>
            </div>

            <button
              className="btn btn-lg btn-info btn-block"
              type="submit"
              onClick={()=> {
                

                console.log(this.props);
              }}
            >
              Đăng ký
            </button>
            <div className="social-login mt-md-2">
            <FacebookLogin
              appId="1088597931155576"
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="loginBtn--facebook loginBtn"
            />
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              render={renderProps => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                 type="button" className="loginBtn loginBtn--google">
                Login with Google
              </button>
              )}
              buttonText="Login"
              onSuccess={()=>{

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
