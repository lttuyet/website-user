import React, { PureComponent } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Menu from '../containers/MenuContainer';
import { Redirect } from 'react-router-dom';
import './App.css';

class Login extends PureComponent {
  constructor() {
    super();

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      email: '',
      password: '',
      errorInfo: ''
    }
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
      const user = {
        name: res.name,
        type: "facebook",
        idFb: res.id,
        image: res.picture.data.url
      }

      st.loginFB(user);
    };

    const responseGoogle = res => {
      const user = {
        name: res.w3.ig,
        type: "google",
        idGg: res.w3.Eea,
        image: res.w3.Paa
      }

      st.loginGG(user);
    };

    return (
      <div>
        <Menu />
        <div className="my_bd_rg">
          <form className="form-signin myshadow"
            onSubmit={event => {
              event.preventDefault();

              const user = {
                email: this.state.email,
                password: this.state.password,
                type: 'normal'
              }

              st.login(user);
            }}>
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
                required
                autoFocus
                value={this.state.email} onChange={this.handleEmailChange}
              />
              <label htmlFor="inputEmail">Email</label>
            </div>

            <div className="form-label-group">
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                value={this.state.password} onChange={this.handlePasswordChange}
                required
              />
              <label htmlFor="inputPassword">Mật khẩu</label>
            </div>
            <div><label className=" col-form-label-sm ml-md-1 text-danger">{st.errorInfo}</label></div>
            <button className="btn btn-lg btn-info btn-block" type="submit">
              Đăng nhập
          </button>
            <div className="social-login mt-md-2">
              <FacebookLogin
                appId="1415360621958753"
                callback={responseFacebook}
                fields="name,email,picture"
                cssClass="loginBtn--facebook loginBtn"
                textButton="Login with Facebook "
              />
              <GoogleLogin
                clientId="366483547912-mq7713gnkrffacq9e6p2na1i2os9jeed.apps.googleusercontent.com"
                render={renderProps => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    type="button" className="loginBtn loginBtn--google">
                    Login with Google
              </button>
                )}
                onSuccess={responseGoogle}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
