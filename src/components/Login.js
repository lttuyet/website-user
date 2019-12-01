/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Menu from './Menu';

import './App.css';

function Login() {
  const responseFacebook = response => {
    console.log(response);
  };
  return (

    <div>
      <Menu/>
      <div className="my_bd_rg">
        <form className="form-signin myshadow">
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal separate">Đăng nhập</h1>
          </div>

          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              //   placeholder="Địa chỉ email"
              required
              autoFocus
              defaultValue=""
            />
            <label htmlFor="inputEmail">Địa chỉ email</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              //   placeholder="Mật khẩu"
              defaultValue=""
              required
            />
            <label htmlFor="inputPassword">Mật khẩu</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Nhớ mật khẩu
            </label>
          </div>

          <button className="btn btn-lg btn-info btn-block" type="submit">
            Đăng nhập
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

export default Login;
